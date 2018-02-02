Ext.define('Wizard.view.wizard.Progress', {
    extend: 'Ext.Container',
    xtype: 'wizard-progress',
    config: {
        steps: null
    },
    defaultBindProperty: 'steps',
    defaultType: 'button',
    baseCls: 'wizard-progress',
    layout: {
        type: 'hbox',
        pack: 'center'
    },
    applySteps: function (steps) {
        var lineHtml = '<div class="wizard-progress-bar"></div>',
            stepArr = steps.getData().items,
            items = this.buildProgressIcons(stepArr),
            container;
        this.removeAll();
        items.unshift({
            text: 'Start',
            stepIndex: 0
        });
        items.push({
            text: 'End',
            bind: {
                disabled: '{isNotLastStep}'
            }
        });
        container = this.add({
            xtype: 'container',
            cls: 'wizard-progress-inner',
            defaultType: 'button',
            items: items
        });
        container.getEl().insertHtml('afterBegin', lineHtml);
        return steps;
    },
    buildProgressIcons: function (steps) {
        return Ext.Array.map(steps, function (step, i) {
            return {
                text: i + 1,
                stepIndex: i + 1,
                bind: {
                    disabled: '{!isEnabled}'
                },
                viewModel: {
                    formulas: {
                        isEnabled: function (get) {
                            return get('currentPosition') > i;
                        }
                    }
                }
            };
        });
    }
});