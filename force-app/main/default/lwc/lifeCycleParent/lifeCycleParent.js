import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
  constructor() {
    super();
    console.log('parent constructor called')
  }

  show = true;

  get showBtnText() {
    return this.show ? 'Hide child' : 'Show child';
  }

  // perform initialization tasks, fetch data, set up caches, listen for events, etc.
  // do not use to change the state of a component such as loading values or setting properties
  connectedCallback() {
    console.log('parent connectedCallback called')
  }

  // do not change the state or update property of a component in this method
  // rendering is done, fires more than once
  renderedCallback() {
    console.log('parent renderedCallback called')
  }

  errorCallback(error, stack) {
    console.log('parent errorCallback called! Message:', error.message);
    console.log('Stack/culprit:', stack)
  }

  handleClick() {
    this.show = !this.show;
  }

}