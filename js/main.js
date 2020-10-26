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
          step: 1000,
          end: 1000000,
          delay:10,
          txt: ' Likes'
        });
        $('.client').animationCounter({
          start: 0,
          step: 1,
          end: 327,
          delay:100,
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

//SCROLL BUTTON JS
jQuery(function($) {
	$(document).ready( function() {
		 //Get the button
      var mybutton = document.getElementById("myBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
	});
});


//PROGRESSBAR JS
jQuery(function($) {
  $(document).ready( function() {
     $('#example8').progressBarTimer({
        
        autoStart: true, 
        striped: true,
        height: 50,
        smooth: true,
        completeStyle: 'bg-success', 
        label: { show: true, type: 'percent'   

      }});
  });
});

//SCROLL BUTTON JS
jQuery(function($) {
  $(document).ready( function() {

    
  });
});

//SWIPER JS
jQuery(function($) {
  $(document).ready( function() {

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
  });
});
