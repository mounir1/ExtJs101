Ext.define('inbox.model.Thread', {
    extend: 'inbox.model.BaseModel',
    fields: [
    { name: 'id' },
    { name: 'people' },
    { name: 'subject' },
    { name: 'lastMessageOn', type: 'date' },
    { name: 'lastMessageSnippet' }
    ]
    });