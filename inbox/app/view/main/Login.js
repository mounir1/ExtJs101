Ext.define('inbox.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-window',
    title: 'Login to Inbox',
    closable: false,
    autoShow: true,
    controller: 'login',
    viewModel: 'login',
    items: [{
        xtype: 'textfield',
        name: 'e-mail',
        bind: '{login.e-mail}',
        fieldLabel: 'E-mail',
        allowBlank: false
    }, {
        xtype: 'textfield',
        bind: '{login.password}',
        inputType: 'password',
        fieldLabel: 'Password', allowBlank: false
    }, {
        xtype: 'checkbox',
        bind: '{login.rememberMe}',
        fieldLabel: 'Remember Me?'
    }],
    buttons: [{ text: 'Login' }]
});