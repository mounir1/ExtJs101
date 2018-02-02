Ext.define('Wizard.model.Questionnaire', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'title'
        },
        {
            name: 'introduction'
        },
        {
            name: 'conclusion'
        }
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/questionnaire'
    },
    toJSON: function () {
        return this.getData(true);
    }
});