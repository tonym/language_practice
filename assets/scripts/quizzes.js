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
  },
  {
    description: 'Opakujte v angličtině',
    name: 'Počasí',
    questions: [
      {
        answer: 'oblačno',
        question: 'cloudy'
      },
      {
        answer: 'je slunečno',
        question: 'it is sunny'
      },
      {
        answer: 'je plískanice',
        question: 'it is sleeting sleet'
      },
      {
        answer: 'padá sníh',
        question: 'it is snowing snow is falling'
      },
      {
        answer: 'hrom',
        question: 'thunder'
      },
      {
        answer: 'padají kroupy',
        question: 'it is hailing hail'
      },
      {
        answer: 'je led',
        question: 'it is icy ice'
      },
      {
        answer: 'tornádo',
        question: 'tornado'
      },
      {
        answer: 'je horko',
        question: 'it is hot'
      },
      {
        answer: 'je teplo',
        question: 'it is warm'
      },
      {
        answer: 'je chladno',
        question: 'it is cold'
      },
      {
        answer: 'je zima',
        question: 'it is very cold'
      },
      {
        answer: 'mráz',
        question: 'frost'
      },
      {
        answer: 'je mrzne',
        question: 'it is freezing'
      },
      {
        answer: 'duha',
        question: 'rainbow'
      },
      {
        answer: 'je jasno',
        question: 'it is clear sky'
      },
      {
        answer: 'je fouká',
        question: 'it is windy'
      },
      {
        answer: 'je mlha',
        question: 'it is foggy fog it is fog'
      },
      {
        answer: 'je bouře',
        question: 'it is stormy storm storming it is storming'
      },
      {
        answer: 'bouřka',
        question: 'thunderstorm'
      },
      {
        answer: 'blesk',
        question: 'lightning'
      },
      {
        answer: 'je prší',
        question: 'it is raining rain it rains'
      },
      {
        answer: 'padá déšť',
        question: 'it is raining rain it rains'
      },
      {
        answer: 'je deštivo',
        question: 'it is rainy it is raining rain it rains'
      },
      {
        answer: 'je polojasno',
        question: 'it is partly sunny it is partly cloudy'
      },
      {
        answer: 'předpověď počasí',
        question: 'weather forecast'
      },
      {
        answer: 'západ slunce',
        question: 'sunset'
      },
      {
        answer: 'východ slunce',
        question: 'sunrise'
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
