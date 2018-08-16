import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyActivity extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0;
          margin-top: 75px;
        }
      </style>
        <h2>Activity</h2>
    `;
  }
} window.customElements.define('my-activity', MyActivity);
