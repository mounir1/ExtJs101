Ext.define('ArchitectureCms.model.Page', {
    extend: 'Ext.data.TreeModel',
    clientIdProperty: 'clientId',
    identifier: {
        type: 'sequential',
        prefix: 'Unsaved-'
    },
    schema: {
        namespace: 'ArchitectureCms.model',
        urlPrefix: 'http://localhost:3000',
        // urlPrefix: 'https://extjs65.firebaseio.com/cms',
        proxy: {

            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
    fields: [{
            name: 'body'
        },
        {
            name: 'stub'
        },
        {
            name: 'text'
        },
        {
            name: 'published'
        }
    ]
}); 