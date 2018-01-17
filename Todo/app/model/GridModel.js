Ext.define('Fiddle.view.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mygridpanel_model',

    requires: [
        'Fiddle.model.User'
    ],

    stores: {
        Names: {
            autoLoad: true,
            model: 'Fiddle.model.User'
        }
    }
});
