Ext.define('Postcard.view.composer.Composer', {
    extend: 'Ext.form.Panel',
    xtype: 'composer',
    cls: 'composer',
    viewModel: 'composer',
    controller: 'composer',
    session: true,
    items: [{
            xtype: 'hiddenfield',
            bind: '{newMessage.parentId}'
        },
        {
            fieldLabel: 'To',
            xtype: 'combo',
            width: '100%',
            valueField: 'e-mail',
            displayField: 'e-mail',
            queryMode: 'local',
            bind: {
                hidden: '{newMessage.parentId}',
                store: '{contacts}',
                value: '{newMessage.people}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Subject',
            cls: 'subject',
            emptyText: 'Subject',
            bind: {
                value: '{newMessage.subject}',
                hidden: '{newMessage.parentId}'
            },
            width: '100%'
        },
        {
            xtype: 'htmleditor',
            bind: {
                value: '{newMessage.body}'
            }
        }
    ],
    bbar: [
        '->',
        {
            xtype: 'button',
            text: 'Send'
        }
    ]
});