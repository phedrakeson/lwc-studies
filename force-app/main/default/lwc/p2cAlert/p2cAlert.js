import { api, LightningElement } from 'lwc';

export default class P2cAlert extends LightningElement {

  // similar ao @input
  @api message;
  @api cardHeading;
  @api number;
  @api isValid;
}