Ext.define('inbox.view.header.HeaderModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.header',
    stores: {
    tags: {
    type: 'tags',
    session: true
    }
    }
    });