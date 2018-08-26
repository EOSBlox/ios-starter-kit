import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyDeleteAccount extends PolymerElement {
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
            margin-top: 10px;
            display: block;
        }
        blox-settings{
            margin-bottom:40px;
        }
    </style>

    <div class="container">
        <h2>Delete</h2>
        <blox-settings screen="deleteAccount"></blox-settings>
        <small>Remebered the password? <a href="/settings/login">Log in</a></small>
        
    </div>
    `;
}
} window.customElements.define('my-delete-account', MyDeleteAccount);
