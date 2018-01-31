Ext.define('Postcard.controller.Root', {
    extend: 'Ext.app.Controller',
    routes: {
        'home': 'onHome',
        '': 'checkLogin'
    },
    onLaunch: function () {
        this.checkLogin();
    },
    checkLogin: function () {
        if (!window.localStorage.getItem('loggedin')) {
            this.loginWindow =  Ext.create('Postcard.view.login.Login');
        } else {
            Ext.create('Postcard.view.main.Main');
        }
    },
    onHome: function () {
        if (this.loginWindow) {
            this.loginWindow.destroy();
        }
        this.checkLogin();
    }
});