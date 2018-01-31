Ext.define('inbox.view.messages.MessagesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.messages',
    stores: {
        messages: {
            type: 'messages'
        }, tags: {
            type: 'tags',
            session: true
        }
    }
});