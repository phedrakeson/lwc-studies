import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
  percent = 0;

  get percentage() {
    return `width:${this.percent}%`
  }

  changeHandler(event) {
    this.percent = event.target.value;
  }
}