/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('New.view.main.MainController', {
    extend: 'Ext.app.ViewController', 
    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.alert('Confirm', 'Are you sure?');
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Alert Box', 'onConfirm', this);

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            alert('Good Bye');
        }
    }
});