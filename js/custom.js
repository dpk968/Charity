/*==================================================
    PROJECT: HELPING HANDS
    VERSION: 1.0
    CREATED DATE: 25/02/20
    LAST CHANGE: --/--/--
    AUTHOR : IQONIQ THEMES
/*==================================================
    * TABLE OF CONTENTS :
    * 1.0 - #PAGELOADER SCRIPT
    * 2.0 - #RESPONSIVE MENU  SCRIPT
    * 3.0 - #MAIN BANNER SLIDER  SCRIPT
    * 4.0 - #TESTIMONIAL SLIDER  SCRIPT
    * 5.0 - #BRAND SLIDER  SCRIPT
    * 6.0 - #PARALLAX BACKGROUND  SCRIPT
    * 7.0 - #BACKGROUND IMAGE  SCRIPT
    * 8.0 - #CART ITEMS INCRESSER  SCRIPT
    * 9.0 - #FLICKR FEED  SCRIPT
    * 10.0 - #TWITTER FEED  SCRIPT
    * 11.0 - #MAILCHIMP NEWSLETTER  SCRIPT
    * 12.0 - #MAGNIFIC POPUP  SCRIPT
    * 13.0 - #GOOGE MAP  SCRIPT
    * 14.0 - #PAYPAL FORM TABS  SCRIPT
    * 15.0 - #RATING STARS  SCRIPT
    [THIS SCRIPTS MANAGE ALL THE JS FUNCTIONS AND THE 3RD PARTY PLUGINS]
==================================================*/
(function($) {
"use strict";
if( mobileDetect == false ) {
      /* #PAGELOADER SCRIPT ====================================== */
  $(window).load(function () {
    $("body").imagesLoaded(function () {
      $(".loader-cont").fadeOut();
      $("#loader-overflow").delay(200).fadeOut(700);
    });
  });
}

 
  /* #RESPONSIVE MENU  SCRIPT ====================================== */
  jQuery(".main-menu").meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
  });
  /* #MAIN BANNER SLIDER  SCRIPT ====================================== */
  $('.main-slider').slick({
    arrows:false,
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  /* #TESTIMONIAL SLIDER  SCRIPT ====================================== */
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows:false,
    dots:false,
    slidesToScroll:1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '0px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
  });
  /* #BRAND SLIDER  SCRIPT ====================================== */
  $('.brand-slider').slick({
    arrows:false,
    dots:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '0px',
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            }
        ]
  });
  /* #PARALLAX BACKGROUND  SCRIPT ====================================== */
  if ( $('.sub-header,.parallax-section').length ){
    $.stellar({
      responsive: true,
    }); 
  };  
  /* #BACKGROUND IMAGE  SCRIPT ====================================== */
	$(".data-bg").css('background', function () {
		var bg = ('url(' + $(this).data("image-src") + ') no-repeat');
		return bg;
	});
  /* #CART ITEMS INCRESSER  SCRIPT ====================================== */
	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
  /* #FLICKR FEED  SCRIPT ====================================== */
  $('#flickr-feeds').jflickrfeed({
      limit: 6,
      qstrings: {
          id: '152623543@N06'
      },
      itemTemplate: '<div class="col-md-4">' + '<a class="flickr-gallery-thumb th-bg lightbox" rel="prettyphoto" href="{{image}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</div>'
  });
  /* #TWITTER FEED  SCRIPT ====================================== */
  $("#twitter-feeds").tweet({
      count: 3,
      avatar_size: false,
      username: "OscarThemes",
      modpath: './js/twitter/',
      loading_text: "loading tweets..."
  });
  /* #MAILCHIMP NEWSLETTER  SCRIPT ====================================== */
  $(function() {
      'use strict';
      var $form = $('#mc-embedded-subscribe-form');

      $('#mc-embedded-subscribe').on('click', function(event) {
          if (event) event.preventDefault();
          register($form);
      });
  });
  function register($form) {
      $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          error: function(err) {
              $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>');
          },
          success: function(data) {

              if (data.result != "success") {
                  var message = data.msg;
                  $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + message + '</div>');
              } else {
                  var message = data.msg;
                  $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + message + '</div>');
              }
          }
      });
  }
  /* #MAGNIFIC POPUP  SCRIPT ====================================== */
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-3d-unfold',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
          beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
              this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
              // this.st.mainClass = this.st.el.attr('data-effect');
          }
      },
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          /*titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
          }*/
      }
  });
  $('.lightbox').magnificPopup({
     // delegate: 'a',
      type: 'image',
      mainClass: 'mfp-3d-unfold',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        // this.st.mainClass = this.st.el.attr('data-effect');
      }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      //disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
  /* #GOOGE MAP  SCRIPT ====================================== */
  if ( $('.map-canvas').length ){
    initMap();
  };
  function initMap(){
      var gmMapDiv = $(".map-canvas");
      (function($){
  		var gmCenterAddress = gmMapDiv.attr("data-address");
  		var gmMarkerAddress = gmMapDiv.attr("data-address");
  		var gmstreetViewControl = gmMapDiv.attr("data-view");
  	  	gmMapDiv.gmap3({
  	        action: "init",
  	        marker: {
  	            address: gmMarkerAddress,
  	            options: {
  	                icon: "../images/loc-marker.png" /* Location marker */
  	            }
  	        },
  	        map: {
  	            options: {
  	                zoom: 17,
  	                zoomControl: true,
  	                zoomControlOptions: {
  	                    style: google.maps.ZoomControlStyle.SMALL
  	                },
  	                mapTypeControl: true, /* hide/show (false/true) mapTypeControl*/
  	                scaleControl: false, /*hide/show (false/true) scaleControl */
  	                scrollwheel: false, /*hide/show (false/true) scrollwheel*/
  	                streetViewControl: gmstreetViewControl, /*hide/show (false/true) streetViewControl*/
  	                draggable: true,
  	                styles:[ 
  	                  	{
  							"featureType": "administrative.country",
  							"elementType": "geometry",
  							"stylers": [
  								{
  									"visibility": "simplified"
  								},
  								{
  									"hue": "#ff0000"
  								}
  							]
  	                  	}
  	                ] /*CHANGE STYLE (colors and etc.) */
  	            }
  	        }
  	  	});
  	})(jQuery);
  }
  /* #PAYPAL FORM TABS  SCRIPT ====================================== */
  $('.d-flex.tabs .btn_styles').click(function() {
      if(!$(this).hasClass('active')) {
        let active, parent, tab;
        active = $(this);
        parent = $(this).closest('.d-flex.tabs').first();
        parent.find('.btn_styles').each(function() {
          tab = $($(this).attr('href'));
          if($(this).is(active)) {
            $(this).addClass('active');
            if(tab.length > 0) tab.show();
          } else {
            $(this).removeClass('active');
            if(tab.length > 0) tab.hide();
          }
        });
      }

      return false;
  });
  /* #RATING STARS  SCRIPT ====================================== */
	var $star_rating = $('.star-rating span');
	var SetRatingStar = function() {
	  return $star_rating.each(function() {
	    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
	      return $(this).removeClass('icon-basic-star').addClass('icon-basic-star fa-star');
	    } else {
	      return $(this).removeClass('icon-basic-star fa-star').addClass('icon-basic-star');
	    }
	  });
	};
	$star_rating.on('click', function() {
	  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
	  return SetRatingStar();
	});
	SetRatingStar();
})(jQuery);

