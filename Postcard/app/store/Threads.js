Ext.define('Postcard.store.Threads', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Postcard.model.Thread',
    alias: 'store.threads'
});