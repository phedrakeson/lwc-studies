import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log('child constructor called')
  }

  simulateErrorPhase = true;

  // perform initialization tasks, fetch data, set up caches, listen for events, etc.
  // do not use to change the state of a component such as loading values or setting properties
  connectedCallback() {
    console.log('child connectedCallback called')
    window.addEventListener('click', this.handleEvListener)
    if (this.simulateErrorPhase) {
      throw new Error('Loading of child component failed')
    }
  }

  // do not change the state or update property of a component in this method
  // rendering is done, fires more than once
  renderedCallback() {
    console.log('child renderedCallback called')
  }

  handleEvListener() {
    console.log('click event captured')
  }

  // disconnect callbacks, listeners here
  disconnectedCallback() {
    alert('child is about to be removed!')
    console.log('child disconnectedCallback called')
    window.removeEventListener('click', this.handleEvListener)
  }

}