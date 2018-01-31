Ext.define('inbox.model.Message', {
    extend: 'inbox.model.BaseModel',
    fields: [
    { name: 'id' },
    { name: 'people' },
    { name: 'subject' },
    { name: 'body' },
    { name: 'date', type: 'date' },
    { name: 'tag' }
    ]
    });