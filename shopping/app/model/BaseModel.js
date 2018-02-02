Ext.define('Alcohology.model.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Alcohology.model',
        urlPrefix: 'http://localhost:3000',
        // urlPrefix:'https://extjs65.firebaseio.com/shopping',
        proxy: {
            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    }
});