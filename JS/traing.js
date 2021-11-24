// ativando header 
$(document).ready(function(){

    $(window).scroll(function(){
        
        var scroll = $(window).scrollTop();
        if(scroll >= 40){
            $("header").addClass("header-ativo");
        } else {
            $("header").removeClass("header-ativo");
        }
    });
});

// Smooth scroll for the navigation menu and links with .scrollto classes
var scrolltoOffset = $('#header').outerHeight() - 21;
$(document).on('click', '.nav-menu a, #mobile-nav a, .scrollto', function(e) {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
    e.preventDefault();

    var scrollto = target.offset().top - scrolltoOffset;

    $('html, body').animate({
        scrollTop: scrollto
    }, 1500, 'easeInOutExpo');

    if ($(this).parents('.nav-menu').length) {
        $('.nav-menu .menu-ativo').removeClass('menu-ativo');
        $(this).closest('li').addClass('menu-ativo');
    }

    if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').fadeOut();
    }
    return false;
    }
}
});

// Activate smooth scroll on page load with hash links in the url
$(document).ready(function() {
if (window.location.hash) {
  var initial_nav = window.location.hash;
  if ($(initial_nav).length) {
    var scrollto = $(initial_nav).offset().top - scrolltoOffset;
    $('html, body').animate({
      scrollTop: scrollto
    }, 1500, 'easeInOutExpo');
  }
}
});

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.nav-menu, #mobile-nav');

$(window).on('scroll', function() {
var cur_pos = $(this).scrollTop() + 200;

nav_sections.each(function() {
  var top = $(this).offset().top,
    bottom = top + $(this).outerHeight();

  if (cur_pos >= top && cur_pos <= bottom) {
    if (cur_pos <= bottom) {
      main_nav.find('li').removeClass('menu-ativo');
    }
    main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-ativo');
  }
  if (cur_pos < 300) {
    $(".nav-menu li:first").addClass('menu-ativo');
  }
  });
});
window.location = "#wall-1";

$(document).ready(function () {
  $('.buttons').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
     
      var filter = $(this).attr('data-filter')
      if (filter == 'all') {
          $('.event-container').hide(400);
      } else {
          $('.card-1').not('.' + filter).hide(200);
          $('.card-1').filter('.' + filter).show(400);
      }

  });
});
