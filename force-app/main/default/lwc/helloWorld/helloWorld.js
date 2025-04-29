import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  title = 'LWC is awesome,';

  @track address = {
    city: 'San Francisco',
    postcode: 6969,
    country: 'USA'
  }

  @track list = ['a', 'b', 'c'];

  get firstItem() {
    return this.list[0].toUpperCase();
  }

  inputHandler(event) {
    this.title = event.target.value;
  }

  trackHandler(event) {
    this.address.city = event.target.value;
  }
}