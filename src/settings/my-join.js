import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyJoin extends PolymerElement {
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
    </style>

    <div class="container">
        <h2>Join</h2>
        <blox-settings screen="join"></blox-settings>
        <small>Already on MyApp? <a href="/settings/login">Log In</a></small>
    </div>

    `;
}
} window.customElements.define('my-join', MyJoin);
