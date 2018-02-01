Ext.define('Instrumatics.store.LogStream', {
    extend: 'Ext.data.Store',
    alias: 'store.logstream',
    model: 'Instrumatics.model.LogStream',
    autoLoad: true,
    remoteFilter: true
});