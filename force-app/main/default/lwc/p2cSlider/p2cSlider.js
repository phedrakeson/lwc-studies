import { api, LightningElement } from 'lwc';

export default class P2cSlider extends LightningElement {
  val = 20;

  @api resetSlider() {
    this.val = 0;
  }
}