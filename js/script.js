(function() {
  var config = {
    kitId: 'jgr8wsf'
  };
  var d = false;
  var tk = document.createElement('script');
  tk.src = '//use.typekit.net/' + config.kitId + '.js';
  tk.type = 'text/javascript';
  tk.async = 'true';
  tk.onload = tk.onreadystatechange = function() {
    var rs = this.readyState;
    if (d || rs && rs != 'complete' && rs != 'loaded') return;
    d = true;
    try { Typekit.load(config); } catch (e) {}
  };
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(tk, s);
})();

//amimation

$( document ).ready(function() {
    console.log( "ready!" );
    (function($) {
      console.log('animate-in');
      /**
       * Copyright 2012, Digital Fusion
       * Licensed under the MIT license.
       * http://teamdf.com/jquery-plugins/license/
       *
       * @author Sam Sehnert
       * @desc A small plugin that checks whether elements are within
       *     the user visible viewport of a web browser.
       *     only accounts for vertical position, not horizontal.
       */

      $.fn.visible = function(partial) {
        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };
        
    })(jQuery);

    var win = $(window);

    var allMods = $(".section-book");

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible"); 
      } 
    });

    win.scroll(function(event) {
      
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate-in"); 
        } 
      });
      
    });

 var gotoHashTab = function (customHash) {
        var hash = customHash || location.hash;
        var hashPieces = hash.split('?'),
            activeTab = $('[href=' + hashPieces[0] + ']');
        activeTab && activeTab.tab('show');
    }

    // onready go to the tab requested in the page hash
    gotoHashTab();

return $('a[data-toggle="tab"]').on('shown', function(e) {
location.hash = $(e.target).attr('href').substr(1);
scrollTo(0,0);
});

    // when the nav item is selected update the page hash
    $('.nav a').on('shown', function (e) {
        window.location.hash = e.target.hash;
    })

    // when a link within a tab is clicked, go to the tab requested
    $('.tab-pane a').click(function (event) {
        if (event.target.hash) {
            gotoHashTab(event.target.hash);
        }
    });
});

