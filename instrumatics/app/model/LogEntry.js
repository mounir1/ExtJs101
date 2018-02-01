Ext.define('Instrumatics.model.LogEntry', {
    extend: 'Instrumatics.model.BaseModel',
    fields: [{
            name: 'value'
        },
        {
            name: 'subType'
        },
        {
            name: 'type'
        },
        {
            name: 'time',
            type: 'date'
        }
    ]
});