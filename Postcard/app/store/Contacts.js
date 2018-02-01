Ext.define('Postcard.store.Contacts', {
    extend: 'Ext.data.Store',
    model: 'Postcard.model.Contact',
    alias: 'store.contacts',
    autoLoad: true
});