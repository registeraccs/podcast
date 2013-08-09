/*
 * File: app/store/PodcastStore.js
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

Ext.define('MyApp.store.PodcastStore', {
    extend: 'Ext.data.Store',
    alias: 'store.podcaststore',

    config: {
        autoLoad: true,
        data: [
            {
                photo_url: 'http://media2.ak.yelpcdn.com/bpthumb/LPp9JaaGjXYIhIxIIoBI0A/ms',
                name: 'Sunny\'s Bar',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '253 Conover St'
            },
            {
                photo_url: 'http://media3.ak.yelpcdn.com/bpthumb/Tz0vtUWDjb_u-XkrRbv5EA/ms',
                name: 'Duff\'s Brooklyn',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '168 Marcy Ave'
            },
            {
                photo_url: 'http://media4.ak.yelpcdn.com/bpthumb/wv7XY2ENy4HD6ZufRCnXvA/ms',
                name: 'Vin Sur Vingt',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '201 W 11th St'
            },
            {
                photo_url: 'http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms',
                name: 'Lucky 13 Saloon',
                rating_img_url_small: 'http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png',
                address1: '273 13th St'
            },
            {
                photo_url: 'http://media2.ak.yelpcdn.com/bpthumb/KGV5uYP6ptUfls13ZlsEfg/ms',
                name: 'Sunny\'s Bar',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '253 Conover St'
            },
            {
                photo_url: 'http://media1.ak.yelpcdn.com/bpthumb/rJjRHfqg2n9cd2Uq3oRftQ/ms',
                name: 'Duff\'s Brooklyn',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '168 Marcy Ave'
            },
            {
                photo_url: 'http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms',
                name: 'Vin Sur Vingt',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '201 W 11th St'
            },
            {
                photo_url: 'http://media4.ak.yelpcdn.com/bpthumb/BxjbE1g3snRu6d0dHD_V6Q/ms',
                name: 'Lucky 13 Saloon',
                rating_img_url_small: 'http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png',
                address1: '273 13th St'
            },
            {
                photo_url: 'http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms',
                name: 'Sunny\'s Bar',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '253 Conover St'
            },
            {
                photo_url: 'http://media1.ak.yelpcdn.com/bpthumb/bJT-SPJrjTIi6K8ehqwnXQ/ms',
                name: 'Duff\'s Brooklyn',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '168 Marcy Ave'
            },
            {
                photo_url: 'http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms',
                name: 'Vin Sur Vingt',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '201 W 11th St'
            },
            {
                photo_url: 'http://media1.ak.yelpcdn.com/bpthumb/KtdHatgh-koBoQ9HrpNWLA/ms',
                name: 'Lucky 13 Saloon',
                rating_img_url_small: 'http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png',
                address1: '273 13th St'
            },
            {
                photo_url: 'http://media1.ak.yelpcdn.com/bpthumb/d_osp98Jw_sdLNyOqeitbQ/ms',
                name: 'Sunny\'s Bar',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '253 Conover St'
            },
            {
                photo_url: 'http://media1.ak.yelpcdn.com/bpthumb/rJjRHfqg2n9cd2Uq3oRftQ/ms',
                name: 'Duff\'s Brooklyn',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '168 Marcy Ave'
            },
            {
                photo_url: 'http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms',
                name: 'Vin Sur Vingt',
                rating_img_url_small: 'http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
                address1: '201 W 11th St'
            },
            {
                photo_url: 'http://media4.ak.yelpcdn.com/bpthumb/BxjbE1g3snRu6d0dHD_V6Q/ms',
                name: 'Lucky 13 Saloon',
                rating_img_url_small: 'http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png',
                address1: '273 13th St'
            },
            
        ],
        storeId: 'PodcastStore',
        fields: [
            {
                name: 'photo_url'
            },
            {
                name: 'name'
            },
            {
                name: 'rating_img_url_small'
            },
            {
                name: 'address1'
            }
        ]
    }
});