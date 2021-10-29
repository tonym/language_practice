const quizzes = [
  {
    name: 'Čislo',
    questions: generateNumberQuiz()
  },
  {
    name: 'Čislo 0 - 100',
    questions: generateNumberQuiz(0, 100)
  },
  {
    name: 'Měsíce',
    questions: [
      {
        answer: 'january',
        question: 'leden'
      },
      {
        answer: 'february',
        question: 'únor'
      },
      {
        answer: 'march',
        question: 'březen'
      },
      {
        answer: 'april',
        question: 'duben'
      },
      {
        answer: 'may',
        question: 'květen'
      },
      {
        answer: 'june',
        question: 'červen'
      },
      {
        answer: 'july',
        question: 'červenec'
      },
      {
        answer: 'august',
        question: 'srpen'
      },
      {
        answer: 'september',
        question: 'září'
      },
      {
        answer: 'october',
        question: 'říjen'
      },
      {
        answer: 'november',
        question: 'listopad'
      },
      {
        answer: 'december',
        question: 'prosinec'
      }
    ]
  }
];

function generateNumberQuiz(start = 0, end = 1001) {
  const ret = [];
  let n = start;
  while (n < end) {
    ret.push({
      answer: n.toString(),
      question: n.toString()
    });
    n++;
  }
  return ret;
}
