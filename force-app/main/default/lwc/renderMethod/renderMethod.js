import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement {
  renderOption = 'default'
  render() {
    switch (this.renderOption) {
      case 'signin':
        return signinTemplate;

      case 'signup':
        return signupTemplate;

      default:
        return renderTemplate;
    }
  }
}