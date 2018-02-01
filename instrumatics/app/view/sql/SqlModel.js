Ext.define('Instrumatics.view.sql.SqlModel', {
    extend: 'Instrumatics.view.SubPageModel',
    alias: 'viewmodel.sql-sql',
    stores: {
        categories: {
            fields: ['text', 'value'],
            data: [{
                text: 'Query Source',
                value: 'source'
            }, {
                text: 'Query Type',
                value: 'type'
            }]
        }
    },
    data: {
        currentCategory: 'source'
    }
});