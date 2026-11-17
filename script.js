/* ==========================================================================
   LEXIVIBE — Brutalist English Lab Interactive Engine
   ========================================================================== */

// 1. Vocabulary Dataset (10 Rare & Expressive Words)
const VOCAB_DATA = [
  {
    id: "petrichor",
    word: "Petrichor",
    ipa: "/ˈpet.rɪ.kɔːr/",
    pos: "NOUN",
    category: "Nature & Atmosphere",
    definition: "The pleasant, earthy smell that accompanies the first rain after a long period of warm, dry weather.",
    basicAlt: "The nice smell when it rains",
    example: "After weeks of summer heat, the sudden evening drizzle released a wave of fresh petrichor."
  },
  {
    id: "sonder",
    word: "Sonder",
    ipa: "/ˈsɒn.dər/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "The sudden realization that each random passerby is living a life as vivid and complex as your own.",
    basicAlt: "Realizing strangers also have deep lives",
    example: "Watching commuters rush across the station gave Maya a quiet moment of sonder."
  },
  {
    id: "ineffable",
    word: "Ineffable",
    ipa: "/ɪnˈef.ə.bəl/",
    pos: "ADJECTIVE",
    category: "Emotion & Mind",
    definition: "Too great, extreme, or beautiful to be expressed or described adequately in words.",
    basicAlt: "Impossible to put into words",
    example: "Standing above the clouds at sunrise filled the hikers with an ineffable sense of awe."
  },
  {
    id: "mellifluous",
    word: "Mellifluous",
    ipa: "/məˈlɪf.lu.əs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "A voice or musical sound that is sweet, smooth, and deeply pleasant to hear.",
    basicAlt: "Very smooth and pleasant sounding",
    example: "The narrator's mellifluous voice kept the entire auditorium captivated until the final line."
  },
  {
    id: "luminous",
    word: "Luminous",
    ipa: "/ˈluː.mɪ.nəs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "Full of or shedding light; bright, glowing, or radiant, especially in the dark.",
    basicAlt: "Very bright and glowing",
    example: "The jellyfish drifted like luminous lanterns beneath the midnight waves."
  },
  {
    id: "wanderlust",
    word: "Wanderlust",
    ipa: "/ˈwɒn.də.lʌst/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "A strong, irresistible desire to travel and explore unfamiliar places around the world.",
    basicAlt: "A strong urge to travel everywhere",
    example: "Looking at old railway maps always awakens her wanderlust."
  },
  {
    id: "euphoria",
    word: "Euphoria",
    ipa: "/juːˈfɔː.ri.ə/",
    pos: "NOUN",
    category: "Emotion & Mind",
    definition: "A feeling or state of intense excitement, joy, and overwhelming happiness.",
    basicAlt: "Feeling extremely happy and excited",
    example: "A surge of pure euphoria swept through the team when the final whistle blew."
  },
  {
    id: "enigmatic",
    word: "Enigmatic",
    ipa: "/ˌen.ɪɡˈmæt.ɪk/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Difficult to interpret or understand; mysterious and intriguing.",
    basicAlt: "Mysterious and hard to read",
    example: "She offered an enigmatic smile before handing over the sealed envelope."
  },
  {
    id: "serene",
    word: "Serene",
    ipa: "/səˈriːn/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    definition: "Calm, peaceful, and untroubled; completely tranquil.",
    basicAlt: "Very calm and peaceful",
    example: "Early in the morning, the mountain lake looked as serene as a mirror."
  },
  {
    id: "audacious",
    word: "Audacious",
    ipa: "/ɔːˈdeɪ.ʃəs/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    definition: "Showing a willingness to take surprisingly bold risks; fearless and daring.",
    basicAlt: "Very bold and fearless",
    example: "Launching a student-run design studio in their first semester was an audacious move."
  }
];

