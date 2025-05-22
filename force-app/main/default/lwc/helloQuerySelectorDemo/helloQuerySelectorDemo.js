import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

  userNames = ['Nik', 'Seb', 'Ker', 'Nasha']

  fetchDetailHandler() {
    const element = this.template.querySelector('h1');
    const userElements = this.template.querySelectorAll('.name');
    const childElement = this.template.querySelector('.child');

    element.style.border = '1px solid red';
    console.log(element.innerText);
    Array.from(userElements).forEach(user => {
      console.log(user.innerText);
      user.setAttribute('title', user.innerText);
    })

    childElement.innerHTML = '<p>Hey, I am a embedded child</p>'
  }
}