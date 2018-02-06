Ext.define('Todo.view.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mygridpanel_model',

    requires: [
        'Todo.model.User'
    ],

    stores: {
        Names: {
            autoLoad: true,
            model: 'Todo.model.User'
        }
    }
});
