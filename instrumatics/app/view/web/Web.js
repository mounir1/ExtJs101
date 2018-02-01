Ext.define('Instrumatics.view.web.Web', {
    extend: 'Ext.panel.Panel',
    xtype: 'web-logs',
    viewModel: {
        type: 'web-web'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
            header: {
                title: 'Web Requests',
                items: [{
                        xtype: 'datefield',
                        fieldLabel: 'From',
                        labelAlign: 'right',
                        bind: '{currentStartDate}'
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'To',
                        labelAlign: 'right',
                        bind: '{currentEndDate}',
                        labelWidth: 30
                    }, {
                        xtype: 'button',
                        text: 'Refresh',
                        margin: '0 0 0 10 '
                    }
                ]
            },
            margin: 10,
            xtype: 'historical-request-chart',
            bind: '{logData}',
            flex: 1
        },
        {
            xtype: 'grid',
            margin: 10,
            hideHeaders: true,
            viewConfig: {
                trackOver: false
            },
            disableSelection: true,
            header: {
                title: 'Breakdown',
                items: [{
                    xtype: 'combo',
                    labelAlign: 'right',
                    labelWidth: 60,
                    fieldLabel: 'Category',
                    bind: {
                        store: '{categories}',
                        value: '{currentCategory}'
                    },
                    queryMode: 'local',
                    editable: false,
                    forceSelection: true,
                    displayField: 'text',
                    valueField: 'value'
                }]
            },
            bind: '{logStatistics}',
            flex: 1,
            width: '100%',
            columns: [{
                    name: 'Label',
                    dataIndex: 'label',
                    flex: 1
                },
                {
                    name: 'Percentage',
                    dataIndex: 'percentage',
                    flex: 1
                }
            ]
        }
    ]
});