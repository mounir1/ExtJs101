Ext.define('Alcohology.view.product.ProductModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product',
    links: {
        currentCategory: {
            type: 'Alcohology.model.Category',
            id: 1
        }
    },
    data: {
        sortProperty: 'id',
        sortDirection: 'ASC'
    },
    stores: {
        products: {
            type: 'products',
            autoLoad: true,
            remoteFilter: true,
            remoteSort: true,
            sorters: [{
                property: '{sortProperty}',
                direction: '{sortDirection}'
            }],
            filters: [{
                property: 'categoryId',
                value: '{currentCategory.id}'
            }]
        }
    }
});