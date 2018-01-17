Ext.define('ArchitectureCms.view.main.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'page-detail',
    defaultType: 'textfield',
    bodyPadding: 10,
    hidden: true,
    bind: {
        hidden: '{!currentPage}'
    },
    items: [{
            xtype: 'container',
            cls: 'ct-alert',
            html: 'This record is unsaved!',
            bind: {
                hidden: ' { !isUnsavedPage  } '
            }
        }, {
            fieldLabel: 'Id',
            bind: '{currentPage.id}',
            xtype: 'displayfield'
        },
        {
            fieldLabel: 'Published',
            bind: '{currentPage.published}',
            xtype: 'checkboxfield'
        },
        {
            fieldLabel: 'Label',
            bind: '{currentPage.text}'
        },
        {
            fieldLabel: 'URL Stub',
            bind: '{currentPage.stub}'
        },
        {
            fieldLabel: 'Body',
            bind: {
                value: '{currentPage.body}'
            },
            xtype: 'htmleditor'
        }
    ],
    bbar: [{
            text: 'Save',
            itemId: 'save'
        },
        {
            text: 'Add Child Page',
            itemId: 'addChild'
        },
        {
            text: 'Delete',
            itemId: 'delete'
        }
    ]
});