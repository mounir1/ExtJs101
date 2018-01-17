Ext.define('ArchitectureCms.store.Pages', {
    extend: 'Ext.data.TreeStore',
    model: 'ArchitectureCms.model.Page',
    alias: 'store.pages',
    root: {} // set empty root as using bind doesn't do this
});