/*
 * File: app/view/Category.js
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

Ext.define('MyApp.view.Category', {
    extend: 'Ext.Container',
    alias: 'widget.category',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                itemId: 'categorylist',
                scrollable: true,
                itemTpl: [
                    '<div class="list-info">',
                    '	<div class="podcast-name">{category_name}</div>',
                    '</div>',
                    ''
                ],
                store: 'CategoryStore',
                itemHeight: 70
            }
        ],
        listeners: [
            {
                fn: 'onMylist4ItemTap',
                event: 'itemtap',
                delegate: '#categorylist'
            }
        ]
    },

    onMylist4ItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this;
        //get Podcast
        var store = Ext.StoreMgr.lookup('LibraryStore');
        proxy= store.getProxy();
        proxy.setExtraParam('category_id', record.get('category_id') );
        store.load();

        //load view
        var me = this;
        var nav = Ext.ComponentQuery.query('#nav')[0];
        nav.push({
            xtype: 'library',
            title: 'Podcasts Library'
        });
    }

});