Ext.define('Todo.view.Grid', {
    extend: 'Ext.Panel',
    alias: 'widget.mygridpanel',
    xtype: 'maingrid',
    width:'100%',
    requires: [
        'Todo.view.GridController',
        'Todo.view.GridModel'
    ],

    viewModel: {
        type: 'mygridpanel_model'
    },

    controller: 'mygridpanel_controller',
    title: 'Add Users',

    bind: {
        store: '{Names}'
    },

    listeners: {
        edit: 'onUpdate'
    },

    columns: [{
        xtype: 'gridcolumn',
        width: 100,
        dataIndex: 'first_name',
        text: 'First Name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'last_name',
        width: 150,
        text: 'Last Name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'gridcolumn',
        width: 150,
        dataIndex: 'phone_number',
        text: 'Phone Number',
        editor: { xtype: 'textfield' }
    }, {
        xtype: 'actioncolumn',
        width: 90,
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
        dock: 'top',
        items: [{
            xtype: 'form',
            reference: 'name_form',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                labelWidth: 120
            },
            items:
                [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'First Name',
                        allowBlank: false,
                        labelStyle:'text-align:right;border:solid 1px blue;white-space: pre-wrap;',
                        margin: '0,0,0,10',
                        name: 'first_name'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Last Name',
                        allowBlank: false,
                        labelStyle:'text-align:right;border:solid 1px blue;white-space: pre-wrap;',
                        margin: '0,0,0,10', 
                        name: 'last_name'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Phone Number',
                        allowBlank: false,
                        labelStyle:'text-align:right;border:solid 1px blue;white-space: pre-wrap;',
                        margin: '0,0,0,10',
                        name: 'phone_number'
                    }
                ]
        }, {
            xtype: 'button',
            text: 'Add User',
            handler: 'onAdd'
        }
    ]
    }],

    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 1
    }]
});
