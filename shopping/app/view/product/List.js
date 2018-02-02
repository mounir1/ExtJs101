Ext.define('Alcohology.view.product.List', {
    extend: 'Ext.grid.Panel',
    controller: 'product',
    xtype: 'product-list',
    cls: 'product-list',
    viewModel: 'product',
    requires: [
        'Alcohology.view.product.Detail',
        'Alcohology.view.product.ProductController',
        'Alcohology.view.product.ProductModel'
    ],
    tbar: [{
        xtype: 'combo',
        store: Ext.create('Ext.data.Store', {
            fields: ['text', 'field', 'direction'],
            data: [{
                    text: 'Date Added',
                    property: 'id',
                    direction: 'DESC'
                },
                {
                    text: 'Name A-Z',
                    property: 'name',
                    direction: 'ASC'
                },
                {
                    text: 'Name Z-A',
                    property: 'name',
                    direction: 'DESC'
                },
                {
                    text: 'Price ASC',
                    property: 'price',
                    direction: 'ASC'
                }
            ]
        }),
        displayField: 'text',
        queryMode: 'local',
        fieldLabel: 'Sort By',
        emptyText: 'None',
        editable: false
    }],
    items: [{
        xtype: 'dataview',
        itemId: 'productListView',
        emptyText: '<span class="empty">No Products Found. < /span>',
        itemSelector: '.product',
        bind: '{products}',
        tpl: '<tpl for="."><div class="product"><h2>{name}</h2 > < img src = "{imagePath}" / > < p > & pound; {price } < /p></div > < /tpl>',
    }],
    constructor: function () {
        this.callParent(arguments);
        this.add(Ext.create('Alcohology.view.product.Detail', {
            reference: 'productWindow'
        }));
    }
});