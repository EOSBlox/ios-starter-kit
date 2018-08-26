import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';


class MySettings extends PolymerElement {
static get template() {
    return html`
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <my-login name="login"></my-login>
        <my-join name="join"></my-join>
        <my-delete-account name="delete-account"></my-delete-account>
    </iron-pages>

    `;
}

static get properties() {
    return {
    page: {
        type: String,
        observer: '_pageChanged'
    },
        routeData: Object,
        subroute: Object
    };
}

static get observers() {
    return [
        '_routePageChanged(subroute.path)'
    ];
}

_routePageChanged(subpage) {
    let page = subpage.substr(1)
    if (!page) {
        this.page = 'menu';
    } else if (['login', 'join', 'delete-account'].indexOf(page) !== -1) {
        this.page = page;
    } else {
        this.page = 'view404';
    }
}

_pageChanged(page) {
    switch (page) {
    case 'delete-account':
        import('./settings/my-delete-account.js');
        break;
    case 'login':
        import('./settings/my-login.js');
        break;
    case 'join':
        import('./settings/my-join.js');
        break;
    case 'view404':
        import('./my-view404.js');
        break;
    }
}
} window.customElements.define('my-settings', MySettings);
