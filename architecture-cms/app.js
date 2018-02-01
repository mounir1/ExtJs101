/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ArchitectureCms.Application',

    name: 'ArchitectureCms',

    requires: [
        // This will automatically load all classes in the ArchitectureCms namespace
        // so that application classes do not need to require each other.
        'ArchitectureCms.*'
    ],

    // The name of the initial view to create.
    mainView: 'ArchitectureCms.view.main.Main'
});
