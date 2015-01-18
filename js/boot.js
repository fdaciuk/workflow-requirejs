;(function( document, undefined ) {
  'use strict';

  var $scriptDefault = doc.querySelector( '[data-js="script-default"]' );
  var BASE_URL = $scriptDefault.getAttribute( 'data-base-url' );

  require.config({
    baseUrl: BASE_URL + '/js',
    paths: {
      jquery: [
        'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
        'vendor/jquery'
      ],
      lodash: 'vendor/lodash'
    }
  });

  require([ 'jquery', 'remove-console-log' ], function( $ ) {
    require([ 'App' ], function( App ) {
      $(function() {
        App
          .setPath( 'BASE_URL', BASE_URL )
          .init();
      });
    });
  });
})( document );