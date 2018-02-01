Ext.define('Postcard.model.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Postcard.model',
        urlPrefix: 'http://localhost:3000',
        proxy: {
            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
});