/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('New.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ExtJS101',

        Users: 'Users here',
    
        Groups:'Groups here ',

        Settings:' Settings here ..',

        introText: 'Welcome to the Command-free MVVM application! <br/><input onclick="alert("this is a simple javascript alert")" type="button" value="Click">',

        buttonText: 'Click Me!',

        mounir:' '
 
    }

    //TODO - add data, formulas and/or methods to support your view
});