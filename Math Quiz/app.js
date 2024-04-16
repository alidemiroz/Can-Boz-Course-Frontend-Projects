const form = document.querySelector(".question-form");
const congrulations = document.querySelector("#congrulations");
const result = document.querySelector(".result");
const trueAnswers = [8, 10, 3, 25];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  answers.forEach((answer, index) => {
    if (answer == trueAnswers[index]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");

  let point = 0;

  const print = setInterval(() => {
    result.querySelector("span").textContent = `${point}%`;
    if (point == score) {
      clearInterval(print);
    } else {
      point++;
    }
  }, 10);

  if(score === 100)
  {
    congrulations.classList.remove("d-none");
  }
});
