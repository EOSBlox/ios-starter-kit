import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class MobileIphoneX extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
            display: block;
            padding: 0px;
        }
    </style>
    `;
}
static get properties() {
    return {
        iphonex: {
            type: Boolean,
            notify: true,
            reflectToAttribute: true,
            value: false,
            observer: '_detectIphoneX'
        }
    };
}

_detectIphoneX(){
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const ratio = window.devicePixelRatio || 1;
    const screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
    };
    if (iOS && screen.width == 1125 && screen.height === 2436) {
        this.iphonex = true;
    }
}
} window.customElements.define('mobile-iphonex', MobileIphoneX);