// 2. Personal Experience Stories Dataset
const STORIES_DATA = [
  {
    id: "story-1",
    fileName: "STORY_01.TXT",
    tabTitle: "01. MIDNIGHT TRAIN",
    title: "Midnight Train Through the Highlands",
    author: "SHARED BY NADIA // TRAVEL JOURNAL",
    tag: "TRAVEL & ATMOSPHERE",
    readTime: "2 MIN READ",
    prompt: "Have you ever experienced wanderlust or felt a serene moment while traveling? Describe it in 1–2 sentences.",
    paragraphs: [
      "For months, an unstoppable wave of {wanderlust} had been building inside me while I stared at lecture notes from my desk. On Friday night, I finally booked a last-minute sleeper train heading north toward the misty highlands.",
      "When the train paused at a quiet rural station around midnight, the landscape outside felt remarkably {serene}. Not a single car passed by, and a {luminous} full moon silvered the rooftops of the sleeping village.",
      "Moments later, cool raindrops tapped against the windowpane, carrying the unmistakable scent of {petrichor} into the carriage. In that single breath, city stress vanished completely."
    ]
  },
  {
    id: "story-2",
    fileName: "STORY_02.TXT",
    tabTitle: "02. STREET VIOLINIST",
    title: "The Street Violinist at Dusk",
    author: "SHARED BY RAFI // CAMPUS CHRONICLES",
    tag: "CITY LIFE & REFLECTION",
    readTime: "2 MIN READ",
    prompt: "When was the last time you felt 'sonder' in a crowded place? Try using 'sonder' or 'mellifluous' in a sentence.",
    paragraphs: [
      "Walking home after an exhausting afternoon seminar, I nearly hurried past the old stone plaza until a {mellifluous} violin melody stopped me in my tracks. Every note floated effortlessly over the evening chatter.",
      "Around the musician stood dozens of strangers—students, shopkeepers, and grandparents—each lost in thought. Watching their faces sparked a sudden wave of {sonder}, reminding me that every person beside me carried an entire universe of hopes and memories.",
      "The music ended on a soft harmonic chord, leaving behind an {ineffable} warmth that no textbook could ever capture."
    ]
  },
  {
    id: "story-3",
    fileName: "STORY_03.TXT",
    tabTitle: "03. OPEN MIC NIGHT",
    title: "Leaping Onto the Open-Mic Stage",
    author: "SHARED BY TARI // CREATIVE CLUB",
    tag: "COURAGE & GROWTH",
    readTime: "2 MIN READ",
    prompt: "Describe an audacious decision you made recently and how it felt afterward.",
    paragraphs: [
      "Signing up to perform my original spoken-word poem in front of two hundred people felt like the most {audacious} decision of my university life. My hands trembled as I waited beside the curtain.",
      "Before stepping into the spotlight, the host gave me an {enigmatic} nod—half challenge, half encouragement—and whispered, 'Make them listen.'",
      "Once I spoke the final stanza and heard the room erupt into applause, a rush of pure {euphoria} washed over me. Fear had turned into my favorite memory of the year."
    ]
  }
];

