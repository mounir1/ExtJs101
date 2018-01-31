Ext.define('Postcard.view.threads.ThreadsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threads',
    listen: {
        component: {
            'threads': {
                itemclick: function (dataview, record) {
                    this.redirectTo('thread/' + record.getId() +
                        '/' + 'messages');
                }
            }
        },
        controller: {
            '*': {
                threadschanged: function () {
                    this.getViewModel().get('threads').reload();
                }
            }
        }
    }
});