// web component
class SvDemoImage extends HTMLElement {
  
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

      <img src="${ this.name }"/>`;
    
  }
  
}

// register component
customElements.define( 'sv-demo-image', SvDemoImage );