const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  answers.forEach(answer =>{
    if (answer === 'E') {
      score += 25;
    }
  });

  result.classList.remove('d-none');

  let point=0;

  const print = setInterval(() => {
    result.querySelector('span').textContent = `${point}%`;
    if(point == score)
    {
      clearInterval(print);
    }
    else
    {
      point ++;
    }
  }, 10)
});