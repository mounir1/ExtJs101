Ext.define('ArchitectureCms.store.Pages', {
    extend: 'Ext.data.TreeStore',
    model: 'ArchitectureCms.model.Page',
    alias: 'store.pages',
    root: {
        expanded: true,
        children: [{
                text: "Page 1",
                published: true,
                stub: "our-work",
                body: "OurWork.",
                id: "5e30c0a3-729a-4719-a17f-7e2286576bda"
            },
            {
                text: 'homework',
                expanded: true,
                children: [{
                        text: 'book report',
                        leaf: true
                    },
                    {
                        text: 'algebra',
                        leaf: true
                    }
                ]
            },
            {
                text: 'buy lottery tickets',
                leaf: true
            }
        ]
    }
});