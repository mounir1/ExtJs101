Ext.define('Instrumatics.view.main.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Instrumatics.view.dashboard.Dashboard',
        'Instrumatics.view.web.Web',
        'Instrumatics.view.sql.Sql'
    ],
    xtype: 'app-main',
    controller: 'main-main',
    header: {
        title: {
            text: 'Instrumatics',
            padding: 20
        }
    },
    tabPosition: 'left',
    tabRotation: 0,
    items: [{
            xtype: 'dashboard',
            title: 'Dashboard',
            reference: 'dash'
        },
        {
            xtype: 'web-logs',
            title: 'Web',
            reference: 'web'
        },
        {
            xtype: 'sql-logs',
            title: 'SQL',
            reference: 'sql'
        }
    ]
});