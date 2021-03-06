/*
 * File: app/view/Episode.js
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

Ext.define('MyApp.view.Episode', {
    extend: 'Ext.Container',
    alias: 'widget.episode',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                docked: 'top',
                height: 90,
                style: 'background: #8fced6',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'label',
                        flex: 1,
                        itemId: 'episode_title',
                        margin: '10 10 0 10',
                        style: 'font-size: 14px; font-weight: bold;'
                    },
                    {
                        xtype: 'component',
                        flex: 1,
                        itemId: 'episode_info',
                        margin: '0 10 0 10',
                        tpl: [
                            '<tpl if="episode_type === 0">',
                            '    <div class="music-toal-white">{episode_duration}</div><div class="calendar-white">{episode_date:date("m.d.Y")}</div>',
                            '<tpl else>',
                            '    <div class="video-toal-white">{episode_duration}</div><div class="calendar-white">{episode_date:date("m.d.Y")}</div>',
                            '</tpl>',
                            ''
                        ]
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnmark',
                        margin: '0 10 10 10',
                        style: 'color: #8fced6;\r\nbackground: #fff;\r\nborder:none;\r\nfont-size: 14px;',
                        ui: 'action',
                        text: 'Mark as Played'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '100%',
                itemId: 'episode_des',
                padding: '10 10 0 10',
                style: 'color: #555555;\r\nfont-size: 12px;',
                layout: {
                    type: 'fit'
                },
                scrollable: true
            }
        ],
        listeners: [
            {
                fn: 'onBtnmarkTap',
                event: 'tap',
                delegate: '#btnmark'
            }
        ]
    },

    onBtnmarkTap: function(button, e, eOpts) {
        alert('chit di');
    }

});