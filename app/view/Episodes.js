/*
 * File: app/view/Episodes.js
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

Ext.define('MyApp.view.Episodes', {
    extend: 'Ext.Container',
    alias: 'widget.episodes',

    config: {
        itemId: 'episodes',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                style: 'border: none;\r\nbackground: #8fced6;',
                items: [
                    {
                        xtype: 'label',
                        itemId: 'podcastname',
                        style: 'color: #000;\r\nfont-size: 14px;',
                        ui: ''
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnsubscribe',
                        style: 'background: #fff;\r\ncolor: #8fced6;\r\nborder: none;',
                        text: 'Subscribe'
                    }
                ]
            },
            {
                xtype: 'list',
                docked: 'top',
                height: '100%',
                itemId: 'mylist2',
                style: 'font-size: 12px',
                scrollable: true,
                itemTpl: [
                    '<tpl if="episode_html != \'\'">',
                    '    <div style="min-height: 125px;">{episode_html}</div>',
                    '<tpl else>',
                    '	<img class="photo shadow" src="{episode_thumbnail}" width="60" height="60"/>',
                    '    <div class="list-info">',
                    '        <div class="podcast-name">{episode_name}</div>',
                    '        <tpl if="episode_type == 0">',
                    '            <div class="music-box">',
                    '                <span class="music-icon-unplayed"></span><span class="music-date">{episode_date:date("m.d.Y")}</span>',
                    '            </div>',
                    '        <tpl else>',
                    '            <div class="video-box">',
                    '                <span class="video-icon-grey"></span><span class="video-date">{episode_date:date("m.d.Y")}</span>',
                    '            </div>',
                    '        </tpl>',
                    '    </div>',
                    '</tpl>',
                    '    ',
                    ''
                ],
                store: 'EpisodesStore',
                itemHeight: 70
            }
        ],
        listeners: [
            {
                fn: 'onBtnsubscribeTap',
                event: 'tap',
                delegate: '#btnsubscribe'
            },
            {
                fn: 'onMylist2ItemSwipe',
                event: 'itemswipe',
                delegate: '#mylist2'
            }
        ]
    },

    onBtnsubscribeTap: function(button, e, eOpts) {
        alert('send subscribe');
    },

    onMylist2ItemSwipe: function(dataview, index, target, record, e, eOpts) {
        console.log('test')
    }

});