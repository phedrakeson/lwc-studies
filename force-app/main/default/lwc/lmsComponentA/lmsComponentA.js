import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
  @wire(MessageContext)
  context;

  inputValue = '';

  inputHandler(event) {
    this.inputValue = event.target.value;
  }

  publishMessage() {
    const message = {
      lmsData: {
        value: this.inputValue
      }
    };

    publish(this.context, SAMPLEMC, message);
  }
}