/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'New.Application',

    name: 'New',

    requires: [
        // This will automatically load all classes in the New namespace
        // so that application classes do not need to require each other.
        'New.*'
    ],

    // The name of the initial view to create.
    mainView: 'New.view.main.Main'
});
