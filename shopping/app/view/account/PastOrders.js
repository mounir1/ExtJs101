Ext.define('Alcohology.view.account.PastOrders', {
    extend: 'Ext.DataView',
    xtype: 'pastorders',
    tpl: new Ext.XTemplate('<tpl for="."><div class="pastorder">',
        '<h3>Ordered on {date:date("m F Y")}</h3>',
        '<ul><tpl for="items">{name} x {quantity}</tpl></ul>',
        '<p>Total: &pound;{total}</p></div></tpl>'),
    itemSelector: '.fake',
    emptyText: 'No Previous Orders.'
});