Ext.define("Instrumatics.view.sql.Sql", {
    extend: "Instrumatics.view.SubPage",
    xtype: 'sql-logs',
    viewModel: {
        type: "sql-sql"
    },
    chartCfg: {
        title: 'SQL Requests'
    }
});