// 3. Definition Matching Quiz Dataset (10 Questions, A–E)
const QUIZ_DATA = [
  {
    wordId: "petrichor",
    definition: "The pleasant, earthy smell that accompanies the first rain after a long period of warm, dry weather.",
    options: ["luminous", "petrichor", "serene", "euphoria", "sonder"],
    answer: "petrichor"
  },
  {
    wordId: "sonder",
    definition: "The sudden realization that each random passerby is living a life as vivid and complex as your own.",
    options: ["sonder", "wanderlust", "audacious", "enigmatic", "mellifluous"],
    answer: "sonder"
  },
  {
    wordId: "ineffable",
    definition: "Too great, extreme, or beautiful to be expressed or described adequately in words.",
    options: ["serene", "luminous", "ineffable", "petrichor", "audacious"],
    answer: "ineffable"
  },
  {
    wordId: "mellifluous",
    definition: "A voice or musical sound that is sweet, smooth, and deeply pleasant to hear.",
    options: ["enigmatic", "euphoria", "wanderlust", "mellifluous", "sonder"],
    answer: "mellifluous"
  },
  {
    wordId: "luminous",
    definition: "Full of or shedding light; bright, glowing, or radiant, especially in the dark.",
    options: ["petrichor", "ineffable", "audacious", "serene", "luminous"],
    answer: "luminous"
  },
  {
    wordId: "wanderlust",
    definition: "A strong, irresistible desire to travel and explore unfamiliar places around the world.",
    options: ["wanderlust", "mellifluous", "euphoria", "enigmatic", "luminous"],
    answer: "wanderlust"
  },
  {
    wordId: "euphoria",
    definition: "A feeling or state of intense excitement, joy, and overwhelming happiness.",
    options: ["serene", "sonder", "euphoria", "petrichor", "ineffable"],
    answer: "euphoria"
  },
  {
    wordId: "enigmatic",
    definition: "Difficult to interpret or understand; mysterious and intriguing.",
    options: ["luminous", "audacious", "wanderlust", "enigmatic", "mellifluous"],
    answer: "enigmatic"
  },
  {
    wordId: "serene",
    definition: "Calm, peaceful, and untroubled; completely tranquil.",
    options: ["serene", "euphoria", "sonder", "audacious", "ineffable"],
    answer: "serene"
  },
  {
    wordId: "audacious",
    definition: "Showing a willingness to take surprisingly bold risks; fearless and daring.",
    options: ["petrichor", "mellifluous", "luminous", "serene", "audacious"],
    answer: "audacious"
  }
];

// ==========================================================================
// Application State
// ==========================================================================
const state = {
  activePage: "home",
  theme: localStorage.getItem("lexivibe_brutal_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  accent: "en-US",
  rate: 1,
  searchQuery: "",
  selectedCategory: "All",
  masteredIds: JSON.parse(localStorage.getItem("lexivibe_brutal_mastered") || "[]"),
  bestQuizScore: localStorage.getItem("lexivibe_brutal_best_quiz") || null,
  activeStoryIndex: 0,
  storyFontSize: 1.06,
  isReadingStory: false,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizHistory: [],
  modalWordId: null
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  setupNavigation();
  setupThemeToggle();
  setupSpeechControls();
  renderVocabGrid();
  setupVocabFilters();
  renderStories();
  setupStoryControls();
  renderQuizQuestion();
  setupQuizControls();
  setupModalControls();
  updateProgressStats();
});

// ==========================================================================
// Theme Switcher (Light / Dark)
// ==========================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("lexivibe_brutal_theme", theme);
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = theme === "dark" ? "LIGHT" : "DARK";
}

function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
    showToast(state.theme === "dark" ? "DARK MODE ACTIVATED" : "LIGHT MODE ACTIVATED");
  });
}

