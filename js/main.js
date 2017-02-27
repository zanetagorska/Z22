// scroll menu
  function init() {
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 1,
      navbar = document.querySelector('.navbar');
      if (distanceY > shrinkOn) {
        classie.add(navbar,'smaller');
      } else {
        if (classie.has(navbar,'smaller')) {
          classie.remove(navbar,'smaller');
        }
      }
    });
  }
  window.onload = init();

$(document).ready(function(){
// scroll btn
  $('#scroll-btn').click(function (e) {
    $('html,body').animate({
        scrollTop: 1200,
    }, 1000);
  });

// video
  var video = document.getElementById('skills-video');
  var btnskills = document.getElementById('btn-skills');
  var sectskills = document.getElementById('skills');

  btnskills.addEventListener('click', function() {
    sectskills.classList.toggle('stopfade');
    if (video.paused) {
      video.play();
      btnskills.innerHTML = '<i class="zmdi zmdi-pause"></i>';
    } else {
      video.pause();
      btnskills.innerHTML = '<i class="zmdi zmdi-play"></i>';
    }
  });

// Gallery
  $('#lightgallery').lightGallery();

// Category filter
  $('.category-item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.portfolio-item').fadeOut();
      setTimeout(function(){
        $('.portfolio-item').fadeIn();
      }, 300);
    } 
    else {
      $('.portfolio-item').fadeOut();
      setTimeout(function(){
        $('.'+ category).fadeIn();
      }, 300);
    }
  });

// Portfolio hover img
  $('.portfolio-item').hover(
    function(){
      $(this).find('.overlay').animate({'opacity': '0.9'}, 300);
    },
    function(){
      $(this).find('.overlay').animate({'opacity': '0'}, 300);
    });

// matchHeight
  $('.mh').matchHeight();

// Owl
  $('#owl-team').owlCarousel({
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });

  $('#owl-clients').owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1200, 5],
    itemsDesktopSmall : [992, 5],
    itemsTablet: [768, 3],
    itemsMobile: [480, 1],
    navigation : true,
    pagination: false
  });

  $('#owl-clients').find('.owl-prev').html('<i class="zmdi zmdi-chevron-left"></i>');
  $('#owl-clients').find('.owl-next').html('<i class="zmdi zmdi-chevron-right"></i>');

// pricing
  $('.product').hover(
    function(){
      $(this).find('.product-header').css({'border-bottom' : 'solid 1px #f95d5a'})},
    function (){
      $(this).find('.product-header').css({'border-bottom' : 'solid 1px #f5f5f5'})
  });

// stats
  $('#fact').one('inview', function(event, isInView) {
    if (isInView) {
      $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  
});


