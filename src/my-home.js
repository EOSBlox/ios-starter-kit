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
        .join-button a{
          display: block;
          text-align: center;
          text-transform: uppercase;
          padding: 13px 12px;
          border-top: 1px solid var(--border-color-1);
        }
      </style>
      <div class="container">
        <h2>Home</h2>  
      </div>
      <div class="join-button"><a href="settings/join">Join MyApp</a></div>
    `;
  }
} window.customElements.define('my-home', MyHome);