// ==========================================================================
// Navigation
// ==========================================================================
function navigateTo(pageId) {
  state.activePage = pageId;
  stopSpeech();

  document.querySelectorAll(".page").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageId}`);
  });

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    if (btn.classList.contains("nav-tab") || btn.classList.contains("dock-btn")) {
      btn.classList.toggle("active", btn.dataset.nav === pageId);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });
}

// ==========================================================================
// Web Speech API Pronunciation Engine
// ==========================================================================
function speakText(text, onEndCallback = null) {
  if (!("speechSynthesis" in window)) {
    showToast("AUDIO NOT SUPPORTED IN THIS BROWSER");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.accent;
  utterance.rate = state.rate;

  const voices = window.speechSynthesis.getVoices();
  const matched = voices.find((v) => v.lang.startsWith(state.accent));
  if (matched) utterance.voice = matched;

  utterance.onend = () => { if (onEndCallback) onEndCallback(); };
  utterance.onerror = () => { if (onEndCallback) onEndCallback(); };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  state.isReadingStory = false;
  const readBtn = document.getElementById("readStoryAloudBtn");
  if (readBtn) readBtn.textContent = "🔊 READ ALOUD";
}

function setupSpeechControls() {
  document.querySelectorAll("[data-speak]").forEach((btn) => {
    btn.addEventListener("click", () => speakText(btn.dataset.speak));
  });

  document.querySelectorAll("[data-accent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.accent = btn.dataset.accent;
      document.querySelectorAll("[data-accent]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`ACCENT: ${state.accent === "en-US" ? "US ENGLISH" : "UK ENGLISH"}`);
    });
  });

  document.querySelectorAll("[data-rate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.rate = parseFloat(btn.dataset.rate);
      document.querySelectorAll("[data-rate]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`SPEED: ${state.rate}X`);
    });
  });
}

// ==========================================================================
// Page 01: Rare Vocabulary Renderer
// ==========================================================================
function renderVocabGrid() {
  const grid = document.getElementById("vocabGrid");
  const filtered = VOCAB_DATA.filter((item) => {
    const matchesCat = state.selectedCategory === "All" || item.category === state.selectedCategory;
    const q = state.searchQuery.toLowerCase();
    const matchesSearch =
      item.word.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.basicAlt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 20px;"><strong>NO MATCHING WORDS FOUND.</strong></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item, index) => {
      const isMastered = state.masteredIds.includes(item.id);
      const num = String(index + 1).padStart(2, "0");
      return `
        <article class="vocab-card ${isMastered ? "is-mastered" : ""}">
          <div class="vocab-card-head">
            <span>[${num}] ${item.category.toUpperCase()}</span>
            <span>${item.pos}</span>
          </div>
          <div class="vocab-card-body">
            <div class="vocab-title-row">
              <div>
                <h2 class="vocab-word">${item.word.toUpperCase()}</h2>
                <p class="vocab-ipa">${item.ipa}</p>
              </div>
              <button class="brutal-btn-sm btn-amber" onclick="speakText('${item.word}')">
                🔊 WORD
              </button>
            </div>
            <p class="vocab-def">${item.definition}</p>
            <div class="vocab-alt-box">
              <strong>UPGRADE FROM:</strong> "${item.basicAlt}"
            </div>
            <p class="vocab-example">"${item.example}"</p>
            <div class="vocab-footer">
              <button class="brutal-btn-sm" onclick="speakText(\`${item.example.replace(/'/g, "'")}\`)">
                🔈 SENTENCE
              </button>
              <button class="brutal-btn-sm master-btn ${isMastered ? "active" : ""}" onclick="toggleMastered('${item.id}')">
                ${isMastered ? "✓ MASTERED" : "+ MASTERED"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupVocabFilters() {
  document.getElementById("wordSearchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderVocabGrid();
  });

  document.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedCategory = pill.dataset.cat;
      document.querySelectorAll(".cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderVocabGrid();
    });
  });
}

function toggleMastered(wordId) {
  const idx = state.masteredIds.indexOf(wordId);
  if (idx > -1) {
    state.masteredIds.splice(idx, 1);
    showToast("REMOVED FROM MASTERED");
  } else {
    state.masteredIds.push(wordId);
    showToast("WORD MASTERED!");
  }
  localStorage.setItem("lexivibe_brutal_mastered", JSON.stringify(state.masteredIds));
  renderVocabGrid();
  updateProgressStats();
}

function updateProgressStats() {
  document.getElementById("navMasteryCount").textContent = `${state.masteredIds.length}/${VOCAB_DATA.length}`;
  document.getElementById("homeMasteredStat").textContent = `${state.masteredIds.length} / ${VOCAB_DATA.length} WORDS`;
  document.getElementById("homeBestQuizStat").textContent = state.bestQuizScore ? `${state.bestQuizScore} / 10` : "NOT YET";
}

