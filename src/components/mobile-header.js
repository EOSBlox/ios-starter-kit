import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
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
            font-size: 22px;
            font-weight: 500;
            line-height: 17px;
            background-color: var(--header-bg-color);
            overflow: hidden;
            position: fixed; 
            top: 0;
            width: 100%; 
            border-bottom: 1px solid var(--border-color-1);
        }
        .back{
            width: 44px;
            line-height: 49px;
            z-index: 9000;
            top: 0px;
            height: 44px;
            position: absolute;
            background-image: url("../images/back.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 10px 16px;
            cursor: pointer;
        }
    </style>

    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

    <mobile-iphonex iphonex="{{iphonex}}"></mobile-iphonex>
    
    <template is="dom-if" if="{{backButton}}">
        <div class="back" on-click="_goBack"></div>
    </template>
    <div class="header">MyApp</div>
    `;
}

static get properties() {
    return {
        iphonex: {
            type: Boolean,
            observer: '_detectedIphoneX'
        },
        backButton: {
            type: Boolean,
            value: false
        }
    };
}

static get observers() {
    return [
        '_routePageChanged(subroute.path)'
    ];
}

_routePageChanged(subpage) {
    let page = subpage.substr(1)
    if (['delete-profile', 'switch', 'add'].indexOf(page) !== -1) {
        this.backButton = true;
    } else {
        this.backButton = false;
    }
}

_goBack(){
    window.history.back();
}

_detectedIphoneX(){
    if(!this.iphonex){
        this.updateStyles({'--margin-top': '0'});
    } else {
        this.updateStyles({'--margin-top': '40px'});
    }
}
} window.customElements.define('mobile-header', MobileHeader);
