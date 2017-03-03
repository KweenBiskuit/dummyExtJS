Ext.define('desktopTest.view.main.Lab', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlab',
    controller: 'form',

    frame: true,
    title: 'A wonderful form',
    bodyPadding: 15,
    scrollable: true,
    width: 500,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
            xtype: 'fieldset',
            title: 'User Info',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                    allowBlank: false,
                    fieldLabel: 'Prénom',
                    name: 'prenom',
                    emptyText: 'Saisir votre prénom'
                },
                {
                    allowBlank: false,
                    fieldLabel: 'Nom',
                    name: 'nom',
                    emptyText: 'Saisir votre nom'
                },
                {
                    allowBlank: false,
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype: 'email',
                    emptyText: 'Saisir votre email'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Other stuff',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'Yo',
                emptyText: 'yo broh',
                name: 'yo'
            }]
        },
        {
            xtype: 'fieldset',
            title: 'Checkbox',
            defaultType: 'checkboxfield',
            items: [{
                boxLabel: 'Sauce tartare',
                name: 'tartare',
                inputValue: '1',
                id: 'check1'
            },
            {
                boxLabel: 'Béarnaise',
                name: 'bearnaise',
                inputValue: '2',
                id: 'check2'
            },
            {
                boxLabel: 'Andalouse',
                name: 'andalouse',
                inputValue: '3',
                id: 'check3'
            }]
        }
    ],
    bbar: [
        {
            text: 'Select Béarnaise',
            handler: 'selectBearnaise'
        },{
            text: 'Tout sélectionner',
            handler: 'selectAll'
        },
        {
            text: 'Deselect All',
            handler: 'deselectAll'
        }
    ],

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true,
        handler: 'onRegister'
    }]
});