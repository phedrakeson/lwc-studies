import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
  carouselData = [
    {
      header: "First card",
      description: "first card description",
      href: "https://www.google.com"
    },
    {
      header: "Second card",
      description: "second card description",
      href: "https://www.google.com"
    },
    {
      header: "third card",
      description: "third card description",
      href: "https://www.google.com"
    }
  ]

  handleClick() {
    this.template.querySelector('c-p2c-slider').resetSlider();
  }
}