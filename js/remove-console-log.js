;(function ( root, factory ) {
  'use strict';
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define( factory );
  }
  else if ( typeof exports === 'object' ) {
    exports = module.exports = factory();
  }
  else {
    root.Module = ( root.Module || {} );
    root.Module.RemoveConsoleLog = factory();
  }
})(this, function() {
  'use strict';

  var inProduction = ( window.location.hostname.indexOf( 'urldoseusite.com.br' ) > -1 );
  var inDevMode = ( '?development' === window.location.search );
  var inProductionAndNotDevMode = inProduction && ! inDevMode;

  if( inProductionAndNotDevMode ) {
    window.console = {};
    console.assert = console.clear = console.constructor = console.count = console.debug = console.dir = console.dirxml = console.error = console.group = console.groupCollapsed = console.groupEnd = console.info = console.log = console.markTimeline = console.profile = console.profileEnd = console.table = console.time = console.timeEnd = console.timeStamp = console.timeline = console.timelineEnd = console.trace = console.warn = function() { return false; };
  }
});
