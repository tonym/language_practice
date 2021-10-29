let question;
let quiz;

const errorClass = 'og-typography-color-error';
const errorMessage = 'Almost! the correct answer is ';
const successClass = 'og-typography-color-success';
const successMessage = 'Correct';

const answerInput = document.querySelector('#answer');
const checkButton = document.querySelector('#check');
const listenButton = document.querySelector('#listen');
const nextButton = document.querySelector('#next');
const quizForm = document.querySelector('#quiz-form');
const quizSelector = document.querySelector('#quizzes');
const resultMessage = document.querySelector('#result');

quizzes.forEach((quiz, index) => {
  quizSelector.options[index + 1] = new Option(quiz.name, index);
});

quizSelector.addEventListener('change', () => {
  quiz = quizSelector.value ? quizzes[quizSelector.value] : undefined;
  configureControls();
});

listenButton.addEventListener('click', () => {
  if (quiz) {
    if (!question) {
      question = quiz.questions[Math.floor(Math.random() * quiz.questions.length)];
    }
    answerInput.value = '';
    clearMessages();
    speech.text = question.question;
    window.speechSynthesis.speak(speech);
  }
  configureControls();
  answerInput.focus();
});

answerInput.addEventListener('keyup', () => {
  configureControls();
});

quizForm.addEventListener('submit', e => {
  e.preventDefault();
  if (nextButton.disabled) {
    if (answerInput.value.trim().toLowerCase() === question.answer) {
      resultMessage.classList.add(successClass);
      resultMessage.innerHTML = successMessage;
    } else {
      resultMessage.classList.add(errorClass);
      resultMessage.innerHTML = errorMessage + question.answer;
    }
    nextButton.disabled = false;
  } else {
    nextQuestion();
  }
});

nextButton.addEventListener('click', () => {
  nextQuestion();
});

function nextQuestion() {
  question = undefined;
  answerInput.value = '';
  nextButton.disabled = true;
  clearMessages();
  configureControls();
  listenButton.focus();
}

function configureControls() {
  answerInput.disabled = question === undefined;
  checkButton.disabled = answerInput.value.length === 0;
  listenButton.disabled = quiz === undefined;
}

function clearMessages() {
  resultMessage.classList.remove(errorClass);
  resultMessage.classList.remove(successClass);
  resultMessage.innerHTML = '';
}
