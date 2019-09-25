import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
    <style>${css}</style>
    <span class="spinner"></span>
`

class CircleLoader extends HTMLElement {
  static get observedAttributes() {
    return ['color', 'speed', 'size']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this._spinner = this._shadowRoot.querySelector('.spinner')
  }

  attributeChangedCallback(name, _, value) {
    this[name] = value
  }

  defineSpinnerSize(value) {
    this._spinner.style.height = `${value}px`
    this._spinner.style.width = `${value}px`
    this._spinner.style.borderWidth = `${value / 4}px`
  }

  get color() {
    return this._spinner.style.borderRightColor
  }
  set color(value) {
    this._spinner.style.borderRightColor = value
  }

  get speed() {
    return this._spinner.style.animationDuration
  }
  set speed(value) {
    if (value) this._spinner.style.animationDuration = `${value}ms`
  }

  get size() {
    return this._spinner.style.height
  }
  set size(value) {
    if (value) this.defineSpinnerSize(value)
  }
}

if (!window.customElements.get('sky-loader')) {
  window.customElements.define('sky-loader', CircleLoader)
}
