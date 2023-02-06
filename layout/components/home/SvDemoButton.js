import * as EH from './EvenHandler.js'

const EventHandler = EH.default
class SvDemoButton extends HTMLElement {
  
    constructor() {
      super();
      this.name = '';
      EventHandler.subscribeToEvent('show', this)

    }
    static get observedAttributes() {
      return ['name'];
    }
    
    attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue;
      
    }
    render() {
        const wrapper = document.createElement('button')
        wrapper.textContent = this.name 
        let clickHandler = this.getAttribute("onClick")
        if(typeof clickHandler == "string") {
            clickHandler = eval(clickHandler)
        }
        wrapper.addEventListener("click", clickHandler)
        return wrapper
    }
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
      <style>
      button {
        background-color: #6210CC;
        border: 1px solid #6210CC;
        border-radius: 4px;
        color: #ffffff;
        width: 380px;
        height: 48px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 900;
        line-height: 15px;
      }
      @media screen and (max-width: 935px) {
        button {
          width: 287px;
          height: 48px;
          padding-left: 0px;
          padding-right: 0px;
          padding: 0px;
          padding-left: 5px;
        }
      }
      </style>`;
      let rendered = this.render()
      shadow.appendChild(rendered)
      
    }
  }


customElements.define("sv-demo-button", SvDemoButton)
