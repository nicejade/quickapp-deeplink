const template = document.createElement('template')

const getInnerHTML = that => {
  return `
  <style>
  .quickapp-block {
    position: fixed;
    bottom: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .open-in-quickapp {
    position: fixed;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    margin: auto;
    color: #f4ed38;
    border: solid 0.125em transparent;
    border-radius: 25px;
    padding: 0 10px;
    text-decoration: none;
    transition: 0.2s ease-out;
    animation: animat 1.8s infinite;
    z-index: 999999;
    background-color: #2EE59D;
    box-shadow: 0px 8px 15px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
  }
  @keyframes animat {
    0%{ transform: scale(.8); }
    50%{ transform: scale(1); }
    100%{ transform: scale(.8); }
  }
  </style>

  <div class="quickapp-block">
    <a href="${that.deeplink}"
      style="color: ${that.color};background-color: ${that.bgcolor};display: ${that.display}"
      class="open-in-quickapp"
      >
      <svg t="1627211279403" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff2") format("woff2"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff") format("woff"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.ttf") format("truetype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.svg#iconfont") format("svg"); }
      </style></defs><path d="M508.697 86.818 299.807 511.545 461.145 511.545 262.562 937.182 755.629 357.896 557.332 357.896 761.438 86.818Z" p-id="2044" fill="#f4ed38"></path></svg>
      ${that.text}
    </a>
  </div>
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
      this.getAttribute('bgcolor')
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
      this.getAttribute('brand') || 'vivo|Weixin|huawei|HUAWEI|oppo|OPPO'
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
    const isDisplay = this.isAndroidSystem() && isPermit && !this.isInQuickApp()
    return isDisplay ? 'flex' : 'none'
  }

  get deeplink() {
    const deeplink = this.getAttribute('deeplink') || 'hap://app/graceful.sentences.com'
    return `${deeplink}?path=${location.href}`
  }
  set deeplink(v) {
    this.setAttribute('deeplink')
  }

  isAndroidSystem() {
    const ua = window.navigator.userAgent
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  }

  isInQuickApp() {
    try {
      system.postMessage({})
      return true
    } catch (error) {
      return false
    }
  }
}

window.customElements.define('quickapp-deeplink', QuickappDeeplink)
