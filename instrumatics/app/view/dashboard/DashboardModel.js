Ext.define('Instrumatics.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard-dashboard',
    stores: {
        webLogs: {
            type: 'logstream',
            filters: [{
                property: 'type',
                value: 'web'
            }]
        },
        sqlLogs: {
            type: 'logstream',
            filters: [{
                property: 'type',
                value: 'sql'
            }]
        },
        historicalWebLogs: {
            type: 'logentries',
            filters: [{
                property: 'type',
                value: 'web'
            }]
        },
        historicalSqlLogs: {
            type: 'logentries',
            filters: [{
                property: 'type',
                value: 'sql'
            }]
        }
    }
});