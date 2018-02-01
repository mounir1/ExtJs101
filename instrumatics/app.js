/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Instrumatics.Application',

    name: 'Instrumatics',

    requires: [
        // This will automatically load all classes in the Instrumatics namespace
        // so that application classes do not need to require each other.
        'Instrumatics.*'
    ],

    // The name of the initial view to create.
    mainView: 'Instrumatics.view.main.Main'
});
