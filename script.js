let questions = [];
let current = 0, correct = 0, wrong = 0;
let selected = null, timer, timeLeft = 15;

// 🕒 total quiz time
let quizStartTime = 0;
let quizEndTime = 0;

function startQuiz(){
  questions = questionsDB[category.value][difficulty.value];

  quizStartTime = Date.now(); // start total timer

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion(){
  clearInterval(timer);
  selected = null;
  timeLeft = 15;
  time.innerText = timeLeft;

  question.innerText = questions[current].q;
  options.innerHTML = "";

  questions[current].options.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.innerText = o;

    btn.onclick = () => {
      selected = i;
      document.querySelectorAll("#options button")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    options.appendChild(btn);
  });

  scoreboard.innerHTML =
    `Q ${current+1}/${questions.length} | ✔ ${correct} ✖ ${wrong}`;

  startTimer();
}

function startTimer(){
  timer = setInterval(() => {
    timeLeft--;
    time.innerText = timeLeft;
    if (timeLeft === 0) next();
  }, 1000);
}

function next(){
  clearInterval(timer);

  const btns = document.querySelectorAll("#options button");
  btns.forEach((b, i) => {
    if (i === questions[current].answer) b.classList.add("correct");
    if (i === selected && selected !== questions[current].answer)
      b.classList.add("wrong");
    b.disabled = true;
  });

  setTimeout(() => {
    selected === questions[current].answer ? correct++ : wrong++;
    current++;

    current < questions.length ? loadQuestion() : submitQuiz();
  }, 800);
}

function submitQuiz(){
  quizEndTime = Date.now(); // end total timer

  const totalSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  score.innerHTML = `
    ✔ Correct: ${correct} <br>
    ✖ Wrong: ${wrong} <br>
    📊 Total Questions: ${questions.length} <br>
    ⏱ Total Time: ${minutes}m ${seconds}s
  `;
}
