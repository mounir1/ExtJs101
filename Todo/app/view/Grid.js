Ext.define('Fiddle.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',
    xtype: 'maingrid',

    requires: [
        'Fiddle.view.GridController',
        'Fiddle.view.GridModel'
    ],

    viewModel: {
        type: 'mygridpanel_model'
    },

    controller: 'mygridpanel_controller',
    title: 'My Grid Panel',

    bind: {
        store: '{Names}'
    },

    listeners: {
        edit: 'onUpdate'
    },

    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'first_name',
        text: 'First Name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'last_name',
        text: 'Last Name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'phone_number',
        text: 'Phone Number',
        editor: { xtype: 'textfield' }
    }, {
        xtype: 'actioncolumn',
        width: 50,
        sortable: true,
        menuDisabled: true,
        align: 'center',
        text: 'Delete',
        items: [{
            icon: 'https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif',
            tooltip: 'Delete Name',
            handler: 'onDelete'
        }]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'form',
            reference: 'name_form',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                labelWidth: 35
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'First Name',
                allowBlank: false,
                name: 'first_name'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                margin: '20 20 20 10',
                allowBlank: false,
                name: 'last_name'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Phone Number',
                margin: '20 20 20 10',
                allowBlank: false,
                name: 'phone_number'
            }]
        }, {
            xtype: 'button',
            text: 'Add Name',
            handler: 'onAdd'
        }]
    }],

    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 1
    }]
});
