Ext.define('Todo.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    proxy: { 
        type: 'ajax',
        url: 'resources/data.json'
    }
});