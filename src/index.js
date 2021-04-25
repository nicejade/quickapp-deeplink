const template = document.createElement('template')

const getInnerHTML = that => {
  return `
  <style>
  .open-in-quickapp {
    position: fixed;
    bottom: 0;
    left: 50%;
    right: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    height: 38px;
    line-height: 38px;
    transform: translate(-50%, -50%);
    margin: auto;
    color: #ffffff;
    border: 1px solid #20a0ff;
    border-radius: 20px;
    padding: 0 10px;
    text-decoration: none;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 999999;
  }
  </style>

  <a href="${that.deeplink}"
    style="color: ${that.color};background-color: ${that.bgcolor};display: ${that.display}"
    class="open-in-quickapp"
    >${that.text}
  </a>
`
}

class QuickappDeeplink extends HTMLElement {
  constructor() {
    super()
    template.innerHTML = getInnerHTML(this)
    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }

  get text() {
    return (
      this.getAttribute('text') || '快应用中打开'
    )
  }
  set text(v) {
    this.setAttribute('text')
  }

  get bgcolor() {
    return (
      this.getAttribute('bgcolor') || '#20a0ff'
    )
  }
  set bgcolor(v) {
    this.setAttribute('bgcolor')
  }

  get color() {
    return (
      this.getAttribute('color') || '#ffffff'
    )
  }
  set color(v) {
    this.setAttribute('color')
  }

  get brand() {
    return (
      this.getAttribute('brand') || 'Vivo|Weixin'
    )
  }
  set brand(v) {
    this.setAttribute('brand')
  }

  get display() {
    const ua = navigator.userAgent
    const brandArr = this.brand.split('|')
    const isPermit = brandArr.some(brand => {
      return ua.includes(brand)
    })
    const isDisplay = this.isAndroidSystem() && isPermit
    return isDisplay ? 'flex' : 'none'
  }

  get deeplink() {
    const deeplink = this.getAttribute('deeplink') || 'https://hapjs.org/app/graceful.sentences.com'
    return `${deeplink}?path=${location.href}`
  }
  set deeplink(v) {
    this.setAttribute('deeplink')
  }

  isAndroidSystem() {
    const ua = window.navigator.userAgent
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  }
}

window.customElements.define('quickapp-deeplink', QuickappDeeplink)
