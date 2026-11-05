// Mảng dữ liệu trọn vẹn 87 từ trích xuất từ 9 trang Destination B1 & Academic Vocabulary in Use
const VOCAB_DATA = [
  // ==========================================
  // PART 1: DESTINATION B1
  // 1. Topic Vocabulary
  // ==========================================
  {
    id: 1,
    word: "beat",
    type: "verb",
    ipa: "/biːt/",
    meaning: "Đánh bại",
    sentence: "Our team managed to beat the strongest opponent.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 2,
    word: "board game",
    type: "noun phrase",
    ipa: "/ˈbɔːd ˌɡeɪm/",
    meaning: "Trò chơi cờ bàn",
    sentence: "Chess is a popular board game.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 3,
    word: "captain",
    type: "noun",
    ipa: "/ˈkæp.tɪn/",
    meaning: "Đội trưởng",
    sentence: "The captain encouraged all the players.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 4,
    word: "challenge",
    type: "noun",
    ipa: "/ˈtʃæl.ɪndʒ/",
    meaning: "Thử thách",
    sentence: "Learning a new language can be a real challenge.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 5,
    word: "champion",
    type: "noun",
    ipa: "/ˈtʃæm.pi.ən/",
    meaning: "Nhà vô địch",
    sentence: "She became the world champion last year.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 6,
    word: "cheat",
    type: "verb",
    ipa: "/tʃiːt/",
    meaning: "Gian lận",
    sentence: "You should never cheat in an examination.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 7,
    word: "classical music",
    type: "noun phrase",
    ipa: "/ˌklæs.ɪ.kəl ˈmjuː.zɪk/",
    meaning: "Nhạc cổ điển",
    sentence: "I enjoy listening to classical music.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 8,
    word: "club",
    type: "noun",
    ipa: "/klʌb/",
    meaning: "Câu lạc bộ",
    sentence: "He joined a local sports club.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 9,
    word: "coach",
    type: "noun",
    ipa: "/kəʊtʃ/",
    meaning: "Huấn luyện viên",
    sentence: "Our basketball coach is very experienced.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 10,
    word: "competition",
    type: "noun",
    ipa: "/ˌkɒm.pəˈtɪʃ.ən/",
    meaning: "Cuộc thi; sự cạnh tranh",
    sentence: "She won first prize in the singing competition.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 11,
    word: "concert",
    type: "noun",
    ipa: "/ˈkɒn.sət/",
    meaning: "Buổi hòa nhạc",
    sentence: "We went to a concert last weekend.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 12,
    word: "defeat",
    type: "noun",
    ipa: "/dɪˈfiːt/",
    meaning: "Sự thất bại",
    sentence: "Our team suffered a defeat in the final.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 13,
    word: "entertaining",
    type: "adjective",
    ipa: "/ˌen.təˈteɪ.nɪŋ/",
    meaning: "Thú vị; mang tính giải trí",
    sentence: "The film was very entertaining.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 14,
    word: "folk music",
    type: "noun phrase",
    ipa: "/ˈfəʊk ˌmjuː.zɪk/",
    meaning: "Nhạc dân gian",
    sentence: "My grandfather enjoys listening to folk music.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 15,
    word: "group",
    type: "noun",
    ipa: "/ɡruːp/",
    meaning: "Nhóm",
    sentence: "Our group consists of five members.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 16,
    word: "gym",
    type: "noun",
    ipa: "/dʒɪm/",
    meaning: "Phòng tập thể hình",
    sentence: "I go to the gym three times a week.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 17,
    word: "have fun",
    type: "verb phrase",
    ipa: "/hæv fʌn/",
    meaning: "Vui vẻ; vui chơi",
    sentence: "We have fun at the party.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 18,
    word: "interest",
    type: "noun",
    ipa: "/ˈɪn.trəst/",
    meaning: "Sở thích; mối quan tâm",
    sentence: "Children have different interests and hobbies.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 19,
    word: "member",
    type: "noun",
    ipa: "/ˈmem.bər/",
    meaning: "Thành viên",
    sentence: "Every club member must follow the rules.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 20,
    word: "opponent",
    type: "noun",
    ipa: "/əˈpəʊ.nənt/",
    meaning: "Đối thủ",
    sentence: "He was a strong opponent in the competition.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 21,
    word: "organise",
    type: "verb",
    ipa: "/ˈɔː.ɡən.aɪz/",
    meaning: "Tổ chức",
    sentence: "The school organises several sporting events every year.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 22,
    word: "pleasure",
    type: "noun",
    ipa: "/ˈpleʒ.ər/",
    meaning: "Niềm vui; sự thích thú",
    sentence: "Reading is one of my greatest pleasures.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 23,
    word: "rhythm",
    type: "noun",
    ipa: "/ˈrɪð.əm/",
    meaning: "Nhịp điệu",
    sentence: "The children danced to the rhythm of the music.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 24,
    word: "risk",
    type: "verb",
    ipa: "/rɪsk/",
    meaning: "Mạo hiểm; đánh liều",
    sentence: "You shouldn't risk your health for a competition.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 25,
    word: "score",
    type: "noun",
    ipa: "/skɔːr/",
    meaning: "Điểm số; tỷ số",
    sentence: "What was the final score of the match?",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 26,
    word: "support",
    type: "verb",
    ipa: "/səˈpɔːt/",
    meaning: "Ủng hộ; hỗ trợ",
    sentence: "Parents should support their children's interests.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 27,
    word: "team",
    type: "noun",
    ipa: "/tiːm/",
    meaning: "Đội; nhóm",
    sentence: "Our team played extremely well today.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 28,
    word: "train",
    type: "verb",
    ipa: "/treɪn/",
    meaning: "Luyện tập; huấn luyện",
    sentence: "Athletes train hard before important competitions.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },
  {
    id: 29,
    word: "video game",
    type: "noun phrase",
    ipa: "/ˈvɪd.i.əʊ ˌɡeɪm/",
    meaning: "Trò chơi điện tử",
    sentence: "I usually play video games in my free time.",
    part: "b1",
    subCategory: "Topic Vocabulary"
  },

  // 2. Phrasal Verbs
  {
    id: 30,
    word: "carry on",
    type: "phrasal verb",
    ipa: "/ˌkær.i ˈɒn/",
    meaning: "Tiếp tục",
    sentence: "We decided to carry on despite the difficulties.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 31,
    word: "eat out",
    type: "phrasal verb",
    ipa: "/ˌiːt ˈaʊt/",
    meaning: "Ăn ở nhà hàng",
    sentence: "We sometimes eat out at weekends.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 32,
    word: "give up",
    type: "phrasal verb",
    ipa: "/ˌɡɪv ˈʌp/",
    meaning: "Từ bỏ",
    sentence: "He gave up playing football last year.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 33,
    word: "join in",
    type: "phrasal verb",
    ipa: "/ˌdʒɔɪn ˈɪn/",
    meaning: "Tham gia",
    sentence: "She joined in the school competition.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 34,
    word: "send off",
    type: "phrasal verb",
    ipa: "/ˌsent ˈɒf/",
    meaning: "Truất quyền thi đấu",
    sentence: "The referee sent off the player for a serious foul.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 35,
    word: "take up",
    type: "phrasal verb",
    ipa: "/ˌteɪk ˈʌp/",
    meaning: "Bắt đầu một sở thích/hoạt động",
    sentence: "I took up swimming when I was young.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 36,
    word: "turn down",
    type: "phrasal verb",
    ipa: "/ˌtɜːn ˈdaʊn/",
    meaning: "Giảm âm lượng",
    sentence: "Could you turn down the television?",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },
  {
    id: 37,
    word: "turn up",
    type: "phrasal verb",
    ipa: "/ˌtɜːn ˈʌp/",
    meaning: "Tăng âm lượng",
    sentence: "Please turn up the radio.",
    part: "b1",
    subCategory: "Phrasal Verbs"
  },

  // 3. Prepositional Phrases
  {
    id: 38,
    word: "for a long time",
    type: "prepositional phrase",
    ipa: "/fər ə lɒŋ taɪm/",
    meaning: "Trong một thời gian dài",
    sentence: "She has been interested in music for a long time.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },
  {
    id: 39,
    word: "for fun",
    type: "prepositional phrase",
    ipa: "/fər fʌn/",
    meaning: "Để vui chơi; cho vui",
    sentence: "We play basketball for fun.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },
  {
    id: 40,
    word: "in the middle of",
    type: "prepositional phrase",
    ipa: "/ɪn ðə ˈmɪd.əl əv/",
    meaning: "Ở giữa; vào giữa",
    sentence: "He was injured in the middle of the game.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },
  {
    id: 41,
    word: "in time for",
    type: "prepositional phrase",
    ipa: "/ɪn taɪm fɔːr/",
    meaning: "Kịp lúc để",
    sentence: "You should finish your work in time for the concert.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },
  {
    id: 42,
    word: "on DVD",
    type: "prepositional phrase",
    ipa: "/ɒn ˌdiː.viːˈdiː/",
    meaning: "Trên đĩa DVD",
    sentence: "I watched the performance on DVD.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },
  {
    id: 43,
    word: "on stage",
    type: "prepositional phrase",
    ipa: "/ɒn steɪdʒ/",
    meaning: "Trên sân khấu",
    sentence: "The band performed on stage last night.",
    part: "b1",
    subCategory: "Prepositional Phrases"
  },

  // 4. Word Formation
  {
    id: 44,
    word: "action",
    type: "noun",
    ipa: "/ˈæk.ʃən/",
    meaning: "Hành động",
    sentence: "Taking action is sometimes better than doing nothing.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 45,
    word: "inactive",
    type: "adjective",
    ipa: "/ɪnˈæk.tɪv/",
    meaning: "Không hoạt động",
    sentence: "The machine is currently inactive.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 46,
    word: "actor",
    type: "noun",
    ipa: "/ˈæk.tər/",
    meaning: "Diễn viên",
    sentence: "He is a famous actor.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 47,
    word: "athlete",
    type: "noun",
    ipa: "/ˈæθ.liːt/",
    meaning: "Vận động viên",
    sentence: "The athlete trains every day.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 48,
    word: "athletic",
    type: "adjective",
    ipa: "/æθˈlet.ɪk/",
    meaning: "Khỏe mạnh; có năng khiếu thể thao",
    sentence: "She is very athletic.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 49,
    word: "athletics",
    type: "noun",
    ipa: "/æθˈlet.ɪks/",
    meaning: "Môn điền kinh",
    sentence: "Athletics is popular at our school.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 50,
    word: "child",
    type: "noun",
    ipa: "/tʃaɪld/",
    meaning: "Đứa trẻ",
    sentence: "The child is playing in the garden.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 51,
    word: "children",
    type: "plural noun",
    ipa: "/ˈtʃɪl.drən/",
    meaning: "Những đứa trẻ",
    sentence: "There are three children in the family.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 52,
    word: "childhood",
    type: "noun",
    ipa: "/ˈtʃaɪld.hʊd/",
    meaning: "Thời thơ ấu",
    sentence: "Childhood is an important stage of development.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 53,
    word: "collect",
    type: "verb",
    ipa: "/kəˈlekt/",
    meaning: "Thu thập",
    sentence: "We need to collect more information.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 54,
    word: "collection",
    type: "noun",
    ipa: "/kəˈlek.ʃən/",
    meaning: "Bộ sưu tập; sự thu thập",
    sentence: "The collection includes rare books.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 55,
    word: "collector",
    type: "noun",
    ipa: "/kəˈlek.tər/",
    meaning: "Người sưu tập",
    sentence: "He is a stamp collector.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 56,
    word: "entertain",
    type: "verb",
    ipa: "/ˌen.təˈteɪn/",
    meaning: "Giải trí; làm cho vui",
    sentence: "The children enjoyed the performance and were entertained.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 57,
    word: "entertainment",
    type: "noun",
    ipa: "/ˌen.təˈteɪn.mənt/",
    meaning: "Ngành giải trí; sự giải trí",
    sentence: "The entertainment industry is growing rapidly.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 58,
    word: "hero",
    type: "noun",
    ipa: "/ˈhɪə.rəʊ/",
    meaning: "Anh hùng",
    sentence: "The hero saved the child from danger.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 59,
    word: "heroic",
    type: "adjective",
    ipa: "/həˈrəʊ.ɪk/",
    meaning: "Anh dũng; anh hùng",
    sentence: "She showed heroic courage.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 60,
    word: "heroine",
    type: "noun",
    ipa: "/ˈher.əʊ.ɪn/",
    meaning: "Nữ anh hùng; nhân vật nữ chính",
    sentence: "The heroine of the story is a young scientist.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 61,
    word: "music",
    type: "noun",
    ipa: "/ˈmjuː.zɪk/",
    meaning: "Âm nhạc",
    sentence: "Music plays an important role in our lives.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 62,
    word: "musical",
    type: "adjective",
    ipa: "/ˈmjuː.zɪ.kəl/",
    meaning: "Thuộc về âm nhạc; có năng khiếu âm nhạc",
    sentence: "She has a musical talent.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 63,
    word: "musician",
    type: "noun",
    ipa: "/mjuˈzɪʃ.ən/",
    meaning: "Nhạc sĩ; nhạc công",
    sentence: "He is a professional musician.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 64,
    word: "play",
    type: "verb",
    ipa: "/pleɪ/",
    meaning: "Chơi",
    sentence: "The children play football after school.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 65,
    word: "player",
    type: "noun",
    ipa: "/ˈpleɪ.ər/",
    meaning: "Người chơi; cầu thủ",
    sentence: "He is a talented player.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 66,
    word: "playful",
    type: "adjective",
    ipa: "/ˈpleɪ.fəl/",
    meaning: "Vui đùa; tinh nghịch",
    sentence: "The children have a playful attitude.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 67,
    word: "sailing",
    type: "noun/gerund",
    ipa: "/ˈseɪ.lɪŋ/",
    meaning: "Hoạt động chèo thuyền buồm",
    sentence: "We went sailing during our holiday.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 68,
    word: "sailor",
    type: "noun",
    ipa: "/ˈseɪ.lər/",
    meaning: "Thủy thủ",
    sentence: "The sailor worked on a large ship.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 69,
    word: "sing",
    type: "verb",
    ipa: "/sɪŋz/",
    meaning: "Hát",
    sentence: "She sings beautifully.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 70,
    word: "sang",
    type: "verb",
    ipa: "/sæŋ/",
    meaning: "Đã hát (quá khứ của sing)",
    sentence: "He sang at the school concert.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 71,
    word: "song",
    type: "noun",
    ipa: "/sɒŋ/",
    meaning: "Bài hát",
    sentence: "We heard a beautiful song.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 72,
    word: "singer",
    type: "noun",
    ipa: "/ˈsɪŋ.ər/",
    meaning: "Ca sĩ",
    sentence: "The singer performed on stage.",
    part: "b1",
    subCategory: "Word Formation"
  },
  {
    id: 73,
    word: "singing",
    type: "noun/gerund",
    ipa: "/ˈsɪŋ.ɪŋ/",
    meaning: "Việc ca hát",
    sentence: "Singing is one of her favourite hobbies.",
    part: "b1",
    subCategory: "Word Formation"
  },

  // 5. Word Patterns
  {
    id: 74,
    word: "bored with",
    type: "adjective + preposition",
    ipa: "/bɔːd wɪð/",
    meaning: "Chán với",
    sentence: "I am bored with watching the same programme.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 75,
    word: "crazy about",
    type: "adjective + preposition",
    ipa: "/ˈkreɪ.zi əˈbaʊt/",
    meaning: "Cực kỳ yêu thích; mê",
    sentence: "She is crazy about classical music.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 76,
    word: "good at",
    type: "adjective + preposition",
    ipa: "/ɡʊd æt/",
    meaning: "Giỏi về",
    sentence: "He is good at playing basketball.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 77,
    word: "interested in",
    type: "adjective + preposition",
    ipa: "/ˈɪn.trə.stɪd ɪn/",
    meaning: "Quan tâm đến; hứng thú với",
    sentence: "She is interested in psychology.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 78,
    word: "keen on",
    type: "adjective + preposition",
    ipa: "/kiːn ɒn/",
    meaning: "Say mê; yêu thích",
    sentence: "My brother is keen on video games.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 79,
    word: "popular with",
    type: "adjective + preposition",
    ipa: "/ˈpɒp.jə.lər wɪð/",
    meaning: "Được yêu thích bởi",
    sentence: "This singer is popular with young people.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 80,
    word: "feel like",
    type: "verb pattern",
    ipa: "/fiːl laɪk/",
    meaning: "Muốn; cảm thấy thích làm gì",
    sentence: "I feel like going out tonight.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 81,
    word: "listen to",
    type: "verb pattern",
    ipa: "/ˈlɪs.ən tuː/",
    meaning: "Nghe",
    sentence: "I often listen to classical music.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 82,
    word: "take part in",
    type: "verb pattern",
    ipa: "/teɪk pɑːt ɪn/",
    meaning: "Tham gia",
    sentence: "Everyone can take part in the competition.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 83,
    word: "book about",
    type: "noun pattern",
    ipa: "/bʊk əˈbaʊt/",
    meaning: "Cuốn sách về",
    sentence: "I am reading a book about child psychology.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 84,
    word: "fan of",
    type: "noun pattern",
    ipa: "/fæn əv/",
    meaning: "Người hâm mộ",
    sentence: "He is a fan of classical music.",
    part: "b1",
    subCategory: "Word Patterns"
  },
  {
    id: 85,
    word: "game against",
    type: "noun pattern",
    ipa: "/ɡeɪm əˈɡenst/",
    meaning: "Trận đấu với",
    sentence: "Our team won a game against the strongest opponent.",
    part: "b1",
    subCategory: "Word Patterns"
  },

  // ==========================================
  // PART 2: ACADEMIC VOCABULARY IN USE
  // Unit 1 - What is special about academic English?
  // ==========================================
  {
    id: 86,
    word: "discipline",
    type: "noun",
    ipa: "/ˈdɪs.ə.plɪn/",
    meaning: "Kỷ luật (Everyday nghĩa thông dụng)",
    sentence: "Standards of discipline in schools have declined.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },
  {
    id: 87,
    word: "discipline",
    type: "noun",
    ipa: "/ˈdɪs.ə.plɪn/",
    meaning: "Lĩnh vực / môn học (Academic)",
    sentence: "Nanotechnology is a relatively new discipline.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },
  {
    id: 88,
    word: "underline",
    type: "verb",
    ipa: "/ˌʌn.dəˈlaɪn/",
    meaning: "Gạch chân (Everyday)",
    sentence: "Underline your family name on the form.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },
  {
    id: 89,
    word: "underline",
    type: "verb",
    ipa: "/ˌʌn.dəˈlaɪn/",
    meaning: "Nhấn mạnh (Academic)",
    sentence: "The research underlines the importance of international trade agreements.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },
  {
    id: 90,
    word: "solid",
    type: "adjective",
    ipa: "/ˈsɒl.ɪd/",
    meaning: "Rắn; không ở dạng lỏng hoặc khí (Everyday)",
    sentence: "The lake was frozen solid.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },
  {
    id: 91,
    word: "solid",
    type: "adjective",
    ipa: "/ˈsɒl.ɪd/",
    meaning: "Vững chắc; đáng tin cậy (Academic)",
    sentence: "We have no solid evidence that radiation has caused the problem.",
    part: "academic",
    subCategory: "Everyday vs Academic"
  },

  // 2. Neutral vs. More Formal Vocabulary
  {
    id: 92,
    word: "In short",
    type: "discourse marker",
    ipa: "/ɪn ʃɔːt/",
    meaning: "Nói ngắn gọn; tóm lại (Neutral)",
    sentence: "In short, the results support the original hypothesis.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 93,
    word: "To sum up",
    type: "discourse marker",
    ipa: "/tə sʌm ʌp/",
    meaning: "Tóm lại (More formal)",
    sentence: "To sum up, the findings support the original hypothesis.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 94,
    word: "only",
    type: "adverb",
    ipa: "/ˈəʊn.li/",
    meaning: "Chỉ; duy nhất (Neutral)",
    sentence: "The researchers only examined three variables.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 95,
    word: "solely",
    type: "adverb",
    ipa: "/ˈsəʊl.li/",
    meaning: "Chỉ; duy nhất (More formal)",
    sentence: "The results were solely based on self-reported data.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 96,
    word: "almost",
    type: "adverb",
    ipa: "/ˈɔːl.məʊst/",
    meaning: "Gần như (Neutral)",
    sentence: "The two variables are almost identical.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 97,
    word: "virtually",
    type: "adverb",
    ipa: "/ˈvɜː.tʃu.ə.li/",
    meaning: "Hầu như; gần như (More formal)",
    sentence: "The two variables are virtually identical.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 98,
    word: "wrongly",
    type: "adverb",
    ipa: "/ˈrɒŋ.li/",
    meaning: "Một cách sai lầm (Neutral)",
    sentence: "The researchers wrongly interpreted the results.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 99,
    word: "incorrectly",
    type: "adverb",
    ipa: "/ˌɪn.kəˈrekt.li/",
    meaning: "Một cách không chính xác (More formal)",
    sentence: "The researchers incorrectly interpreted the results.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 100,
    word: "so",
    type: "conjunction",
    ipa: "/səʊ/",
    meaning: "Vì vậy (Neutral)",
    sentence: "The evidence was limited, so further research was needed.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 101,
    word: "therefore",
    type: "adverb",
    ipa: "/ˈðeə.fɔːr/",
    meaning: "Do đó; vì vậy (More formal)",
    sentence: "The evidence was limited; therefore, further research was needed.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 102,
    word: "big",
    type: "adjective",
    ipa: "/bɪɡ/",
    meaning: "Lớn (Neutral)",
    sentence: "The study revealed a big difference between the groups.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 103,
    word: "considerable",
    type: "adjective",
    ipa: "/kənˈsɪd.ər.ə.bəl/",
    meaning: "Đáng kể (More formal)",
    sentence: "The study revealed a considerable difference between the groups.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 104,
    word: "main",
    type: "adjective",
    ipa: "/meɪn/",
    meaning: "Chính; chủ yếu (Neutral)",
    sentence: "The main aim of this study is to examine academic performance.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 105,
    word: "primary",
    type: "adjective",
    ipa: "/ˈpraɪ.mər.i/",
    meaning: "Chính; chủ yếu (More formal)",
    sentence: "The primary aim of this study is to examine academic performance.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 106,
    word: "characteristic of",
    type: "adjective pattern",
    ipa: "/ˌkær.ək.təˈrɪs.tɪk əv/",
    meaning: "Đặc trưng cho (Neutral)",
    sentence: "This behaviour is characteristic of children at this age.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },
  {
    id: 107,
    word: "typical of",
    type: "adjective pattern",
    ipa: "/ˈtɪp.ɪ.kəl əv/",
    meaning: "Điển hình cho (More formal)",
    sentence: "This behaviour is typical of children at this age.",
    part: "academic",
    subCategory: "Neutral vs Formal"
  },

  // Additional Academic Vocabulary
  {
    id: 108,
    word: "primary concern",
    type: "adjective phrase",
    ipa: "/ˈpraɪ.mər.i/",
    meaning: "Mối quan tâm chính; quan trọng nhất",
    sentence: "The primary concern is to protect human rights.",
    part: "academic",
    subCategory: "Academic Vocabulary"
  },
  {
    id: 109,
    word: "factor",
    type: "noun",
    ipa: "/ˈfæk.tər/",
    meaning: "Yếu tố; nhân tố",
    sentence: "The researchers identified several important factors.",
    part: "academic",
    subCategory: "Academic Vocabulary"
  },
  {
    id: 110,
    word: "characteristic",
    type: "adjective",
    ipa: "/ˌkær.ək.təˈrɪs.tɪk/",
    meaning: "Có tính đặc trưng",
    sentence: "The findings provide a characteristic example of this phenomenon.",
    part: "academic",
    subCategory: "Academic Vocabulary"
  },

  // 3. Word Families (Academic)
  {
    id: 111,
    word: "action",
    type: "noun",
    ipa: "/ˈæk.ʃən/",
    meaning: "Hành động (Everyday & Academic)",
    sentence: "We need to take action to address this problem.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 112,
    word: "act",
    type: "verb",
    ipa: "/ækt/",
    meaning: "Hành động",
    sentence: "The government must act immediately.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 113,
    word: "active",
    type: "adjective",
    ipa: "/ˈæk.tɪv/",
    meaning: "Tích cực; chủ động",
    sentence: "She is an active participant in the research.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 114,
    word: "actively",
    type: "adverb",
    ipa: "/ˈæk.tɪv.li/",
    meaning: "Một cách tích cực; chủ động",
    sentence: "The researchers actively participated in the project.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 115,
    word: "quantity",
    type: "noun",
    ipa: "/ˈkwɒn.tə.ti/",
    meaning: "Số lượng",
    sentence: "The quantity of food was insufficient.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 116,
    word: "quantify",
    type: "verb",
    ipa: "/ˈkwɒn.tɪ.faɪ/",
    meaning: "Định lượng",
    sentence: "Researchers need to quantify the results.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 117,
    word: "quantitative",
    type: "adjective",
    ipa: "/ˈkwɒn.tɪ.tə.tɪv/",
    meaning: "Thuộc về định lượng",
    sentence: "The study uses quantitative research methods.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 118,
    word: "quantifiable",
    type: "adjective",
    ipa: "/ˈkwɒn.tɪ.faɪ.ə.bəl/",
    meaning: "Có thể định lượng / đo lường",
    sentence: "The data is quantifiable.",
    part: "academic",
    subCategory: "Word Families"
  },
  {
    id: 119,
    word: "quantitatively",
    type: "adverb",
    ipa: "/kwɒnˈtɪt.ə.tɪv.li/",
    meaning: "Theo phương pháp định lượng",
    sentence: "The results were analysed quantitatively.",
    part: "academic",
    subCategory: "Word Families"
  },

  // 4. Common Academic Expressions
  {
    id: 120,
    word: "In terms of",
    type: "prepositional phrase",
    ipa: "/ɪn tɜːmz əv/",
    meaning: "Xét về; về mặt",
    sentence: "In terms of academic performance, the results were satisfactory.",
    part: "academic",
    subCategory: "Expressions"
  },
  {
    id: 121,
    word: "In addition",
    type: "linking phrase",
    ipa: "/ɪn əˈdɪʃ.ən/",
    meaning: "Ngoài ra; thêm vào đó",
    sentence: "In addition, the researchers collected demographic information.",
    part: "academic",
    subCategory: "Expressions"
  },
  {
    id: 122,
    word: "For the most part",
    type: "adverbial phrase",
    ipa: "/fɔː ðə məʊst pɑːt/",
    meaning: "Phần lớn; nhìn chung",
    sentence: "For the most part, the participants agreed with the statement.",
    part: "academic",
    subCategory: "Expressions"
  },
  {
    id: 123,
    word: "In the case of",
    type: "prepositional phrase",
    ipa: "/ɪn ðə keɪs əv/",
    meaning: "Trong trường hợp của",
    sentence: "In the case of children, parental support is particularly important.",
    part: "academic",
    subCategory: "Expressions"
  }
];

