/**
 * VOCAB STUDIO - Application Logic
 * Pure Vanilla JavaScript (No backend, no external dependencies, localStorage persistence)
 */

// LocalStorage Keys
const STORAGE_KEYS = {
  MASTERED: 'vocab_mastered_ids',
  REVIEW: 'vocab_review_ids',
  THEME: 'vocab_theme_preference'
};

// Application State
const state = {
  activeTab: 'flashcard',
  filteredList: [],
  currentIndex: 0,
  isFlipped: false,
  masteredSet: new Set(),
  reviewSet: new Set(),
  filterPart: 'all',
  filterStatus: 'all',
  searchQuery: '',
  quiz: {
    roundList: [],
    roundIndex: 0,
    currentQuestion: null,
    score: 0,
    answered: false,
    wrongItems: []
  }
};

// Initialize State from LocalStorage
function initStorage() {
  try {
    const savedMastered = JSON.parse(localStorage.getItem(STORAGE_KEYS.MASTERED) || '[]');
    const savedReview = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEW) || '[]');
    state.masteredSet = new Set(savedMastered);
    state.reviewSet = new Set(savedReview);

    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    setTheme(savedTheme);
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

function persistProgress() {
  try {
    localStorage.setItem(STORAGE_KEYS.MASTERED, JSON.stringify([...state.masteredSet]));
    localStorage.setItem(STORAGE_KEYS.REVIEW, JSON.stringify([...state.reviewSet]));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

// Theme Toggle
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark'
      ? '<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    themeBtn.title = theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối';
  }
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// Text-to-Speech (Native Web Speech API)
function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Filtering & Dataset Preparation
function applyFilters() {
  state.filteredList = VOCAB_DATA.filter(item => {
    // Part filter
    if (state.filterPart === 'b1' && item.part !== 'b1') return false;
    if (state.filterPart === 'academic' && item.part !== 'academic') return false;
    if (state.filterPart.startsWith('sub:')) {
      const sub = state.filterPart.replace('sub:', '');
      if (item.subCategory !== sub) return false;
    }

    // Status filter
    const isMastered = state.masteredSet.has(item.id);
    const isReview = state.reviewSet.has(item.id);

    if (state.filterStatus === 'mastered' && !isMastered) return false;
    if (state.filterStatus === 'review' && !isReview) return false;
    if (state.filterStatus === 'unlearned' && (isMastered || isReview)) return false;

    return true;
  });

  if (state.currentIndex >= state.filteredList.length) {
    state.currentIndex = 0;
  }

  updateStatsBadges();
}

function updateStatsBadges() {
  const currentPool = state.filterPart === 'all'
    ? VOCAB_DATA
    : VOCAB_DATA.filter(item => {
      if (state.filterPart === 'b1' && item.part !== 'b1') return false;
      if (state.filterPart === 'academic' && item.part !== 'academic') return false;
      if (state.filterPart.startsWith('sub:')) {
        const sub = state.filterPart.replace('sub:', '');
        if (item.subCategory !== sub) return false;
      }
      return true;
    });

  const totalCount = currentPool.length;
  let masteredCount = 0;
  let reviewCount = 0;
  currentPool.forEach(item => {
    if (state.masteredSet.has(item.id)) masteredCount++;
    if (state.reviewSet.has(item.id)) reviewCount++;
  });

  const totalEl = document.getElementById('stat-total');
  const masteredEl = document.getElementById('stat-mastered');
  const reviewEl = document.getElementById('stat-review');

  if (totalEl) totalEl.innerText = `${totalCount} từ`;
  if (masteredEl) masteredEl.innerText = `${masteredCount} đã thuộc`;
  if (reviewEl) reviewEl.innerText = `${reviewCount} cần ôn`;
}

// Tab Switching
function switchTab(tabName) {
  state.activeTab = tabName;

  ['flashcard', 'quiz', 'wordlist'].forEach(t => {
    const view = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    if (t === tabName) {
      if (view) view.classList.remove('hidden');
      if (btn) btn.classList.add('active');
    } else {
      if (view) view.classList.add('hidden');
      if (btn) btn.classList.remove('active');
    }
  });

  if (tabName === 'flashcard') {
    renderFlashcard();
  } else if (tabName === 'quiz') {
    initQuizSession();
  } else if (tabName === 'wordlist') {
    renderWordlistTable();
  }
}

// =========================================================
// FLASHCARD MODULE
// =========================================================

function toggleFlip() {
  state.isFlipped = !state.isFlipped;
  const cardInner = document.getElementById('flashcard-inner');
  if (cardInner) {
    if (state.isFlipped) cardInner.classList.add('flipped');
    else cardInner.classList.remove('flipped');
  }
}

function renderFlashcard() {
  const cardInner = document.getElementById('flashcard-inner');
  const emptyState = document.getElementById('flashcard-empty-state');
  const cardWrapper = document.getElementById('flashcard-main-wrapper');

  if (state.filteredList.length === 0) {
    if (cardWrapper) cardWrapper.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (cardWrapper) cardWrapper.classList.remove('hidden');
  if (emptyState) emptyState.classList.add('hidden');

  // Reset flip
  state.isFlipped = false;
  if (cardInner) cardInner.classList.remove('flipped');

  const item = state.filteredList[state.currentIndex];
  if (!item) return;

  // Front Face
  const wordEl = document.getElementById('fc-word');
  const ipaEl = document.getElementById('fc-ipa');
  const tagEl = document.getElementById('fc-tag');
  const sourceEl = document.getElementById('fc-source');
  const hintEl = document.getElementById('fc-hint');

  if (wordEl) wordEl.innerText = item.word;
  if (ipaEl) ipaEl.innerText = item.ipa;
  if (tagEl) {
    tagEl.innerText = item.type;
    tagEl.className = 'tag-badge ' + getTagClass(item.type);
  }
  if (sourceEl) sourceEl.innerText = `${item.subCategory}`;

  // Mask the word in the hint sentence
  if (hintEl) {
    const regex = new RegExp(escapeRegExp(item.word), 'gi');
    const maskedSentence = item.sentence.replace(regex, '[ . . . ]');
    hintEl.innerText = `Ngữ cảnh: "${maskedSentence}"`;
  }

  // Back Face
  const meaningEl = document.getElementById('fc-meaning');
  const exampleTextEl = document.getElementById('fc-example-text');
  const backTagEl = document.getElementById('fc-back-tag');

  if (meaningEl) meaningEl.innerText = item.meaning;
  if (backTagEl) backTagEl.innerText = `${item.type} • ${item.subCategory}`;

  if (exampleTextEl) {
    const regex = new RegExp(`(${escapeRegExp(item.word)})`, 'gi');
    exampleTextEl.innerHTML = item.sentence.replace(
      regex,
      '<span class="highlight-keyword">$1</span>'
    );
  }

  // Progress Bar & Counter
  const countEl = document.getElementById('fc-progress-count');
  const progressFill = document.getElementById('fc-progress-fill');
  if (countEl) countEl.innerText = `${state.currentIndex + 1} / ${state.filteredList.length}`;
  if (progressFill) {
    const pct = ((state.currentIndex + 1) / state.filteredList.length) * 100;
    progressFill.style.width = `${pct}%`;
  }
}

function nextCard() {
  if (state.filteredList.length === 0) return;
  state.currentIndex = (state.currentIndex + 1) % state.filteredList.length;
  renderFlashcard();
}

function prevCard() {
  if (state.filteredList.length === 0) return;
  state.currentIndex = (state.currentIndex - 1 + state.filteredList.length) % state.filteredList.length;
  renderFlashcard();
}

function shuffleCards() {
  for (let i = state.filteredList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.filteredList[i], state.filteredList[j]] = [state.filteredList[j], state.filteredList[i]];
  }
  state.currentIndex = 0;
  renderFlashcard();
}

function markCardReview() {
  if (state.filteredList.length === 0) return;
  const item = state.filteredList[state.currentIndex];
  state.reviewSet.add(item.id);
  state.masteredSet.delete(item.id);
  persistProgress();
  updateStatsBadges();
  nextCard();
}

function markCardMastered() {
  if (state.filteredList.length === 0) return;
  const item = state.filteredList[state.currentIndex];
  state.masteredSet.add(item.id);
  state.reviewSet.delete(item.id);
  persistProgress();
  updateStatsBadges();
  nextCard();
}

// =========================================================
// CONTEXT CLOZE QUIZ MODULE
// =========================================================

  function initQuizSession(customPool = null) {
    const quizCard = document.getElementById('quiz-card-wrapper');
    const summaryCard = document.getElementById('quiz-summary-card');
    const emptyState = document.getElementById('quiz-empty-state');

      // Hide summary card
      if (summaryCard) summaryCard.classList.add('hidden');

      const pool = customPool || state.filteredList;

      if (!pool || pool.length === 0) {
        if (quizCard) quizCard.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        state.quiz.currentQuestion = null;
        return;
      }

      if (quizCard) quizCard.classList.remove('hidden');
      if (emptyState) emptyState.classList.add('hidden');

      // Create round with all items shuffled
      state.quiz.roundList = [...pool].sort(() => Math.random() - 0.5);
      state.quiz.roundIndex = 0;
      state.quiz.score = 0;
      state.quiz.answered = false;
      state.quiz.wrongItems = [];

      loadNextQuizQuestion();
    }

    function loadNextQuizQuestion() {
        if (state.quiz.roundIndex >= state.quiz.roundList.length) {
          showQuizSummary();
          return;
        }

        const currentItem = state.quiz.roundList[state.quiz.roundIndex];
        if (!currentItem) return;
        state.quiz.currentQuestion = currentItem;
        state.quiz.answered = false;

        const totalQuestions = state.quiz.roundList.length;
        const currentNum = state.quiz.roundIndex + 1;

        // Header and Progress Meta
        const progressBadge = document.getElementById('quiz-progress-badge');
        if (progressBadge) {
          progressBadge.innerText = `Câu ${currentNum} / ${totalQuestions}`;
        }

        const scoreBadge = document.getElementById('quiz-score-badge');
        if (scoreBadge) {
          scoreBadge.innerText = `Đúng: ${state.quiz.score} / ${state.quiz.roundIndex}`;
        }

        const progressFill = document.getElementById('quiz-progress-fill');
        if (progressFill) {
          const percent = Math.round((currentNum / totalQuestions) * 100);
          progressFill.style.width = `${percent}%`;
        }

        document.getElementById('quiz-tag').innerText = currentItem.type;
        document.getElementById('quiz-tag').className = 'tag-badge ' + getTagClass(currentItem.type);
        document.getElementById('quiz-ipa').innerText = currentItem.ipa;
        document.getElementById('quiz-meaning').innerText = currentItem.meaning;
        document.getElementById('quiz-source').innerText = currentItem.subCategory;

        // Hide IPA & audio pronunciation until answered to prevent spoiling
        const pronounceBox = document.getElementById('quiz-pronounce-box');
        if (pronounceBox) pronounceBox.classList.add('hidden');

        // Cloze Sentence
        const regex = new RegExp(`(${escapeRegExp(currentItem.word)})`, 'i');
        const parts = currentItem.sentence.split(regex);
        const startText = parts[0] || '';
        const endText = parts[2] !== undefined ? parts[2] : '';

        document.getElementById('quiz-sentence-start').innerText = startText;
        document.getElementById('quiz-sentence-end').innerText = endText;

        const blankSlot = document.getElementById('quiz-blank-slot');
        blankSlot.innerText = '_______';
        blankSlot.className = 'quiz-blank-slot';

        // Generate 4 Options (1 correct + 3 distractors)
        const options = [currentItem.word];

        // Prefer distractors from filteredList, fallback to VOCAB_DATA
        const filteredOthers = state.filteredList
          .filter(d => d.word.toLowerCase() !== currentItem.word.toLowerCase())
          .map(d => d.word);
        const globalOthers = VOCAB_DATA
          .filter(d => d.word.toLowerCase() !== currentItem.word.toLowerCase() && !filteredOthers.includes(d.word))
          .map(d => d.word);

        const shuffledDistractors = [
          ...[...new Set(filteredOthers)].sort(() => Math.random() - 0.5),
          ...[...new Set(globalOthers)].sort(() => Math.random() - 0.5)
        ];

        for (const w of shuffledDistractors) {
          if (options.length >= 4) break;
          options.push(w);
        }
        options.sort(() => Math.random() - 0.5);

        // Render Option Buttons
        const optContainer = document.getElementById('quiz-options-container');
        optContainer.innerHTML = '';

        const labels = ['A', 'B', 'C', 'D'];
        options.forEach((opt, idx) => {
          const btn = document.createElement('button');
          btn.className = 'quiz-opt-btn';
          btn.innerHTML = `<span><strong>${labels[idx]}.</strong> ${opt}</span> <span style="opacity:0.4;">↵</span>`;
          btn.onclick = () => handleQuizAnswer(opt, currentItem.word, btn);
          optContainer.appendChild(btn);
        });

        // Hide feedback and next button
        const feedback = document.getElementById('quiz-feedback');
        feedback.className = 'quiz-feedback-box';
        const nextBtn = document.getElementById('quiz-next-btn');
        nextBtn.classList.add('hidden');
      }

      function handleQuizAnswer(selectedWord, correctWord, selectedBtn) {
        if (state.quiz.answered) return;
        state.quiz.answered = true;

        const isCorrect = selectedWord.toLowerCase() === correctWord.toLowerCase();
        if (isCorrect) {
          state.quiz.score++;
          state.masteredSet.add(state.quiz.currentQuestion.id);
          state.reviewSet.delete(state.quiz.currentQuestion.id);
        } else {
          state.quiz.wrongItems.push(state.quiz.currentQuestion);
          state.reviewSet.add(state.quiz.currentQuestion.id);
          state.masteredSet.delete(state.quiz.currentQuestion.id);
        }
        persistProgress();
        updateStatsBadges();

        // Update Score badge
        const scoreBadge = document.getElementById('quiz-score-badge');
        if (scoreBadge) {
          scoreBadge.innerText = `Đúng: ${state.quiz.score} / ${state.quiz.roundIndex + 1}`;
        }

        // Update blank slot
        const blankSlot = document.getElementById('quiz-blank-slot');
        blankSlot.innerText = correctWord;
        blankSlot.className = 'quiz-blank-slot ' + (isCorrect ? 'correct' : 'incorrect');

        // Reveal pronunciation & audio button now that user has answered
        const pronounceBox = document.getElementById('quiz-pronounce-box');
        if (pronounceBox) pronounceBox.classList.remove('hidden');

        // Disable all option buttons and highlight results
        const allBtns = document.querySelectorAll('.quiz-opt-btn');
        allBtns.forEach(btn => {
          btn.disabled = true;
          const text = btn.innerText.replace(/^[A-D]\.\s*/, '').replace(/\s*↵$/, '').trim();
          if (text.toLowerCase() === correctWord.toLowerCase()) {
            btn.classList.add('correct');
          } else if (btn === selectedBtn && !isCorrect) {
            btn.classList.add('wrong');
          }
        });

        // Feedback Box
        const feedback = document.getElementById('quiz-feedback');
        feedback.classList.add('show');
        if (isCorrect) {
          feedback.className = 'quiz-feedback-box show correct';
          feedback.innerHTML = `<strong>Chính xác!</strong> Từ đúng theo ngữ cảnh câu là <u>${correctWord}</u>.`;
        } else {
          feedback.className = 'quiz-feedback-box show incorrect';
          feedback.innerHTML = `<strong>Chưa chính xác.</strong> Đáp án đúng là <u>${correctWord}</u> (${state.quiz.currentQuestion.meaning}).`;
        }

        // Show Next Button (or finish round button if last question)
        const nextBtn = document.getElementById('quiz-next-btn');
        const isLastQuestion = state.quiz.roundIndex + 1 >= state.quiz.roundList.length;
        if (isLastQuestion) {
          nextBtn.innerHTML = `Xem kết quả lượt học 🎉 (Enter)`;
        } else {
          nextBtn.innerHTML = `Câu tiếp theo → (Enter)`;
        }
        nextBtn.classList.remove('hidden');
      }

      function handleNextQuizStep() {
        state.quiz.roundIndex++;
        loadNextQuizQuestion();
      }

      function showQuizSummary() {
        const quizCard = document.getElementById('quiz-card-wrapper');
        const summaryCard = document.getElementById('quiz-summary-card');
        if (quizCard) quizCard.classList.add('hidden');
        if (!summaryCard) return;

        summaryCard.classList.remove('hidden');

        const total = state.quiz.roundList.length;
        const correct = state.quiz.score;
        const wrong = state.quiz.wrongItems.length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

        // Category name for subtitle
        const dropdownLabel = document.getElementById('category-dropdown-label');
        const catName = dropdownLabel ? dropdownLabel.innerText : 'Bộ từ vựng';

        const subtitle = document.getElementById('quiz-summary-subtitle');
        if (subtitle) {
          subtitle.innerHTML = `Bạn đã kiểm tra hết <strong>${total} / ${total} từ</strong> trong <strong>${catName}</strong>`;
        }

        const totalEl = document.getElementById('summary-total-tested');
        if (totalEl) totalEl.innerText = `${total} / ${total}`;

        const correctEl = document.getElementById('summary-correct-count');
        if (correctEl) correctEl.innerText = `${correct}`;

        const wrongEl = document.getElementById('summary-wrong-count');
        if (wrongEl) wrongEl.innerText = `${wrong}`;

        const accuracyEl = document.getElementById('summary-accuracy');
        if (accuracyEl) accuracyEl.innerText = `${accuracy}%`;

        // Wrong words section
        const wrongSection = document.getElementById('summary-wrong-words-section');
        const wrongList = document.getElementById('summary-wrong-words-list');
        const retryWrongBtn = document.getElementById('summary-retry-wrong-btn');
        const retryAllBtn = document.getElementById('summary-retry-all-btn');

        if (retryAllBtn) {
          retryAllBtn.innerText = `🔄 Luyện lại toàn bộ (${total} từ)`;
        }

        if (wrong > 0 && wrongSection && wrongList) {
          wrongSection.classList.remove('hidden');
          if (retryWrongBtn) {
            retryWrongBtn.classList.remove('hidden');
            retryWrongBtn.innerText = `⚠️ Chỉ luyện lại ${wrong} từ sai`;
          }

          wrongList.innerHTML = '';
          state.quiz.wrongItems.forEach(item => {
            const row = document.createElement('div');
            row.className = 'summary-wrong-row';
            row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0;">
          <strong style="color: var(--text-primary); font-size: 0.85rem;">${item.word}</strong>
          <span class="tag-badge ${getTagClass(item.type)}" style="font-size: 0.65rem; padding: 0.1rem 0.4rem;">${item.type}</span>
          <span style="color: var(--text-muted); font-size: 0.8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.meaning}</span>
        </div>
        <button class="icon-btn" style="width: 1.85rem; height: 1.85rem; flex-shrink: 0;" onclick="speakWord('${escapeSingleQuotes(item.word)}')" title="Nghe phát âm" aria-label="Nghe">
          <svg class="ui-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      `;
            wrongList.appendChild(row);
          });
        } else {
          if (wrongSection) wrongSection.classList.add('hidden');
          if (retryWrongBtn) retryWrongBtn.classList.add('hidden');
        }
      }

      function retryWrongWordsQuiz() {
        if (state.quiz.wrongItems && state.quiz.wrongItems.length > 0) {
          initQuizSession([...state.quiz.wrongItems]);
        }
      }

      // =========================================================
      // WORDLIST / EXPLORER MODULE
      // =========================================================

      function renderWordlistTable() {
        const query = state.searchQuery.toLowerCase().trim();
        const tbody = document.getElementById('wordlist-tbody');
        const countEl = document.getElementById('table-result-count');

        const filtered = VOCAB_DATA.filter(item => {
          // Topic filter
          if (state.filterPart === 'b1' && item.part !== 'b1') return false;
          if (state.filterPart === 'academic' && item.part !== 'academic') return false;
          if (state.filterPart.startsWith('sub:') && item.subCategory !== state.filterPart.replace('sub:', '')) return false;

          // Search query
          if (!query) return true;
          return (
            item.word.toLowerCase().includes(query) ||
            item.ipa.toLowerCase().includes(query) ||
            item.meaning.toLowerCase().includes(query) ||
            item.sentence.toLowerCase().includes(query)
          );
        });

        if (countEl) countEl.innerText = `${filtered.length} từ`;
        if (!tbody) return;

        tbody.innerHTML = '';

        if (filtered.length === 0) {
          tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.</td></tr>`;
          return;
        }

        filtered.forEach(item => {
          const isMastered = state.masteredSet.has(item.id);
          const isReview = state.reviewSet.has(item.id);

          const tr = document.createElement('tr');
          tr.innerHTML = `
      <td>
        <div class="table-word">${item.word}</div>
        <div class="table-ipa">${item.ipa}</div>
      </td>
      <td>
        <span class="tag-badge ${getTagClass(item.type)}">${item.type}</span>
      </td>
      <td>
        <strong>${item.meaning}</strong>
      </td>
      <td class="table-example">
        ${item.sentence}
      </td>
      <td>
        <button class="status-toggle-btn ${isMastered ? 'mastered' : isReview ? 'review' : ''}" onclick="toggleWordStatus(${item.id})">
          <span class="status-dot"></span>${isMastered ? 'Đã thuộc' : isReview ? 'Cần ôn' : 'Chưa học'}
        </button>
      </td>
      <td style="text-align:center;">
        <button class="icon-btn" onclick="speakWord('${escapeSingleQuotes(item.word)}')" title="Phát âm chuẩn" aria-label="Phát âm">
          <svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      </td>
    `;
          tbody.appendChild(tr);
        });
      }

      function toggleWordStatus(id) {
        if (state.masteredSet.has(id)) {
          state.masteredSet.delete(id);
          state.reviewSet.add(id);
        } else if (state.reviewSet.has(id)) {
          state.reviewSet.delete(id);
        } else {
          state.masteredSet.add(id);
        }
        persistProgress();
        updateStatsBadges();
        renderWordlistTable();
      }

      function resetAllProgress() {
        if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ học (xóa trạng thái đã thuộc/cần ôn) không?')) {
          state.masteredSet.clear();
          state.reviewSet.clear();
          persistProgress();
          updateStatsBadges();
          applyFilters();
          if (state.activeTab === 'flashcard') renderFlashcard();
          if (state.activeTab === 'quiz') initQuizSession();
          if (state.activeTab === 'wordlist') renderWordlistTable();
        }
      }

      // =========================================================
      // HELPER FUNCTIONS & LISTENERS
      // =========================================================

      function getTagClass(type) {
        const clean = type.toLowerCase().replace(/\s+/g, '-');
        if (clean.includes('noun')) return 'noun';
        if (clean.includes('verb')) return 'verb';
        if (clean.includes('adjective')) return 'adjective';
        if (clean.includes('adverb')) return 'adverb';
        if (clean.includes('phrasal')) return 'phrasal-verb';
        return 'word-pattern';
      }

      function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

      function escapeSingleQuotes(string) {
        return string.replace(/'/g, "\\'");
      }

      // Populate Custom Category Dropdown
      function populateCategoryFilter() {
        const menu = document.getElementById('category-dropdown-menu');
        const trigger = document.getElementById('category-dropdown-trigger');
        const label = document.getElementById('category-dropdown-label');
        if (!menu || !trigger || !label) return;

        const b1Count = VOCAB_DATA.filter(d => d.part === 'b1').length;
        const academicCount = VOCAB_DATA.filter(d => d.part === 'academic').length;
        const getSubCount = (sub) => VOCAB_DATA.filter(d => d.subCategory === sub).length;

        const items = [
          { value: 'all', label: `Tất cả từ vựng (${VOCAB_DATA.length} từ)`, isHeader: false, indent: false },
          { isHeader: true, title: `Giáo trình Destination B1 (${b1Count} từ)` },
          { value: 'b1', label: `Tất cả Destination B1 (${b1Count} từ)`, indent: true },
          { value: 'sub:Topic Vocabulary', label: `1. Topic Vocabulary (${getSubCount('Topic Vocabulary')} từ)`, indent: true },
          { value: 'sub:Phrasal Verbs', label: `2. Phrasal Verbs (${getSubCount('Phrasal Verbs')} từ)`, indent: true },
          { value: 'sub:Prepositional Phrases', label: `3. Prepositional Phrases (${getSubCount('Prepositional Phrases')} từ)`, indent: true },
          { value: 'sub:Word Formation', label: `4. Word Formation (${getSubCount('Word Formation')} từ)`, indent: true },
          { value: 'sub:Word Patterns', label: `5. Word Patterns (${getSubCount('Word Patterns')} từ)`, indent: true },
          { isHeader: true, title: `Academic Vocabulary in Use (${academicCount} từ)` },
          { value: 'academic', label: `Tất cả Academic Vocab (${academicCount} từ)`, indent: true },
          { value: 'sub:Everyday vs Academic', label: `1. Everyday vs Academic (${getSubCount('Everyday vs Academic')} từ)`, indent: true },
          { value: 'sub:Neutral vs Formal', label: `2. Neutral vs Formal (${getSubCount('Neutral vs Formal')} từ)`, indent: true },
          { value: 'sub:Academic Vocabulary', label: `3. Academic Vocabulary (${getSubCount('Academic Vocabulary')} từ)`, indent: true },
          { value: 'sub:Word Families', label: `4. Word Families (${getSubCount('Word Families')} từ)`, indent: true },
          { value: 'sub:Expressions', label: `5. Common Expressions (${getSubCount('Expressions')} từ)`, indent: true },
        ];

        menu.innerHTML = '';
        items.forEach(item => {
          if (item.isHeader) {
            const header = document.createElement('div');
            header.className = 'dropdown-group-header';
            header.innerText = item.title;
            menu.appendChild(header);
          } else {
            const opt = document.createElement('div');
            const isActive = state.filterPart === item.value;
            opt.className = `dropdown-option ${item.indent ? 'indent' : ''} ${isActive ? 'active' : ''}`;
            opt.setAttribute('data-value', item.value);
            opt.innerHTML = `
        <span>${item.label}</span>
        <svg class="dropdown-check ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
            opt.onclick = (e) => {
              e.stopPropagation();
              selectCategory(item.value, item.label);
            };
            menu.appendChild(opt);
          }
        });

        // Toggle Dropdown
        trigger.onclick = (e) => {
          e.stopPropagation();
          const isOpen = !menu.classList.contains('hidden');
          if (isOpen) {
            closeCategoryDropdown();
          } else {
            openCategoryDropdown();
          }
        };

        // Close when clicking outside
        document.addEventListener('click', (e) => {
          if (!trigger.contains(e.target) && !menu.contains(e.target)) {
            closeCategoryDropdown();
          }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeCategoryDropdown();
        });
      }

      function openCategoryDropdown() {
        const menu = document.getElementById('category-dropdown-menu');
        const trigger = document.getElementById('category-dropdown-trigger');
        if (menu && trigger) {
          menu.classList.remove('hidden');
          trigger.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      }

      function closeCategoryDropdown() {
        const menu = document.getElementById('category-dropdown-menu');
        const trigger = document.getElementById('category-dropdown-trigger');
        if (menu && trigger) {
          menu.classList.add('hidden');
          trigger.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      }

      function selectCategory(value, labelText) {
        state.filterPart = value;
        const label = document.getElementById('category-dropdown-label');
        if (label) label.innerText = labelText;

        // Update checkmarks / active classes in dropdown
        document.querySelectorAll('.dropdown-option').forEach(el => {
          if (el.getAttribute('data-value') === value) el.classList.add('active');
          else el.classList.remove('active');
        });

        closeCategoryDropdown();
        applyFilters();
        if (state.activeTab === 'flashcard') renderFlashcard();
        if (state.activeTab === 'quiz') initQuizSession();
        if (state.activeTab === 'wordlist') renderWordlistTable();
      }

      // Global Keyboard Shortcuts
      window.addEventListener('keydown', (e) => {
        // Ignore shortcuts if focusing in input field
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (state.activeTab === 'flashcard') {
          if (e.code === 'Space') {
            e.preventDefault();
            toggleFlip();
          } else if (e.key === 'ArrowRight') {
            nextCard();
          } else if (e.key === 'ArrowLeft') {
            prevCard();
          } else if (e.key === '1') {
            markCardReview();
          } else if (e.key === '2') {
            markCardMastered();
          } else if (e.key === 'p' || e.key === 'P') {
            if (state.filteredList[state.currentIndex]) {
              speakWord(state.filteredList[state.currentIndex].word);
            }
          }
        } else if (state.activeTab === 'quiz') {
          const summaryCard = document.getElementById('quiz-summary-card');
          const isSummaryVisible = summaryCard && !summaryCard.classList.contains('hidden');

          if (isSummaryVisible) {
            if (e.key === 'Enter' || e.code === 'Space') {
              e.preventDefault();
              initQuizSession();
            }
            return;
          }

          if (!state.quiz.answered) {
            const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
            const idx = keyMap[e.key.toLowerCase()];
            if (idx !== undefined) {
              const btns = document.querySelectorAll('.quiz-opt-btn');
              if (btns[idx]) btns[idx].click();
            }
          } else {
            if (e.key === 'p' || e.key === 'P') {
              if (state.quiz.currentQuestion) {
                speakWord(state.quiz.currentQuestion.word);
              }
            } else if (e.key === 'Enter' || e.code === 'Space') {
              e.preventDefault();
              handleNextQuizStep();
            }
          }
        }
      });

      // Mobile Touch Gesture Support (Swipe left/right to change card)
      function initTouchGestures() {
        const cardWrapper = document.getElementById('flashcard-main-wrapper');
        if (!cardWrapper) return;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        cardWrapper.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].clientX;
          touchStartY = e.changedTouches[0].clientY;
        }, { passive: true });

        cardWrapper.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].clientX;
          touchEndY = e.changedTouches[0].clientY;
          handleCardSwipe();
        }, { passive: true });

        function handleCardSwipe() {
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;
          // Dominant horizontal swipe (> 45px)
          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
            if (diffX < 0) {
              nextCard(); // Swiped left -> next
            } else {
              prevCard(); // Swiped right -> prev
            }
          }
        }
      }

      // App Startup
      document.addEventListener('DOMContentLoaded', () => {
        initStorage();
        populateCategoryFilter();
        applyFilters();
        renderFlashcard();
        initTouchGestures();

        // Search input handler
        const searchInput = document.getElementById('search-input-field');
        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderWordlistTable();
          });
        }
      });
