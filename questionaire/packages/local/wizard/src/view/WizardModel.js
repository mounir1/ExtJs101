Ext.define('Wizard.view.wizard.WizardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.wizard',
    data: {
        currentPosition: 0
    },
    formulas: {
        currentStep: function (get) {
            var pos = get('currentPosition') – 1;
            return get('questionnaire').steps().getAt(pos);
        },
        stepCount: function (get) {
            return get('questionnaire').steps().count();
        },
        isIntroduction: function (get) {
            return get('currentPosition') === 0;
        },
        isNotLastStep: function (get) {
            return get('currentPosition') < get('stepCount') + 1;
        },
        isNextEnabled: function (get) {
            // when current step is valid
            var stiv = get('currentStep') ? get('currentStep.valid') :
                true;
            // when not last step
            var last = get('isNotLastStep');
            return stiv && last;
        }
    }
});