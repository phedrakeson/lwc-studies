import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {

  showModal = false;

  handleClick() {
    this.showModal = true;
  }

  closeModal(event) {
    console.log(event.detail);
    this.showModal = false;
  }
}