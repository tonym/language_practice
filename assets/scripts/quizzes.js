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

let quizSelector = document.querySelector('#quizzes');
quizzes.forEach((quiz, index) => {
  quizSelector.options[index + 1] = new Option(quiz.name, index);
})
