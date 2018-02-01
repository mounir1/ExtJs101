Ext.define('ArchitectureCms.view.main.PageModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.page',
    requires: ['ArchitectureCms.store.Pages'],

    stores: {
        pages: {
            type: 'pages',
            session: true
        }
    },
    formulas: {
        isUnsavedPage: function (get) {
            return get('page.id').toString().indexOf('Unsaved-') >  -1;
        }
    }
});