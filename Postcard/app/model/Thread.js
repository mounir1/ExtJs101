Ext.define('Postcard.model.Thread', {
    extend: 'Postcard.model.BaseModel',
    fields: [{
            name: 'id'
        },
        {
            name: 'people'
        },
        {
            name: 'subject'
        },
        {
            name: 'lastMessageOn',
            type: 'date'
        },
        {
            name: 'lastMessageSnippet'
        }
    ]
});