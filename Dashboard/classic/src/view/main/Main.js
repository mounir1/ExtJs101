
Ext.define('New.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'New.view.main.MainController',
        'New.view.main.MainModel',
        'New.view.main.List',
        'Todo.view.login.Login',
        'Todo.view.Grid',
        'Todo.view.form.Main',
        'Todo.view.form.PopupForm',
        'Todo.view.dash.Dashboard'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
            title: 'Home',
            iconCls: 'fa-home',
            items: [{
                xtype: 'mainlist'
            }]
        },
        {
            title: 'Users',
            iconCls: 'fa-user',
            items: [{
                xtype: 'maingrid'
            }]
        },
        {
            title: 'Employees',
            xtype: 'tabpanel',
            iconCls: 'x-fa fa-users',

        },
         {
            title: 'Login',
            xtype: 'login',
            iconCls: 'x-fa fa-users',

        },
        {
            title: 'Developer',
            iconCls: 'fa-code',
            xtype: 'container',
            layout: 'border',
            items: [{
                xtype: 'panel',
                region: 'west',
                title: 'Navigation',
                width: 200,
                split: 2
            }, {
                xtype: 'simple-dash',
                region: 'center'
            }]
        }
    ]
});
