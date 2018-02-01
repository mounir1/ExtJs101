/**
 * This view is an example list of people.
 */
Ext.define('New.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: ['New.store.Personnel'],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    },
    {
        text: 'Address',
        dataIndex: 'address',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});