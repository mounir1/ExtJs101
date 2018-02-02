/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'questionaire.Application',

    name: 'questionaire',

    requires: [
        // This will automatically load all classes in the questionaire namespace
        // so that application classes do not need to require each other.
        'questionaire.*'
    ],

    // The name of the initial view to create.
    mainView: 'questionaire.view.main.Main'
});
