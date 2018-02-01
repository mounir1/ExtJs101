Ext.define('Instrumatics.view.web.WebModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.web-web',
    stores: {
        logData: {
            type: 'logentries',
            filters: [{
                    property: 'startDate',
                    value: '{currentStartDate}'
                },
                {
                    property: 'endDate',
                    value: '{currentEndDate}'
                }
            ]
        },
        logStatistics: {
            type: 'statistics',
            filters: [{
                    property: 'category',
                    value: '{currentCategory}'
                },
                {
                    property: 'startDate',
                    value: '{currentStartDate}'
                }, {
                    property: 'endDate',
                    value: '{currentEndDate}'
                }
            ]
        },
        categories: {
            fields: ['text', 'value'],
            data: [{
                text: 'Browser',
                value: 'browser'
            }, {
                text: 'Location',
                value: 'location'
            }, {
                text: 'Device Type',
                value: 'device'
            }]
        }
    },
    data: {
        currentCategory: '',
        currentStartDate: null,
        currentEndDate: null
    }
});