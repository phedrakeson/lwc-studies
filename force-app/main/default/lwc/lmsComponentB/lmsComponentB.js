import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {
  @wire(MessageContext)
  context;

  subscription = null;

  fetchedMessage = '';

  connectedCallback() {
    this.subscription = subscribe(this.context, SAMPLEMC, (message) => this.handleMessage(message), {
      scope: APPLICATION_SCOPE
    });
  }

  handleMessage(data) {
    this.fetchedMessage = message?.lmsData?.value ? message.lmsData.value : 'No message published.';
  }

  disconnectedCallback() {
    unsubscribe(this.subscription);
  }
}