import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyMenu extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
        display: block;
        padding: 0;
        margin-top: 75px;
        }
    </style>
        <h2>Menu</h2>
    `;
}
} window.customElements.define('my-menu', MyMenu);
