import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MySwitch extends PolymerElement {
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


        <blox-settings screen="select"></blox-settings>

<small>Need a new identity? <a href="/settings/add">Add a new profile</a></small>

    `;
}
} window.customElements.define('my-switch', MySwitch);
