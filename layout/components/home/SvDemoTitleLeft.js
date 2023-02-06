// web component
class SvDemoTitleLeft extends HTMLElement {
  
  constructor() {
    super();
    this.name = '';
  }
  
  // component attributes
  static get observedAttributes() {
    return ['name'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
    
  }
  
  // connect component
  connectedCallback() {
    
    const shadow = this.attachShadow({ mode: 'open' });
    
    shadow.innerHTML = `
    <style>
    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
    @media screen and (max-width: 935px) {
      p {
      font-size: 32px;
      line-height: 37px;
      font-weight: 900;
      }
    }
    </style>
      <p>${ this.name }</p>`;
    
  }
  
}

// register component
customElements.define( 'sv-demo-title-left', SvDemoTitleLeft );