// vendor
import '../vendor/bootstrap/js/bootstrap.js'

import './jqBootstrapValidation.js'
import './contact_me.js'
import './agency.js'

import '../scss/index.scss'

// import views so they can live-reload during development
if (process.env.NODE_ENV === 'development') {
    // const glob = require('glob')
    // const { resolve } = require('path')
    //
    // glob.sync( '../views/**/*.pug' ).forEach( function( view ) {
    //   require( resolve( view ) );
    // });

    // pages
    require('../views/pages/index.pug')
    require('../views/pages/about.pug')
    require('../views/pages/contact.pug')
    require('../views/pages/services.pug')
    require('../views/pages/industries.pug')
    require('../views/pages/thinking.pug')
    require('../views/pages/additional-content.pug')
    require('../views/pages/404.pug')

    // partials
    require('../views/partials/layout.pug')
    require('../views/partials/head.pug')
    require('../views/partials/contact.pug')
    require('../views/partials/footer.pug')
    require('../views/partials/bottom.pug')
}

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-8405732-2', 'auto');
ga('send', 'pageview');
