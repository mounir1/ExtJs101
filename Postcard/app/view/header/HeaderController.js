Ext.define('Postcard.view.header.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',
    listen: {
        component: {
            'button[cls="new-message"]': {
                click: function () {
                    this.redirectTo('thread/new');
                }
            },
            'home-button': {
                click: function () {
                    this.redirectTo('home');
                }
            }
        }, controller: {
            '*': {
                tagadded: function () {
                    this.getViewModel().get('tags').reload();
                }
            }
        }
    }
});