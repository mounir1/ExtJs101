Ext.define('Postcard.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Postcard.view.composer.Composer',
        'Postcard.view.header.Header',
        'Postcard.view.login.Login',
        'Postcard.view.messages.Messages',
        'Postcard.view.threads.Threads'
    ],
    plugins: ['viewport', 'responsive'],
    controller: 'main',
    viewModel: 'main',
    session: true,
    responsiveConfig: {
        'tall': {
            layout: {
                type: 'card'
            }
        },
        'wide': {
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        }
    },
    dockedItems: [{
            xtype: 'app-header'
        },
        {
            dock: 'bottom',
            xtype: 'button',
            cls: 'logout',
            overCls: '',
            focusCls: '',
            text: 'Logout'
        }
    ],
    items: [{
            xtype: 'threads',
            flex: 1
        },
        {
            xtype: 'container',
            flex: 1,
            defaults: {
                hidden: true
            },
            items: [{
                    xtype: 'messages'
                },
                {
                    xtype: 'composer'
                }
            ]
        }
    ],
    isCard: function () {
        return this.getLayout().type === 'card';
    }
});