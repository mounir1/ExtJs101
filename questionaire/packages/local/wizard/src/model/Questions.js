Ext.define('Wizard.model.Question', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'name'
        },
        {
            name: 'required',
            type: 'boolean'
        },
        {
            name: 'questionText'
        },
        {
            name: 'type'
        },
        {
            name: 'answer'
        },
        {
            name: 'stepId',
            reference: {
                type: 'Wizard.model.Step',
                inverse: 'questions'
            }
        }
    ],
    validators: {
        answer: 'presence'
    },
    getValidation: function () {
        if (this.get('required')) {
            return this.callParent();
        } else {
            return new Ext.data.Validation();
        }
    }
});