Ext.define('Wizard.view.wizard.Navigation', {
    extend: 'Ext.Toolbar',
    xtype: 'wizard-navigation',
    items: [{
            text: 'Restart',
            itemId: 'restart',
            bind: {
                disabled: '{isIntroduction}'
            }
        },
        {
            text: 'Previous',
            itemId: 'prev',
            bind: {
                disabled: '{isIntroduction}'
            }
        },
        '->',
        {
            text: 'Next',
            itemId: 'next',
            bind: {
                disabled: '{!isNextEnabled}'
            }
        },
        {
            text: 'Finish',
            itemId: 'finish',
            bind: {
                disabled: '{isNotLastStep}'
            }
        }
    ]
});