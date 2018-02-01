Ext.define('Instrumatics.ux.chart.LiveRequestChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'live-request-chart',
    redrawCounter: 0,
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
        step: [Ext.Date.SECOND, 1],
        fields: ['time'],
        dateFormat: 'H:i:s',
        fromDate: new Date(new Date().setMinutes(new Date().getMinutes() - 1)).setSeconds(0),
        toDate: new Date(new Date().setMinutes(new Date().getMinutes() + 5)).setSeconds(0)
    }],
    series: {
        type: 'line',
        xField: 'time',
        yField: 'value',
        style: {
            'stroke-width': 2
        }
    },
    constructor: function () {
        this.callParent(arguments);
        this.on('redraw', this.onRedraw, this);
    },
    onRedraw: function () {
        this.redrawCounter++;
        if (this.redrawCounter > 15) {
            this.redrawCounter = 0;
            var timeAxis = this.getAxes()[1],
                oldFrom = new Date(timeAxis.getFromDate()),
                oldTo = new Date(timeAxis.getToDate()),
                newFrom = Ext.Date.add(oldFrom, Ext.Date.SECOND,
                    15),
                newTo = Ext.Date.add(oldTo, Ext.Date.SECOND, 15);
            timeAxis.setFromDate(newFrom);
            timeAxis.setToDate(newTo);
        }
    }
});