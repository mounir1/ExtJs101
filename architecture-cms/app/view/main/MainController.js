Ext.define('ArchitectureCms.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: ['ArchitectureCms.model.Page'],
    init: function () {
        this.listen({
            component: {
                'treepanel': {
                    'select': 'onPageSelect'
                },
                'page-detail #save': {
                    click: 'onSaveClick'
                },
                'page-detail #addChild': {
                    click: 'onAddClick'
                },
                'page-detail #delete': {
                    click: 'onDeleteClick'
                }
            }
        });
    },
    onPageSelect: function (tree, model) {
        this.getViewModel().setLinks({
            currentPage: {
                type: 'Page',
                id: model.getId()
            }
        });
    },
    onAddClick: function () {
        var me = this;
        Ext.Msg.prompt('Add Page', 'Page Label', function (action,
            value) {
            if (action === 'ok') {
                var session = me.getSession(),
                    selectedPage = viewModel.get('currentPage'),
                    tree = me.lookupReference('tree');
                var newPage = session.createRecord('Page', {
                    label: value,
                    text: value,
                    leaf: true
                });
                selectedPage.insertChild(0, newPage);
                tree.setSelection(newPage);
                tree.expandNode(selectedPage);
            }
        });
    },
    onDeleteClick: function () {
        var me = this;
        Ext.Msg.confirm('Warning', 'Are you sure you would like to delete this record ? ', function (btn) {
            if (btn === 'yes') {
                me.getViewModel().get('currentPage').erase();
                me.getViewModel().set('currentPage', null);
                Ext.toast('Page deleted');
            }
        }, this)
    },
    onSaveClick: function () {
        this.getViewModel().get('currentPage').save();
        Ext.toast('Page saved');
    }
});