define([ 'jquery' ], function( $ ) {
  'use strict';

  var App = (function() {
    var $public = {};
    var $private = {};

    $private.projectPaths = {};

    $public.init = function init() {
      console.log( 'carregou App.js' );
      $private.loadPageScripts();
    };

    $public.setPath = function setPath( pathName, pathUrl ) {
      $private.projectPaths[ pathName ] = pathUrl;
      return $public;
    };

    $public.getPath = function getPath( pathName ) {
      return $private.projectPaths[ pathName ];
    };

    $private.loadPageScripts = function loadPageScripts() {
      // Scripts para todas as páginas
      $private.initModule( 'controllers/CommonController' );

      // Exemplo de carregamento para a Home
      // if( $( '[data-js="page-home"]' )[0] ) {
      //     $private.initModule( 'controllers/HomeController' );
      // }
    };

    $private.initModule = function initModule( module ) {
      require([ module ], function( module ) {
        module.init();
      });
    };

    return $public;
  })(); // App

  return App;
});