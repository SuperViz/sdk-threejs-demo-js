// web component
class SvDemoGuestImage extends HTMLElement {
  
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
.image-guest {
  width: 531px;
}
@media screen and (max-width: 935px) {
  .image-guest {
    width: 315px;
  }
}
    </style>
      <img class="image-guest"src="${ this.name }"/>`;
    
  }
  
}

// register component
customElements.define( 'sv-demo-guest-image', SvDemoGuestImage );