Ext.define('Instrumatics.store.LogEntries', {
    extend: 'Ext.data.Store',
    alias: 'store.logentries',
    model: 'Instrumatics.model.LogEntry',
    autoLoad: true,
    remoteFilter: true
    });