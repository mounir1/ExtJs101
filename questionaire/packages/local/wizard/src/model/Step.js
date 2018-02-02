Ext.define('Wizard.model.Step', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'title'
        },
        {
            name: 'introduction'
        },
        {
            name: 'questionnaireId',
            reference: {
                type: 'Wizard.model.Questionnaire',
                inverse: 'steps'
            }
        }
    ],
    isValid: function () {
        var valid = true;
        this.questions().each(function (q) {
            if (q.isValid() === false) {
                valid = false;
            }
        });
        this.set('valid', valid);
        return valid;
    }
});