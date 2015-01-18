define([ 'jquery' ], function( $ ) {
  'use strict';

  var ControllerCommon = (function() {
    var $public = {};
    var $private = {};

    $public.init = function init() {
      console.log( 'carregou ControllerCommon.js' );
      $private.initEvents();
    };

    $private.initEvents = function initEvents() {
      $( 'a[href="#"]' ).on( 'click', function( e ) {
        e.preventDefault();
      });
    };

    return $public;
  })();

  return ControllerCommon;
});