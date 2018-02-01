Ext.define('Postcard.view.header.HomeButton', {
    extend: 'Ext.Container',
    xtype: 'home-button',
    afterRender: function () {
        this.callParent(arguments);
        this.getEl().on('click', function () {
            this.fireEvent('click');
        }, this);
    }
});