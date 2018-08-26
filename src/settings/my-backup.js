import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyBackup extends PolymerElement {
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
        <blox-settings screen="backup"></blox-settings>
    </div>

    `;
}
} window.customElements.define('my-backup', MyBackup);
