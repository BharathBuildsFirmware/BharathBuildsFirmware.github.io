(function () {
    'use strict';

    // ================================
    // Google Analytics 4
    // ================================

    var GA_MEASUREMENT_ID = 'G-EQFX4CJZ5H';

    // Load Google Analytics
    var script = document.createElement('script');
    script.async = true;
    script.src =
        'https://www.googletagmanager.com/gtag/js?id=' +
        GA_MEASUREMENT_ID;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

})();