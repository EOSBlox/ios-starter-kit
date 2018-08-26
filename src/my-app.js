import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './components/mobile-header.js';
import './components/mobile-footer.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      
      <mobile-header></mobile-header>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <my-home name="home"></my-home>
        <my-explore name="explore"></my-explore>
        <my-cart name="cart"></my-cart>
        <my-activity name="activity"></my-activity>
        <my-settings name="settings"></my-settings>
        <my-view404 name="view404"></my-view404>
      </iron-pages>
      <mobile-footer></mobile-footer>
      
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'explore', 'cart', 'activity', 'settings'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./my-home.js');
        break;
      case 'explore':
        import('./my-explore.js');
        break;
      case 'cart':
        import('./my-cart.js');
        break;
      case 'activity':
        import('./my-activity.js');
        break;
      case 'settings':
        import('./my-settings.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
} window.customElements.define('my-app', MyApp);
