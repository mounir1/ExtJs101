Ext.define('Todo.chart.Line', {
    extends:'Ext.chart.CartesianChart',
    title: 'Test Chart',
    xtype:'my-chart', 
    width: 700,
    height: 500,
    margin: 5,
    legend: {
        docked: 'bottom'
    },
    store: {
        fields: ['billperiod', 'charges', 'adjustments', 'receipts'],
        data: [{
            billperiod: 'January 2016',
            charges: 234243.33,
            adjustments: 3423434.12,
            receipts: 2342.22
        }, {
            billperiod: 'February 2016',
            charges: 234243.33,
            adjustments: 3423434.12,
            receipts: 2342.22
        }, {
            billperiod: 'March 2016',
            charges: 234243.33,
            adjustments: 3423434.12,
            receipts: 2342.22
        }, {
            billperiod: 'April 2016',
            charges: 234243.33,
            adjustments: 3423434.12,
            receipts: 2342.22
        }, {
            billperiod: 'May 2016',
            charges: 234243.33,
            adjustments: 3423434.12,
            receipts: 2342.22
        }]
    },
    axes: [{
        type: 'numeric',
        title: 'Amount in Dollars',
        fields: ['charges', 'adjustments', 'receipts'],
        position: 'left',
        grid: true
    }, {
        type: 'category',
        title: 'Period By Months',
        position: 'bottom',
        fields: 'billperiod',
        label: {
            rotate: {
                degrees: -45
            }
        },
        grid: true
    }],
    series: [{
        type: 'line',
        title: 'Charges',
        xField: 'billperiod',
        yField: ['charges']
    }, {
        type: 'line',
        title: 'Adjustments',
        xField: 'billperiod',
        yField: ['adjustments']
    }, {
        type: 'line',
        title: 'Receipts',
        xField: 'billperiod',
        yField: ['receipts']
    }]
});