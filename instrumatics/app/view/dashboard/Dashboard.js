Ext.define('Instrumatics.view.dashboard.Dashboard', {
    extend: "Ext.panel.Panel",
    xtype: 'dashboard',
    title: 'hello',
    requires: [
        'Instrumatics.ux.chart.LiveRequestChart',
        'Instrumatics.ux.chart.HistoricalRequestChart'
    ],
    viewModel: {
        type: 'dashboard-dashboard'
    },
    controller: 'dashboard-dashboard',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                    xtype: 'live-request-chart',
                    title: 'Live Web Requests',
                    bind: '{webLogs}',
                    series: {
                        style: {
                            'stroke': 'red'
                        }
                    },
                    margin: '10 5 0 10',
                    flex: 1
                },
                {
                    xtype: 'live-request-chart',
                    title: 'Live SQL Requests',
                    bind: '{sqlLogs}',
                    series: {
                        style: {
                            'stroke': 'green'
                        }
                    },
                    margin: '10 10 0 5',
                    flex: 1
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                    xtype: 'historical-request-chart',
                    title: 'Last 30 Days',
                    bind: '{historicalWebLogs}',
                    series: {
                        style: {
                            'stroke': 'red'
                        }
                    },
                    margin: '10 5 10 10',
                    flex: 1
                },
                {
                    xtype: 'historical-request-chart',
                    title: 'Last 30 Days',
                    bind: '{historicalSqlLogs}',
                    series: {
                        style: {
                            'stroke': 'green'
                        }
                    },
                    margin: '10 10 10 5',
                    flex: 1
                }
            ]
        }
    ]

});