Ext.define('desktopTest.view.form.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',

    showForm: function () {
        console.log("Bientot un formulaire !!! ")
    },

    selectAll: function () {
        Ext.getCmp('check1').setValue(true);
        Ext.getCmp('check2').setValue(true);
        Ext.getCmp('check3').setValue(true);
    },

    deselectAll: function () {
        Ext.getCmp('check1').setValue(false);
        Ext.getCmp('check2').setValue(false);
        Ext.getCmp('check3').setValue(false);
    },

    selectBearnaise: function () {
        var DomHelper = Ext.DomHelper;
        var listItems = {
            id: 'dhList',
            tag: 'ul',
            children: [
                {
                    tag: 'li',
                    html: 'Frites'
                },
                {
                    tag: 'li',
                    html: 'Salade'
                },
                {
                    tag: 'li',
                    html: 'Soupe'
                }
            ]
        }
        DomHelper.append('fieldset-1026', listItems);
    },

    onRegister: function (btn) {
        var form = btn.up('form');
    }
})