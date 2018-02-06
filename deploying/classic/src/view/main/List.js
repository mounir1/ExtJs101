/**
 * This view is an example list of people.
 */
Ext.define('New.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',


    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Address', dataIndex: 'address', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
