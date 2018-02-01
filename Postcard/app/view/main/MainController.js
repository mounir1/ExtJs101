Ext.define('Postcard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    routes: {
        'thread/new': 'showRightPane',
        'thread/:id/messages': 'showRightPane',
        'thread/:id/messages/new': 'showRightPane'
    },
    listen: {
        component: {
            'button[cls="logout"]': {
                click: function () {
                    window.localStorage.removeItem('loggedin');
                    window.location = '/';
                }
            }
        }
    },
    showRightPane: function (id) {
        if (this.getView().isCard()) {
            this.getView().setActiveItem(1);
        }
    }
});