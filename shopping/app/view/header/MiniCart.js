Ext.define('Alcohology.view.header.MiniCart', {
    extend: 'Alcohology.ux.ClickContainer',
    xtype: 'minicart',
    cls: 'mini-cart',
    tpl: new Ext.Template('<span style="fontfamily:FontAwesome;"> &#xf217;</span> {count} items')
});