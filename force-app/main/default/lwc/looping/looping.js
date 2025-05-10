import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
  carList = ['Audi', 'Ford', 'BMW', 'Fiat', 'Mercedes'];

  ceoList = [
    {
      id: 1,
      company: 'Google',
      name: 'Sundar Pichai'
    },
    {
      id: 2,
      company: 'Apple',
      name: 'Tim Cook'
    },
    {
      id: 3,
      company: 'Microsoft',
      name: 'Bill Gates'
    }
  ]
}