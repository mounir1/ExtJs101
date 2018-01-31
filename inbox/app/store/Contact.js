Ext.define('inbox.store.Contacts', {
    extend: 'Ext.data.Store',
    model: 'inbox.model.Contact',
    alias: 'store.contacts',
    autoLoad: true
    });