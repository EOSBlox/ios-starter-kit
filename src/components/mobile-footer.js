import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import './mobile-iphonex.js';

class MobileFooter extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
            display: block;
            padding: 0px;
        }
        .footer {
            height: var(--footer-height);
            text-align: center;
            color: var(--header-color);
            background-color: var(--header-bg-color);
            position: fixed; 
            bottom: 0;
            width: 100%; 
            border-top: 1px solid var(--border-color-1);
        }
        ul {
            display: table;
            width: 100%;
            height: 45px;
            padding: 0;
            margin: 0;
        }
        li {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 20%;
        }
        a {
            position: relative;
            display: block;
            width: 23px;
            height: 23px;
            margin: 0 auto;
            background: no-repeat 50% 50%;
            background-size: cover;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            
        }
        a.home {
            background-image: url(../../images/mobile-home.svg);
        }
        a.cart {
            background-image: url(../../images/mobile-cart.svg);
        }
        a.activity {
            background-image: url(../../images/mobile-activity.svg);
        }
        a.explore {
            background-image: url(../../images/mobile-explore.svg);
        }
        a.menu {
            background-image: url(../../images/mobile-menu.svg);
        }
    </style>
    <div class="footer">
        <ul>
            <li>
                <a href="/" class="home"></a>
            </li>
            <li>
                <a href="/explore" class="explore"></a>
            </li>
            <li>
                <a href="/cart" class="cart"></a>
            </li>
            <li>
                <a href="/activity" class="activity"></a>
            </li>
            <li>
                <a href="/settings/menu" class="menu"></a>
            </li>
        </ul>
        
    </div>
    <mobile-iphonex iphonex="{{iphonex}}"></mobile-iphonex>
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
        this.updateStyles({'--footer-height': '45px'});
    } else {
        this.updateStyles({'--footer-height': '70px'});
    }
}

} window.customElements.define('mobile-footer', MobileFooter);
