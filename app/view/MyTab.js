/*
 * File: app/view/MyTab.js
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

Ext.define('MyApp.view.MyTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mytab',

    requires: [
        'MyApp.view.Podcast',
        'MyApp.view.Category',
        'MyApp.view.Setting'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            itemId: 'mytabbar',
            style: 'background: #fff;border:none;',
            layout: {
                align: 'center',
                pack: 'center',
                type: 'hbox'
            }
        },
        items: [
            {
                xtype: 'podcast',
                itemId: 'podcast',
                iconCls: 'music'
            },
            {
                xtype: 'category',
                itemId: 'category',
                iconCls: 'list'
            },
            {
                xtype: 'setting',
                itemId: 'setting',
                title: '',
                iconCls: 'settings'
            }
        ],
        listeners: [
            {
                fn: 'onContainerActivate',
                event: 'activate',
                delegate: '#category'
            },
            {
                fn: 'onContainerDeactivate',
                event: 'deactivate',
                delegate: '#category'
            },
            {
                fn: 'onContainerActivate1',
                event: 'activate',
                delegate: '#setting'
            },
            {
                fn: 'onContainerDeactivate1',
                event: 'deactivate',
                delegate: '#setting'
            }
        ]
    },

    onContainerActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var nav = Ext.ComponentQuery.query('#nav')[0];
        nav.getNavigationBar().setTitle('Library');

        var store = Ext.StoreMgr.lookup('CategoryStore');
        store.load();
    },

    onContainerDeactivate: function(oldActiveItem, container, newActiveItem, eOpts) {
        var nav = Ext.ComponentQuery.query('#nav')[0];
        nav.getNavigationBar().setTitle('My Podcast');
    },

    onContainerActivate1: function(newActiveItem, container, oldActiveItem, eOpts) {
        var nav = Ext.ComponentQuery.query('#nav')[0];
        nav.getNavigationBar().setTitle('Setting');
    },

    onContainerDeactivate1: function(oldActiveItem, container, newActiveItem, eOpts) {
        var nav = Ext.ComponentQuery.query('#nav')[0];
        nav.getNavigationBar().setTitle('My Podcast');
    }

});