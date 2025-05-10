import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
  myQuestions = [
    {
      id: 1,
      question: 'Which one of the following is not a template loop?',
      answers: {
        a: 'for:each',
        b: 'iterator',
        c: 'map loop'
      },
      correctAnswer: 'c'
    },
    {
      id: 2,
      question: 'Which of the file is invalid in LWC component folder?',
      answers: {
        a: 'index.svg',
        b: 'index.js',
        c: 'index.apex',
      },
      correctAnswer: 'c'
    },
    {
      id: 3,
      question: 'Which one of the following is not a directive?',
      answers: {
        a: '@track',
        b: 'if:true',
        c: 'for:each',
      },
      correctAnswer: 'a'
    }
  ]

  selected = {};

  correctAnswers = 0;

  isSubmitted = false;

  get allNotSelected() {
    return !(Object.keys(this.selected).length === this.myQuestions.length)
  }

  get isScored() {
    return `slds-text-heading_large ${this.myQuestions.length == this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'} slds-m-bottom_small`
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
    console.log(event.target)
  }

  submitHandler(event) {
    event.preventDefault();
    this.correctAnswers = this.myQuestions.filter(q => this.selected[q.id] == q.correctAnswer).length;
    this.isSubmitted = true;
  }

  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}