// ==========================================================================
// Page 02: Personal Stories Renderer
// ==========================================================================
function renderStories() {
  const tabsContainer = document.getElementById("storyTabs");
  tabsContainer.innerHTML = STORIES_DATA.map(
    (s, idx) => `
      <button class="story-tab ${idx === state.activeStoryIndex ? "active" : ""}" onclick="selectStory(${idx})">
        ${s.tabTitle}
      </button>
    `
  ).join("");

  const story = STORIES_DATA[state.activeStoryIndex];
  document.getElementById("storyWindowFile").textContent = story.fileName;
  document.getElementById("storyReadTime").textContent = story.readTime;
  document.getElementById("storyTag").textContent = story.tag;
  document.getElementById("storyTitle").textContent = story.title;
  document.getElementById("storyAuthor").textContent = story.author;
  document.getElementById("storyPrompt").textContent = story.prompt;

  const bodyEl = document.getElementById("storyBody");
  bodyEl.style.fontSize = `${state.storyFontSize}rem`;
  bodyEl.innerHTML = story.paragraphs
    .map((p) => {
      const parsed = p.replace(/\{(\w+)\}/g, (_, wordId) => {
        const entry = VOCAB_DATA.find((v) => v.id === wordId);
        const label = entry ? entry.word.toLowerCase() : wordId;
        return `<button type="button" class="story-word-chip" onclick="openWordModal('${wordId}')">${label}</button>`;
      });
      return `<p>${parsed}</p>`;
    })
    .join("");

  const savedNote = localStorage.getItem(`lexivibe_brutal_note_${story.id}`) || "";
  document.getElementById("reflectionInput").value = savedNote;
  document.getElementById("reflectionSavedMsg").textContent = "";
}

function selectStory(index) {
  stopSpeech();
  state.activeStoryIndex = index;
  renderStories();
}

function setupStoryControls() {
  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.min(1.36, +(state.storyFontSize + 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.max(0.92, +(state.storyFontSize - 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("readStoryAloudBtn").addEventListener("click", () => {
    const btn = document.getElementById("readStoryAloudBtn");
    if (state.isReadingStory) {
      stopSpeech();
      return;
    }
    const story = STORIES_DATA[state.activeStoryIndex];
    const cleanText = story.paragraphs.join(" ").replace(/\{|\}/g, "");
    state.isReadingStory = true;
    btn.textContent = "⏹ STOP AUDIO";
    speakText(cleanText, () => {
      state.isReadingStory = false;
      btn.textContent = "🔊 READ ALOUD";
    });
  });

  document.getElementById("saveReflectionBtn").addEventListener("click", () => {
    const story = STORIES_DATA[state.activeStoryIndex];
    const text = document.getElementById("reflectionInput").value.trim();
    localStorage.setItem(`lexivibe_brutal_note_${story.id}`, text);
    document.getElementById("reflectionSavedMsg").textContent = "✓ SAVED LOCALLY";
  });
}

// ==========================================================================
// Word Inspector Modal
// ==========================================================================
function openWordModal(wordId) {
  const entry = VOCAB_DATA.find((v) => v.id === wordId);
  if (!entry) return;
  state.modalWordId = wordId;

  document.getElementById("modalWordCat").textContent = `${entry.category.toUpperCase()} // ${entry.pos}`;
  document.getElementById("modalWordTitle").textContent = entry.word.toUpperCase();
  document.getElementById("modalWordIpa").textContent = entry.ipa;
  document.getElementById("modalWordDef").textContent = entry.definition;
  document.getElementById("modalWordEx").textContent = `"${entry.example}"`;

  updateModalMasterBtn();
  document.getElementById("wordModalBackdrop").classList.remove("hidden");
  speakText(entry.word);
}

function updateModalMasterBtn() {
  const isMastered = state.masteredIds.includes(state.modalWordId);
  const btn = document.getElementById("modalMasterBtn");
  btn.textContent = isMastered ? "✓ MASTERED" : "+ MASTERED";
  btn.classList.toggle("btn-amber", isMastered);
}

function setupModalControls() {
  const backdrop = document.getElementById("wordModalBackdrop");
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    backdrop.classList.add("hidden");
  });
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) backdrop.classList.add("hidden");
  });
  document.getElementById("modalSpeakBtn").addEventListener("click", () => {
    const entry = VOCAB_DATA.find((v) => v.id === state.modalWordId);
    if (entry) speakText(entry.word);
  });
  document.getElementById("modalMasterBtn").addEventListener("click", () => {
    if (state.modalWordId) {
      toggleMastered(state.modalWordId);
      updateModalMasterBtn();
    }
  });
}

