const quizzes = [
  {
    name: 'Čislo',
    terms: generateNumberQuiz()
  }
];

function generateNumberQuiz() {
  const ret = [];
  let n = 0;
  while (n < 1001) {
    ret.push({
      answer: n.toString(),
      question: n.toString()
    });
    n++;
  }
  return ret;
}

let question;
let quiz;

const checkButton = document.querySelector('#check');
const listenButton = document.querySelector('#listen');
const nextButton = document.querySelector('#next');
const quizSelector = document.querySelector('#quizzes');

quizzes.forEach((quiz, index) => {
  quizSelector.options[index + 1] = new Option(quiz.name, index);
});

quizSelector.addEventListener('change', () => {
  quiz = quizSelector.value ? quizzes[quizSelector.value] : undefined;
  configureControls();
});

function configureControls() {
  listenButton.disabled = quiz === undefined;
}
