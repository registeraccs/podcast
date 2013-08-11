/*
 * File: app/view/Unplayed.js
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

Ext.define('MyApp.view.Unplayed', {
    extend: 'Ext.Container',
    alias: 'widget.unplayed',

    config: {
        itemId: 'unplayedview',
        layout: {
            type: 'fit'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'list',
                scrollable: 'vertical',
                itemTpl: [
                    '<img class="photo shadow" src="{photo_url}" width="80" height="80"/>',
                    '<div class="list-info">',
                    '	<div class="podcast-name">{name}</div>',
                    '    <tpl if="type == \'music\'">',
                    '        <div class="music-box">',
                    '            <span class="music-icon-unplayed"></span><span class="music-date">{date}</span>',
                    '        </div>',
                    '    <tpl else>',
                    '        <div class="video-box">',
                    '            <span class="video-icon-grey"></span><span class="video-date">{date}</span>',
                    '        </div>',
                    '    </tpl>',
                    '</div>',
                    ''
                ],
                store: 'UnplayedStore',
                itemHeight: 90
            }
        ]
    }

});