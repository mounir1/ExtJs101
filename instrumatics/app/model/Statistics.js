Ext.define('Instrumatics.model.Statistic', {
    extend: 'Instrumatics.model.BaseModel',
    fields: [{
            name: 'category'
        },
        {
            name: 'label'
        },
        {
            name: 'percentage',
            type: 'number'
        }
    ]
});