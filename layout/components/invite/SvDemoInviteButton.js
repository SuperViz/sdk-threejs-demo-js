import * as EH from './EvenHandler.js'

const EventHandler = EH.default
class SvDemoInviteButton extends HTMLElement {
  
    constructor() {
      super();
      this.name = '';
      EventHandler.subscribeToEvent('showinvite', this)

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
        cursor: pointer;
        border: 0px;
        height: 24px;
        position: absolute;
        right: 15px;
        top: 12px;
        position: absolute;
        background-image: url('https://production.cdn.superviz.com/static/copy-icon.png');
      }
      @media screen and (max-width: 935px) {
        button {
          position: absolute;
          background-image: url('https://production.cdn.superviz.com/static/copy-icon.png');
        }
      }
      </style>`;
      let rendered = this.render()
      shadow.appendChild(rendered)
      
    }
  }


customElements.define("sv-demo-invite-button", SvDemoInviteButton)
