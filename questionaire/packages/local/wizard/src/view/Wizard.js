Ext.define('Wizard.view.wizard.Wizard', {
    extend: 'Ext.Panel',
    xtype: 'wizard',
    requires: [
        'Wizard.model.Questionnaire',
        'Wizard.model.Step', 'Wizard.model.Question'
    ],
    ui: 'wizard',
    bodyCls: 'wizard-body',
    viewModel: 'wizard',
    controller: 'wizard',
    layout: 'card',
    config: {
        questionnaire: null
    },
    bind: {
        questionnaire: '{questionnaire}',
        activeItem: '{currentPosition}',
        title: '{questionnaire.title}'
    },
    applyQuestionnaire: function (questionnaire) {
        if (!questionnaire) {
            return;
        }
        var intro = questionnaire.get('introduction'),
            conclusion = questionnaire.get('conclusion');
        this.add({
            html: intro
        });
        questionnaire.steps().each(this.addStepPane, this);
        this.add({
            html: conclusion
        });
        return questionnaire;
    },
    setActiveItem: function () {
        if (this.items.length > 0) {
            this.callParent(arguments);
        }
    },
    addStepPane: function (step, i) {
        this.add({
            xtype: 'wizard-step',
            viewModel: {
                data: {
                    step: step
                }
            },
            bind: {
                step: '{step}'
            }
        });
    },
    load: function (id) {
        this.getViewModel().setLinks({
            questionnaire: {
                type: 'Wizard.model.Questionnaire',
                id: 1
            }
        });
    },
    dockedItems: [{
            xtype: 'wizard-navigation',
            dock: 'bottom'
        },
        {
            xtype: 'wizard-progress',
            dock: 'bottom',
            bind: '{questionnaire.steps}'
        }
    ]
});