/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('desktopTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'runner', this);
    },

    updateConsole: function(){
        console.log(Ext.Date.format(new Date(), 'g:i:s A'));
    },

    runner: function(){
        var taskrunner = new Ext.util.TaskRunner();
        taskrunner.start({
            run: this.updateConsole,
            interval: 1000
        });
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
