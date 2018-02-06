Ext.define('Postcard.view.messages.Messages', {
    extend: 'Ext.panel.Panel',
    xtype: 'messages',
    controller: 'messages',
    viewModel: 'messages',
    autoScroll: true,
    session: true,
    bbar: [{
            xtype: 'combobox',
            displayField: 'name',
            idField: 'name',
            reference: 'tagPicker',
            queryMode: 'local',
            value: 'Inbox',
            bind: {
                store: '{tags}'
            }
        },
        {
            text: 'Set Tag',
            itemId: 'setTag'
        },
        '->',
        {
            text: 'Reply',
            itemId: 'reply',
            reference: 'replyButton'
        }
    ],
    items: [{
        xtype: 'dataview',
        bind: '{messages}',
        flex: 1,
        cls: 'message-view',
        tpl: new Ext.XTemplate('<tpl for=".">',
            '<div class="message">',
            '<div class="date">{date:date("H:m")}</div>',
            '<div class="details">',
            '<tpl if="xindex == 1">',
            '<div class="header">{people} - { subject  } < /div>',
            '</tpl>',
            '<div class="body">{body}</div>',
            '</div>',
            '</div>',
            '</tpl>'),
        itemSelector: '.message'
    }]
});