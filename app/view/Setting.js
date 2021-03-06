/*
 * File: app/view/Setting.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Setting', {
    extend: 'Ext.Container',
    alias: 'widget.setting',

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                style: 'border:none',
                items: [
                    {
                        xtype: 'label',
                        html: 'E-mail Notifications',
                        style: 'color: #000'
                    }
                ]
            },
            {
                xtype: 'togglefield',
                label: 'Daily Mail Digest',
                labelWidth: '60%'
            },
            {
                xtype: 'button',
                height: 40,
                itemId: 'mybutton5',
                margin: '20 30',
                style: 'color: #8fced6;\r\nbackground: #fff;\r\nborder:none;\r\nfont-size: 14px;',
                text: 'Log Out'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton5Tap',
                event: 'tap',
                delegate: '#mybutton5'
            }
        ]
    },

    onMybutton5Tap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem({
            xtype: 'login'
        });
    }

});