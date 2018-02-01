Ext.define('Instrumatics.model.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Instrumatics.model',
        urlPrefix: 'http://localhost:3000',
        proxy: {
            type: 'ajax',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
});