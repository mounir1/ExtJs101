Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    require:[
        'Alcohology.view.header.Header',
        'Alcohology.view.account.Account',
        'Alcohology.view.cart.Cart',
        'Alcohology.view.categories.Categories',
        'Alcohology.view.product.List', 
        'Alcohology.view.main.MainController'
    ],
    header: {
        xtype: 'app-header'

    },
    items: [{
            title:'categories',
            xtype: 'categories',
            width: 200,
            region: 'west'
        },
        {   
            title:'Products',
            xtype: 'product-list',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
        this.add(Ext.create('Alcohology.view.cart.Cart', {
            reference: 'cartWindow'
        }));
        this.add(Ext.create('Alcohology.view.account.Account', {
            reference: 'accountWindow'
        }));
    }
});