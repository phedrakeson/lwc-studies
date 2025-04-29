import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  title = 'LWC is awesome,';

  inputHandler(event) {
    this.title = event.target.value;
  }
}