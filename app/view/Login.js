/*
 * File: app/view/Login.js
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

Ext.define('MyApp.view.Login', {
    extend: 'Ext.Container',
    alias: 'widget.login',

    config: {
        cls: 'login-view',
        layout: {
            align: 'center',
            pack: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',
                docked: 'top',
                height: '40%',
                itemId: 'mycontainer',
                margin: '0 0 30 0',
                style: 'background: #8fced6',
                width: '100%',
                items: [
                    {
                        xtype: 'component',
                        centered: true,
                        cls: 'mobile-logo'
                    }
                ]
            },
            {
                xtype: 'label',
                docked: 'top',
                html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco',
                margin: '-10 40 -20 40',
                style: 'text-align: center;\r\ncolor: #555555;\r\nfont-size: 12px;'
            },
            {
                xtype: 'button',
                cls: 'signup-btn',
                itemId: 'signup',
                text: ''
            },
            {
                xtype: 'button',
                cls: 'login-btn',
                itemId: 'signin',
                margin: '10 0 0 0',
                text: ''
            }
        ],
        listeners: [
            {
                fn: 'onSigninTap',
                event: 'tap',
                delegate: '#signin'
            }
        ]
    },

    onSigninTap: function(button, e, eOpts) {

    }

});