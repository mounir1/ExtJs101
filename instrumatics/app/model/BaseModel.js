Ext.define('Instrumatics.model.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Instrumatics.model',
        urlPrefix: 'http://localhost:1841',
        proxy: {
            type: 'ajax',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
});