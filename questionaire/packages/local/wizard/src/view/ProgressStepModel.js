Ext.define('Wizard.view.wizard.ProgressStepModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.progress-step',
    data: {
        question: null
    },
    formulas: {
        isValid: {
            bind: {
                bindTo: '{question}',
                deep: true
            },
            get: function () {
                return this.get('step').isValid();
            }
        }
    }
});