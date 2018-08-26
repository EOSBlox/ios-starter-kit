import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyProfile extends PolymerElement {
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
        <blox-settings screen="edit"></blox-settings>
    </div>
    <small>Dont need this profile? <a href="/settings/delete-profile">Delete Profile</a></small>
    <small>Time to change identity? <a href="/settings/switch">Switch Profile</a></small>

    `;
}
} window.customElements.define('my-profile', MyProfile);
