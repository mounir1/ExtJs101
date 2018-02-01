Ext.define('ArchitectureCms.view.main.Tree', { 
    extend: 'Ext.tree.Panel',
    xtype: 'page-tree',
    rootVisible: false,
    tbar: [{
        xtype: 'textfield',
        emptyText: 'Search...',
        width: '100%',
        bind: {
            value: '{searchTerm}'
        }
    }],
    
    bind: {
        store: '{pages}',
        searchFor: '{searchTerm}'
    },
    config: {
        searchFor: null
    },
    applySearchFor: Ext.emptyFn
});