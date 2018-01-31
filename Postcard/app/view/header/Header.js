Ext.define('Postcard.view.header.Header', {
    extend: 'Ext.Toolbar',
    requires: ['Postcard.view.header.HomeButton'],
    xtype: 'app-header',
    height: 60,
    controller: 'header',
    viewModel: 'header',
    session: true,
    items: [
        {
            xtype: 'home-button', cls: 'title', html: 'Postcard',
            bind: { hidden: '{menuButton.pressed}' }
        },
        {
            xtype: 'tbspacer',
            bind: { hidden: '{menuButton.pressed}' }
        },
        {
            xtype: 'textfield', flex: 1,
            cls: 'search-box', emptyText: 'Search',
            bind: '{searchTerm}',
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': {
                    hidden: true,
                    bind: { hidden: '{!menuButton.pressed}' }
                },
                'wide': { hidden: false }
            }
        },
        {
            xtype: 'tbfill',
            bind: { hidden: '{menuButton.pressed}' }
        },
        {
            xtype: 'combobox', flex: 1, editable: false,
            displayField: 'name', idField: 'name',
            queryMode: 'local', forceSelection: true,
            bind: {
                store: '{tags}', value: '{currentTag}'
            }, plugins: ['responsive'],
            responsiveConfig: {
                'tall': {
                    hidden: true,
                    bind: { hidden: '{!menuButton.pressed}' }
                },
                'wide': { hidden: false }
            }
        },
        {
            xtype: 'button', cls: 'new-message',
            text: 'New Message',
            bind: {
                hidden: '{menuButton.pressed}'
            }
        },
        {
            text: 'Menu', reference: 'menuButton',
            width: 30, enableToggle: true,
            plugins: ['responsive'], responsiveConfig: {
                'tall': { hidden: false },
                'wide': { hidden: true }
            }
        }
    ]
});