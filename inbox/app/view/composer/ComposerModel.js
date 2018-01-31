Ext.define('inbox.view.Composer.ComposerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.composer',
    stores: {
        contacts: {
            type: 'contacts'
        }
    },
    data: {
        newMessage: {}
    }
});