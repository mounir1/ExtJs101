/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('questionaire.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Wizard.view.wizard.Wizard'
    ],
    alias: 'controller.main',
    listen: {
        controller: {
            'wizard': {
                'wizardcomplete': function (q) {
                    console.log(q);
                }
            }
        }
    },
    onClickButton: function () {
        this.wizard = Ext.create('Ext.Window', {
            header: false,
            modal: true,
            layout: 'fit',
            autoShow: true,
            resizable: false,
            width: 800,
            height: 600,
            items: [{
                xtype: 'wizard'
            }],
        });
        Chapter 8
            [221]
        this.wizard.down('wizard').load(1);
    }
});
Wizard/view/wizard/Progress.scss