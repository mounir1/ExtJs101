Ext.define('Todo.model.User', {
    extend : 'Ext.data.Model',
    fields : [
        {
            type : 'int',
            name : 'id'
        },
        {
            type : 'string',
            name : 'first_name'
        },
        {
            type : 'string',
            name : 'last_name'
        },
        {
            type : 'string',
            name : 'phone_number'
        }
    ],
    proxy : {
        type : 'ajax',
        api : {
            read : 'data1.json',
            create : 'myurl/create',
            update : 'myurl/update',
            destroy : 'myurl/destroy'
        },
        reader : {
            type : 'json',
            rootProperty : 'data'
        },
        writer : {
            type : 'json',
            rootProperty : 'data',
            allowSingle : false
        }
    }
});