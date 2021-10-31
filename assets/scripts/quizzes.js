const quizzes = [
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo',
    questions: generateNumberQuiz(0, 10000)
  },
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo 0 - 100',
    questions: generateNumberQuiz(0, 100)
  },
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo 100 - 1000',
    questions: generateNumberQuiz(100, 1000)
  },
  {
    description: 'Opakujte v angličtině',
    name: 'Měsíců v roce',
    questions: [
      {
        answer: ['january'],
        question: 'leden'
      },
      {
        answer: ['february'],
        question: 'únor'
      },
      {
        answer: ['march'],
        question: 'březen'
      },
      {
        answer: ['april'],
        question: 'duben'
      },
      {
        answer: ['may'],
        question: 'květen'
      },
      {
        answer: ['june'],
        question: 'červen'
      },
      {
        answer: ['july'],
        question: 'červenec'
      },
      {
        answer: ['august'],
        question: 'srpen'
      },
      {
        answer: ['september'],
        question: 'září'
      },
      {
        answer: ['october'],
        question: 'říjen'
      },
      {
        answer: ['november'],
        question: 'listopad'
      },
      {
        answer: ['december'],
        question: 'prosinec'
      }
    ]
  },
  {
    description: 'Odpovězte česky',
    name: 'Měsíční otázky',
    questions: [
      {
        answer: ['leden'],
        question: 'Jaký je první měsíc v roce?'
      },
      {
        answer: ['únor', 'unor'],
        question: 'Jaký je druhý měsíc v roce?'
      },
      {
        answer: ['březen', 'brezen'],
        question: 'Jaký je třetí měsíc v roce?'
      },
      {
        answer: ['duben'],
        question: 'Jaký je čtvrtý měsíc v roce?'
      },
      {
        answer: ['květen', 'kveten'],
        question: 'Jaký je pátý měsíc v roce?'
      },
      {
        answer: ['červen', 'cerven'],
        question: 'Jaký je šestý měsíc v roce?'
      },
      {
        answer: ['červenec', 'cervenec'],
        question: 'Jaký je sedmý měsíc v roce?'
      },
      {
        answer: ['srpen'],
        question: 'Jaký je osmý měsíc v roce?'
      },
      {
        answer: ['září', 'zari'],
        question: 'Jaký je devátý měsíc v roce?'
      },
      {
        answer: ['říjen', 'rijen'],
        question: 'Jaký je desátý měsíc v roce?'
      },
      {
        answer: ['listopad'],
        question: 'Jaký je jedenáctý měsíc v roce?'
      },
      {
        answer: ['prosinec'],
        question: 'Jaký je dvanáctý měsíc v roce?'
      }
    ]
  }
];

function generateNumberQuiz(start = 0, end = 1001) {
  const ret = [];
  let n = start;
  while (n < end) {
    ret.push({
      answer: [n.toString()],
      question: n.toString()
    });
    n++;
  }
  return ret;
}
