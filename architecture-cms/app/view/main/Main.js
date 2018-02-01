Ext.define('ArchitectureCms.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'ArchitectureCms.view.main.Detail',
        'ArchitectureCms.view.main.Tree'
    ],
    session: true,
    controller: 'main',
    viewModel: 'page',
    title: 'Architect CMS',
    bind: {
        title: 'Architect CMS - Currently Editing "{currentPage.text}" '
    },
    layout: 'border',
    items: [{
            xtype: 'page-detail',
            region: 'center',
            reference: 'detail'
        },
        {
            xtype: 'page-tree',
            region: 'west',
            width: 300,
            reference: 'tree',
            split: true
        }
    ]
});