import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0;
          padding-top: 75px;
        }
      </style>
        <h2>Home</h2>
    `;
  }
} window.customElements.define('my-home', MyHome);
