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
        <my-menu name="menu"></my-menu>
        <my-profile name="profile"></my-profile>
        <my-switch name="switch"></my-switch>
        <my-password name="password"></my-password>
        <my-logout name="logout"></my-logout>
        <my-delete-profile name="delete-profile"></my-delete-profile>
        <my-backup name="backup"></my-backup>
        <my-add name="add"></my-add>
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
    } else if (['login', 'join', 'delete-account', 'menu', 'profile', 'switch', 'password', 'logout', 'delete-profile', 'backup','add'].indexOf(page) !== -1) {
        this.page = page;
    } else {
        this.page = 'view404';
    }
}

_pageChanged(page) {
    switch (page) {
    case 'add':
        import('./settings/my-add.js');
        break;
    case 'backup':
        import('./settings/my-backup.js');
        break;
    case 'delete-profile':
        import('./settings/my-delete-profile.js');
        break;
    case 'logout':
        import('./settings/my-logout.js');
        break;
    case 'password':
        import('./settings/my-password.js');
        break;
    case 'switch':
        import('./settings/my-switch.js');
        break;
    case 'profile':
        import('./settings/my-profile.js');
        break;
    case 'menu':
        import('./settings/my-menu.js');
        break;
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
