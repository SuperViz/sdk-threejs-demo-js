import * as CC from './CustomComponent.js'

const CustomComponent = CC.default

export default class SVTextInput extends CustomComponent{
    static observedAttributes = [];
    constructor() {
        super()
    }                 


    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        const elem = document.createElement('input')

        elem.isDefaultNamespace

        elem.setAttribute("placeholder", this._attributes.placeholder || "")

        if(this._attributes.label) {
            const label = document.createElement("label")
            label.textContent = this._attributes.label
            label.appendChild(elem)
            wrapper.append(label)
        } else {
            wrapper.appendChild(elem)
        }
        return wrapper
    }

    
}

customElements.define("sv-demo-text-input", SVTextInput)
