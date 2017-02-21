// scroll menu
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 1,
    navbar = document.querySelector(".navbar");
    if (distanceY > shrinkOn) {
      classie.add(navbar,"smaller");
    } else {
      if (classie.has(navbar,"smaller")) {
        classie.remove(navbar,"smaller");
      }
    }
  });
}
window.onload = init();

$(document).ready(function(){
// scroll btn
$("#scroll-btn").click(function (e) {
  $('html,body').animate({
      scrollTop: 1200,
  }, 1000);
});

// video
  var video = document.getElementById("skills-video");
  var btnskills = document.getElementById("btn-skills");
  var sectskills = document.getElementById("skills");

  btnskills.addEventListener("click", function() {
    sectskills.classList.toggle("stopfade");
    if (video.paused) {
      video.play();
      btnskills.innerHTML = '<i class="zmdi zmdi-pause"></i>';
    } else {
      video.pause();
      btnskills.innerHTML = '<i class="zmdi zmdi-play"></i>';
    }
  });

// Gallery
  $("#lightgallery").lightGallery(); 


// Category filter
  $('.category-item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.portfolio-item').addClass('hide');
      setTimeout(function(){
        $('.portfolio-item').removeClass('hide');
      }, 300);
    } 
    else {
      $('.portfolio-item').addClass('hide');
      setTimeout(function(){
        $('.'+ category).removeClass('hide');
      }, 300);
    }
  });


  // Count Up
  var options = {
    useEasing : true, 
    useGrouping : false, 
    separator : '', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };

  var factNumbers = new Array(4);
  factNumbers[0] = new CountUp("fact-num1", 0, 518, 0, 15, options);
  factNumbers[1] = new CountUp("fact-num2", 0, 177, 0, 15, options);
  factNumbers[2] = new CountUp("fact-num3", 0, 2465, 0, 15, options);
  factNumbers[3] = new CountUp("fact-num4", 0, 2465, 0, 15, options);

  for (i=0; i<4; i++){
    factNumbers[i].start();
  }

  // matchHeight
  $('.mh').matchHeight();


  // Owl
  $("#owl-team").owlCarousel({
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });

  $("#owl-clients").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
    navigation : true,
    pagination: false
  });



});


