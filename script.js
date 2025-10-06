const quizData = [
  {
    question: "You receive an email from 'paypa1.com' asking for your password. What should you do?",
    options: ["Enter password immediately", "Ignore & report as phishing", "Click link to verify", "Forward to friends"],
    correct: 1
  },
  {
    question: "Which password is strongest?",
    options: ["password123", "P@ssw0rd", "ilovecats", "7f$Kp!9x@R"],
    correct: 3
  },
  {
    question: "A friend sends you a USB found in parking lot. What do you do?",
    options: ["Plug it in", "Ignore it", "Give to IT/security team", "Use antivirus first then plug"],
    correct: 2
  },
  {
    question: "Public Wi-Fi is safe for banking if:",
    options: ["It needs no password", "You use VPN", "You trust the café", "It’s free"],
    correct: 1
  }
];
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });
}
function selectAnswer(selected) {
  const correct = quizData[currentQuestion].correct;
  const allButtons = document.querySelectorAll(".option");
  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.style.background = "#33cc33";
    else if (i === selected && i !== correct) btn.style.background = "#ff3333";
  });
  if (selected === correct) score++;
}
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `You scored ${score}/${quizData.length}! 
  ${score === quizData.length ? "🎉 Perfect!" : "Keep learning about cyber safety 🔐"}`;
}
loadQuestion();
