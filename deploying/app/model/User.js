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
            read : '/resources/db.json',
            create : 'http://locahost:1841/resources/create',
            update : 'http://locahost:1841/resources/update',
            destroy : 'http://locahost:1841/resources/destroy'
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