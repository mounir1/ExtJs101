/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('New.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'New.view.main.MainController',
        'New.view.main.MainModel',
        'New.view.main.List'    
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
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            title: 'Users',
            iconCls: 'fa-user',
            bind: {
                html: '{Users}'
            }
        }, {
            title: 'Groups',
            iconCls: 'fa-users',
            bind: {
                html: '{Groups}'
            }
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            bind: {
                html: '{Settings}'
            }
        }, {
            title: 'Component',
            xtype: 'component',
            iconCls: 'fa-twitter',
            bind: {
                html: '{introText}'
            }
        },
        {
            title: 'Button',
            xtype: 'button',
            iconCls: 'fa-google',
            bind: {
                text: '{buttonText}',
                handler: 'onClickButton'
            }
        },
        {
            title: 'Developer', 
            iconCls: 'fa-university', 
            bind: {
                html: '{mounir}' 
            }
        }
    ]
});