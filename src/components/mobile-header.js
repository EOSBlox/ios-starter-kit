import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class MobileHeader extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
            display: block;
            padding: 0px;
        }
        .header {
            margin-top: var(--margin-top);
            height: 17px;
            text-align: center;
            color: var(--header-color);
            padding: 14px 0 14px 0;
            size: 17;
            line-height: 17px;
            background-color: var(--header-bg-color);
            overflow: hidden;
            position: fixed; 
            top: 0;
            width: 100%; 
            border-bottom: 1px solid var(--border-color-1);
        }
    </style>
    <mobile-iphonex iphonex="{{iphonex}}"></mobile-iphonex>
    <div class="header">MyApp</div>
    `;
}

static get properties() {
return {
    iphonex: {
        type: Boolean,
        observer: '_detectedIphoneX'
    }
};
}

_detectedIphoneX(){
    if(!this.iphonex){
        this.updateStyles({'--margin-top': '0'});
    } else {
        this.updateStyles({'--margin-top': '40px'});
    }
}
} window.customElements.define('mobile-header', MobileHeader);
