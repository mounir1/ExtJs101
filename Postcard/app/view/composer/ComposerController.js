Ext.define('Postcard.view.composer.ComposerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.composer',
    listen: {
        component: {
            'button': {
                click: 'onSendClick'
            }
        }
    },
    routes: {
        'thread/:id/messages': 'hideComposer',
        'thread/:id/messages/new': 'showComposer',
        'thread/new': 'showComposer'
    },
    hideComposer: function () {
        this.getView().hide();
    },
    showComposer: function (parentId) {
        this.getViewModel().set('newMessage.parentId', parentId);
        this.getView().show();
    },
    onSendClick: function () {
        var session = this.getSession(),
            data = this.getViewModel().get('newMessage');
        session.createRecord('Postcard.model.Message', {
            people: data.people,
            subject: data.subject,
            body: data.body,
            parentId: data.parentId
        });
        var batch = session.getSaveBatch().start();
        batch.on('complete', this.onSaveComplete, this);
    },
    onSaveComplete: function (batch, operation) {
        var record = operation.getRecords()[0],
            id = record.getId(),
            parentId = record.get('parentId');
        this.redirectTo('thread/' + (parentId || id) +
            '/messages');
    }
});