import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyPassword extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
        display: block;
        padding: 0;
        margin-top: 75px;
        }
        h1 {
            font-size: 16px;
        }
    </style>

    <div class="container">
        <h1>Password</h1>
        <blox-settings screen="password"></blox-settings>
    </div>

    `;
}
} window.customElements.define('my-password', MyPassword);
