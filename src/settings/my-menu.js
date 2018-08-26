import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyMenu extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
        display: block;
        padding: 0;
        margin-top: 75px;
        }
        small {
            font-size: 12px;
            text-align: center;
            margin-top: 40px;
            display: block;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            border-bottom: 1px solid #F1F1F2;
            line-height: 40px;
            color: #373D47;
            font-size: 14px;
            text-indent: 30px;
        }
    </style>


        <blox-settings screen="active"></blox-settings>

        <ul>
            <a href="settings/profile"><li>Profile</li></a>
            <a href="settings/password"><li>Password</li></a>
            <a href="settings/backup"><li>Backup</li></a>
            <a href="settings/logout"><li>Logout</li></a>
        </ul>


    `;
}
} window.customElements.define('my-menu', MyMenu);
