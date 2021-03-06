Ext.define('Alcohology.view.header.AccountIndicator', {
    extend: 'Alcohology.ux.ClickContainer',
    xtype: 'account-indicator',
    cls: 'account-indicator',
    config: {
        user: null
    },
    defaultBindProperty: 'user',
    data: {
        label: 'Login'
    },
    tpl: '<span style="font-family:FontAwesome;">&#xf007;</span>',
    applyUser: function (user) {
        if (user) {
            this.setData({
                label: user.email
            });
        }
    }
});