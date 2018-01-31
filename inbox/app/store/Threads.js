Ext.define('inbox.store.Threads', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'inbox.model.Thread',
    alias: 'store.threads'
    });