/* Click on nav links to scroll to them */
$("#aboutlink").click(function() {
$('html, body').animate({
    scrollTop: $("#about").offset().top + 190
}, 1000);
});

$("#what-i-do-cta").click(function() {
$('html, body').animate({
    scrollTop: $("#what-i-do").offset().top + 150
}, 1000);
});

$("#what-i-dolink").click(function() {
$('html, body').animate({
    scrollTop: $("#what-i-do").offset().top + 150
}, 1000);
});

$("#mobile-what-i-dolink").click(function() {
$('html, body').animate({
    scrollTop: $("#what-i-do").offset().top + 200
}, 1000);
});

$("#projectslink").click(function() {
$('html, body').animate({
    scrollTop: $("#projects").offset().top + 220
}, 1000);
});

$("#mobile-projectslink").click(function() {
$('html, body').animate({
    scrollTop: $("#projects").offset().top + 180
}, 1000);
});

$("#mobile-contactlink").click(function() {
$('html, body').animate({
    scrollTop: $("#contact").offset().top + 190
}, 1000);
});


/* Come in on scroll */
(function($) {

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
var allSections = $("section");

// Already visible modules
allSections.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  allSections.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});

/* Close mobile nav when clicked */
$(".mobile-link").click(function(){
    $("#toggle").prop("checked", false);
});

/* Move floating icons when bottom reached */
function checkOffset() {
    var a=$(document).scrollTop()+window.innerHeight;
    var b=$('footer').offset().top + 20;
    if (a<b) {
      $('.floating-icons').css('bottom', '80px');
    } else {
      $('.floating-icons').css('bottom', (55+(a-b))+'px');
    }
  }
  $(document).ready(checkOffset);
  $(document).scroll(checkOffset);
