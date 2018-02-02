Ext.define('New.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'New.model.Personnel',

    autoLoad: true,
    data: {
        items: [{
                name: 'Jean Luc',
                email: "jeanluc.picard@enterprise.com",
                phone: "555-111-1111",
                address: "Antalya"
            },
            {
                name: 'Worf',
                email: "worf.moghsson@enterprise.com",
                phone: "555-222-2222",
                address: "Istanbul"
            },
            {
                name: 'Deanna',
                email: "deanna.troi@enterprise.com",
                phone: "555-333-3333",
                address: "Izmir"
            },
            {
                name: 'Data',
                email: "mr.data@enterprise.com",
                phone: "555-444-4444",
                address: "Kocaeli"
            }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    // proxy: {
    //     type: 'ajax',
    //     url:'resources/data.json',
    //     autoload:true,
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }
});