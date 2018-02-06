/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'test.Application',

    name: 'test',

    requires: [
        // This will automatically load all classes in the test namespace
        // so that application classes do not need to require each other.
        'test.*'
    ],

    // The name of the initial view to create.
    mainView: 'test.view.main.Main'
});
