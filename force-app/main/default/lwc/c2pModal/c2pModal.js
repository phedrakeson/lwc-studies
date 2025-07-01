import { LightningElement } from 'lwc';

export default class C2pModal extends LightningElement {
  closeHandler() {
    const customEvent = new CustomEvent('close', {
      detail: "Modal closed by button click"
    });
    this.dispatchEvent(customEvent);
  }
}