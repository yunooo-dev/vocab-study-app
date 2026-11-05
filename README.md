# Vocab Studio - Destination B1 & Academic Vocabulary

Ứng dụng web học từ vựng tiếng Anh tinh gọn, chuẩn ngữ cảnh, thiết kế tối giản hiện đại. Toàn bộ 123 từ vựng và câu ví dụ được trích xuất trực tiếp từ 9 trang giáo trình **Destination B1** và **Academic Vocabulary in Use (Unit 1)**.

---

## Cách mở và sử dụng

Không cần cài đặt, không cần backend, không cần Node.js hay database:
1. Mở trực tiếp file [`index.html`](index.html) bằng bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox).
2. Hoặc nhấp đúp chuột vào file `index.html` trong thư mục `vocab-study-app`.

---

## 3 Chế độ học tập

### 1. Flashcards (Học chủ động - Active Recall)
- **Mặt trước**: Từ vựng to rõ, phiên âm quốc tế IPA, nhãn loại từ, nút phát âm giọng bản xứ (Web Speech API) và gợi ý câu theo ngữ cảnh.
- **Mặt sau**: Nghĩa tiếng Việt giải nghĩa ngữ cảnh + trọn vẹn câu ví dụ trong sách có tô đậm từ khóa.
- **Phím tắt nhanh**:
  - `Space`: Lật thẻ xem nghĩa / câu ví dụ.
  - `←` / `→`: Chuyển thẻ trước / sau.
  - `1`: Đánh dấu **Cần ôn lại**.
  - `2`: Đánh dấu **Đã thuộc**.
  - `P`: Nghe phát âm từ vựng.

### 2. Quiz Ngữ Cảnh (Context Cloze Test)
- Sử dụng chính các câu ví dụ từ giáo trình và đục lỗ từ khóa `[ _______ ]`.
- Bạn có thể nhấp chọn đáp án hoặc bấm phím `A`, `B`, `C`, `D` (hoặc `1`, `2`, `3`, `4`) trên bàn phím.
- Nhận phản hồi đúng/sai tức thì và tự động cập nhật điểm số.
- Bấm `Enter` hoặc `Space` để chuyển sang câu tiếp theo.

### 3. Bảng Tra Từ Thông Minh (Wordlist Explorer)
- Tra cứu tức thì từ vựng, phiên âm IPA, nghĩa tiếng Việt hoặc câu ví dụ.
- Lọc theo chuyên mục: Toàn bộ Destination B1, Academic Vocabulary, hoặc từng nhóm con (Phrasal Verbs, Word Formation, Collocations...).
- Đổi trạng thái từ: Chưa học ➔ Đã thuộc ➔ Cần ôn.
- Nút loa nghe phát âm cho từng từ.

---

## Lưu trữ dữ liệu
- Mọi tiến độ học tập (từ đã thuộc, từ cần ôn lại, giao diện sáng/tối) được lưu tự động trên trình duyệt (`localStorage`), không bị mất khi tải lại trang hay tắt máy.

---

## Cấu trúc thư mục
```text
vocab-study-app/
├── index.html        # Giao diện chính chuẩn HTML5 Semantic
├── style.css         # CSS hiện đại, tối giản, hỗ trợ Dark / Light mode
├── data.js           # Bộ dữ liệu 123 từ vựng & câu ví dụ đầy đủ
├── app.js            # Logic Flashcards, Quiz, Tra từ, Loa phát âm & LocalStorage
└── README.md         # Hướng dẫn sử dụng
```
