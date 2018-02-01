Ext.define('Instrumatics.ux.chart.HistoricalRequestChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'historical-request-chart',
    frame: true,
    axes: [{
        type: 'numeric',
        position: 'left',
        fields: ['value'],
        title: {
            text: 'Avg. Response \nTime (ms)',
            fontSize: 15
        },
        grid: true,
        minimum: 0,
        maximum: 20
    }, {
        type: 'time',
        position: 'bottom',
        fields: ['time'],
        dateFormat: 'd M',
        style: {
            axisLine: false
        }
    }],
    series: {
        type: 'line',
        xField: 'time',
        yField: 'value',
        style: {
            'stroke': 'red'
        }
    }
});