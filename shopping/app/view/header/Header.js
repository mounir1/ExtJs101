Ext.define('Alcohology.view.header.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-header',
    cls: 'app-header',
    layout: 'hbox',
    title: 'alcohology.',
    items: [{
            xtype: 'account-indicator',
            width: 80,
            labelStyle:'padding:10px;align:right',
            bind: '{currentUser}',
            region: 'west'
        },
        {
            xtype: 'minicart',
            width: 80,
            region: 'east',
            bind: {
                data: {
                    count: '{cartCount}'
                }
            }
        }
    ]
});