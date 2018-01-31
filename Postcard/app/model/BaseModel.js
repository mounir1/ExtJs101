Ext.define('Postcard.model.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
    namespace: 'Postcard.model',
    urlPrefix: 'http://localhost:1841',
    proxy: {
    type: 'rest',
    url: '{prefix}/{entityName:uncapitalize}'
    }
    },
    });