// ==========================================================================
// Page 03: Definition Matching Quiz (A–E)
// ==========================================================================
function renderQuizQuestion() {
  const q = QUIZ_DATA[state.quizIndex];
  state.quizAnswered = false;

  document.getElementById("quizQuestionArea").classList.remove("hidden");
  document.getElementById("quizResultArea").classList.add("hidden");

  const qNum = String(state.quizIndex + 1).padStart(2, "0");
  document.getElementById("quizCounter").textContent = `QUESTION ${qNum} / ${QUIZ_DATA.length}`;
  document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
  document.getElementById("quizProgressBar").style.width = `${((state.quizIndex + 1) / QUIZ_DATA.length) * 100}%`;
  document.getElementById("quizDefinition").textContent = `"${q.definition}"`;

  const letters = ["A", "B", "C", "D", "E"];
  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options
    .map(
      (opt, idx) => `
        <button class="quiz-opt-btn" data-choice="${opt}" onclick="handleQuizAnswer('${opt}', this)">
          <span class="opt-key">${letters[idx]}</span>
          <span>${opt.toUpperCase()}</span>
        </button>
      `
    )
    .join("");

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = "feedback-box hidden";
  document.getElementById("nextQuestionBtn").classList.add("hidden");
}

function handleQuizAnswer(choice, btnEl) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = QUIZ_DATA[state.quizIndex];
  const isCorrect = choice === q.answer;
  const wordEntry = VOCAB_DATA.find((v) => v.id === q.answer);

  document.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.choice === q.answer) {
      btn.classList.add("correct");
    } else if (btn === btnEl && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore++;
    document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
    speakText(wordEntry.word);
  }

  state.quizHistory.push({
    word: wordEntry.word.toUpperCase(),
    isCorrect,
    chosen: choice.toUpperCase()
  });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
  feedbackEl.innerHTML = isCorrect
    ? `<strong>CORRECT!</strong> ${wordEntry.word.toUpperCase()} (${wordEntry.ipa}) — <em>"${wordEntry.example}"</em>`
    : `<strong>INCORRECT.</strong> THE MATCHING WORD IS <strong>${wordEntry.word.toUpperCase()}</strong> (${wordEntry.ipa}).`;

  const nextBtn = document.getElementById("nextQuestionBtn");
  nextBtn.textContent = state.quizIndex === QUIZ_DATA.length - 1 ? "VIEW FINAL SCORE →" : "NEXT QUESTION →";
  nextBtn.classList.remove("hidden");
}

function setupQuizControls() {
  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    if (state.quizIndex < QUIZ_DATA.length - 1) {
      state.quizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  document.getElementById("retakeQuizBtn").addEventListener("click", () => {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizHistory = [];
    renderQuizQuestion();
  });
}

function showQuizResults() {
  document.getElementById("quizQuestionArea").classList.add("hidden");
  document.getElementById("quizResultArea").classList.remove("hidden");

  if (!state.bestQuizScore || state.quizScore > parseInt(state.bestQuizScore, 10)) {
    state.bestQuizScore = state.quizScore;
    localStorage.setItem("lexivibe_brutal_best_quiz", state.bestQuizScore);
    updateProgressStats();
  }

  const pct = Math.round((state.quizScore / QUIZ_DATA.length) * 100);
  document.getElementById("resultBadge").textContent = `${state.quizScore}/${QUIZ_DATA.length}`;
  document.getElementById("resultHeading").textContent = `FINAL SCORE: ${pct}%`;
  document.getElementById("resultSummary").textContent =
    pct >= 80
      ? "EXCELLENT COMMAND OF RARE & EXPRESSIVE ENGLISH VOCABULARY."
      : "SOLID RUN. REVIEW ANY MISSED DEFINITIONS BELOW AND RETAKE THE DRILL.";

  document.getElementById("resultReviewList").innerHTML = state.quizHistory
    .map(
      (item, idx) => `
        <div class="review-row">
          <span>${String(idx + 1).padStart(2, "0")}. ${item.word}</span>
          <span>${item.isCorrect ? "✓ CORRECT" : `✕ CHOSE ${item.chosen}`}</span>
        </div>
      `
    )
    .join("");
}

// ==========================================================================
// Toast Helper
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}
