Ext.define('Alcohology.model.Product', {
    extend: 'Alcohology.model.BaseModel',
    fields: [{
            name: 'id',
            type: 'integer'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'imagePath',
            type: 'string'
        }
    ]
});