jQuery(function($) {
	$(document).ready( function() {
		$('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:5000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        })
	});
});


//STICKUP JS
jQuery(function($) {
	$(document).ready( function() {
		$('.navbar-wrapper').stickUp();
	});
});

//WOW JS
jQuery(function($) {
	$(document).ready( function() {
		wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	});
});

//MIXITUP JS
jQuery(function($) {
	$(document).ready( function() {
		 var mixer = mixitup('.portfolio');
	});
});

//ANIMATED COUNTER JS
jQuery(function($) {
	$(document).ready( function() {
		$('#counter-block').ready(function(){
        $('.fb').animationCounter({
          start: 0,
          step: 100,
          end: 10000000,
          delay:50,
          txt: ' Likes'
        });
        $('.client').animationCounter({
          start: 0,
          step: 1,
          end: 327,
          delay:50,
          txt: ' + Clients'
        });
        
        $('.project').animationCounter({
          start: 0,
          end: 1000,
          step: 1,
          delay: 50,
          txt: ' + Projects'
        });
    });
	});
});