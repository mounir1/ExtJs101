Ext.define('Wizard.view.wizard.WizardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wizard',
    listen: {
        component: {
            '#next': {
                click: 'onNextClick'
            },
            '#prev': {
                click: 'onPrevClick'
            },
            '#restart': {
                click: 'onRestartClick'
            },
            '#finish': {
                click: 'onFinishClick'
            },
            'wizard-progress button': {
                click: 'onStepClick'
            }
        }
    },
    onNextClick: function () {
        var current = this.getViewModel().get('currentPosition');
        this.getViewModel().set('currentPosition', current + 1);
    },
    onPrevClick: function () {
        var current = this.getViewModel().get('currentPosition');
        this.getViewModel().set('currentPosition', current - 1);
    },
    onRestartClick: function () {
        this.getViewModel().set('currentPosition', 0);
    },
    onFinishClick: function () {
        var q = this.getViewModel().get('questionnaire');
        this.fireEvent('wizardcomplete', q);
    },
    onStepClick: function (btn) {
        this.getViewModel().set('currentPosition', btn.stepIndex);
    }
});