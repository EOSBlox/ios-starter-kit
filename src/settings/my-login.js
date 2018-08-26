import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyLogin extends PolymerElement {
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
        <h2>Login</h2>
        <blox-settings screen="login"></blox-settings>
        <small><a href="/settings/delete-account">Delete Account</a></small>
        <small>New to MyApp? <a href="/settings/join">Join now</a></small>
        
    </div>
    `;
}
} window.customElements.define('my-login', MyLogin);
