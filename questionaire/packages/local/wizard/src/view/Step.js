Ext.define('Wizard.view.wizard.Step', {
    extend: 'Ext.form.Panel',
    xtype: 'wizard-step',
    cls: 'wizard-step',
    defaults: {
        labelSeparator: '',
        labelAlign: 'top',
        labelWidth: 250,
        msgTarget: 'side',
        width: '100%'
    },
    config: {
        step: null
    },
    modelValidation: true,
    applyStep: function (step) {
        this.add({
            xtype: 'container',
            cls: 'wizard-step-introduction',
            html: step.get('introduction')
        });
        step.questions().each(function (question) {
            this.add({
                xtype: question.get('type'),
                fieldLabel: question.get('questionText'),
                required: question.get('required'),
                bind: '{question.answer}',
                viewModel: 'progress-step'
            }).getViewModel().set('question', question);
        }, this);
        step.isValid();
    }
});