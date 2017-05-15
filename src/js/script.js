// jQuery

(function($) {
  $(document).ready(function() {
    // Kontrolle ob javascript vorhanden ist
      $("body").removeClass("no-js");
      $("body").addClass("js");

    // Mobile-Navigation unter Verwendung der bereits gestylten Klassen aus dem jetzigen Script
      // resets
      $('body').removeClass('js-nav js-ready');

      var showNav = function() {
        $('body').addClass('js-nav js-ready');
      }
      var closeNav = function() {
        $('body').removeClass('js-nav js-ready');
      }
      // Toogle Navigation
    		$('#nav-open').click(function(e) {
          e.preventDefault();
        	showNav();
    		});
        $('#nav-close').click(function(e) {
          e.preventDefault();
        	closeNav();
    		});
  });
})(jQuery);
