

var swiper = new Swiper('.swiper-loop', {
	loop: true,
	autoplay: {
	  delay: 1,
	},

	freeMode: true,
	speed: 5000,
	slidesPerView: 'auto',
	spaceBetween: 50,
	centeredSlides: true,
	


  });

  
  $(".swiper-loop").hover(function () {
	(this).swiper.autoplay.stop();
  }, function () {
	(this).swiper.autoplay.start();
  });





  var swiper = new Swiper('.swiper-fmail-founders', {
	slidesPerView: 4,
	spaceBetween: 20,
	centeredSlides: true,
	loop: true,
		// freeMode: true,
	 navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },

	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },


	  breakpoints: {
		1400: {
			slidesPerView: 4,
			spaceBetween: 50,
		 },
		 900: {
			slidesPerView: 2,
			spaceBetween: 10,
			
		 },

		 320: {
			slidesPerView: 1,
			spaceBetween: 10,
		 },
	   }


	 
  });




  var swiper = new Swiper('.swiper-quotes', {
	slidesPerView: 4,
	spaceBetween: 20,
	centeredSlides: true,
	// freeMode: true,
	loop: true,
 autoplay: {
        //   delay: 2500,
          disableOnInteraction: false,
        },

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },

	  breakpoints: {
		1400: {
			slidesPerView: 3,
			spaceBetween: 20,
			
		 },

		 900: {
			slidesPerView: 2,
			spaceBetween: 20,
			
		 },

		 
		 320: {
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: true,
		 },
	   }
	 
  });


  var swiperTeam = new Swiper('.swiper-team', {
	slidesPerView: 4,
	spaceBetween: 30,
	// centeredSlides: true,
	// freeMode: true,
	// loop: true,
	watchSlidesProgress: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	  },

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

	  breakpoints: {
		1400: {
			slidesPerView: 3,
			spaceBetween: 30,
			
		 },

		 900: {
			slidesPerView: 2,
			spaceBetween: 20,
			
		 },

		 
		 320: {
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: true,
		 },
	   }
	 
  });



  
  Splitting(); 

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
  targets: ".scrollable-pane",
});

  ScrollOut({
	targets: ".features-list .media",
  });

  ScrollOut({
	targets: ".reveal-text",
  });
  ScrollOut({
	targets: ".fade-in-left",
  });
  ScrollOut({
	targets: ".fade-in-right",
  });
  ScrollOut({
	targets: ".fade-in",
  });
  ScrollOut({
	targets: ".target-this",
  });
  
(function() {
	$('.make-it-select').each(function() {
		$(this).hide();
		makeElement($(this));
	});

	function makeElement(select) {
		var
		$div = $('<div />', {class:'ui-select'}).insertAfter(select),
		$nav = $('<span />').click(function() {
			$(this).parent().toggleClass('open');
		}).appendTo($div),
		$el = $('<ul />').appendTo($div);
		select.find('option').map(function(i) {
			
			var li = $('<li />').append($(this).text());
				li.click(onSelect.bind($div, li, $(this).val(), select, $nav));
			if($(this).attr('selected')) {
				li.addClass('selected');
			}
			var delay = i * 100 + 'ms';
			li.css({
				'-webkit-transition-delay': delay,
		        '-moz-transition-delay': delay,
		        '-o-transition-delay': delay,
		        'transition-delay': delay
			});
			$el.append(li);
		});
		var selected = $el.find('li.selected');
			selected = selected.length ? selected.html() : $el.find('li:first-child').addClass('selected').html();
		$nav.html(selected);
		// addAnimateDelay($el);
	}

	function onSelect(li, value, select, $nav) {
		this.removeClass('open');
		li.addClass('selected').siblings().removeClass('selected');
		select.val(value).trigger('change');
		$nav.html(li.html());
	}
})();

$('.click-me').click(function () {
	$('.drop-menu').toggleClass('open');
	
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

  $('.drop').click(function () {
	$(this).toggleClass('open').siblings().removeClass('open');
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

$('.accordian .accordian-title').click(function() {
	$(this).parent('li').toggleClass('active');
	$(this).parents('li').find('.ac-detail-item').slideToggle();
});




$(window).scroll(function(){
	var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
  });

ScrollOut({

  targets: ".animation-row",

  onShown: function(el) {
    $('.animation-row ' + child).each(function(el) {
      
     $(this).addClass('animation-child');
     
      time = $(this).parent().attr('data-delay');

      if(time === undefined){
          time = 200;
       };


      var delay = $(this).index() * time + 'ms';
      
      $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay,
        'animation-delay' : delay
    
      });  
    
      });
    
      
  },

  onHidden: function(el) {
   
    delay = $(this).index() * 0 + 'ms';
  }
});


	

$(window).scroll(function() {
  var footer = $('.site-footer');
  if($(window).scrollTop() + $(window).height() > $(document).height() - footer.height()) {
	$('.fixed-container').addClass('removefixed')
  }else {
	$('.fixed-container').removeClass('removefixed')

  }
});



$('.bordered-title').click(function() {
	$(this).parent().find('.accr-item').slideToggle()

})


document.addEventListener('DOMContentLoaded',function(event){
	// array with texts to type in typewriter
	var dataText = [ "IDEATE", "INNOVATE", "CHANGE"];
	
	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
	  // chekc if text isn't finished yet
	  if (i < (text.length)) {
		// add next character to h1
	   document.querySelector(".typetext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
		// wait for a while and call this function again for next character
		setTimeout(function() {
		  typeWriter(text, i + 1, fnCallback)
		}, 70);
	  }
	  // text finished, call callback if there is a callback function
	  else if (typeof fnCallback == 'function') {
		// call callback after timeout
		setTimeout(fnCallback, 700);
	  }
	}
	// start a typewriter animation for a text in the dataText array
	 function StartTextAnimation(i) {
	   if (typeof dataText[i] == 'undefined'){
		  setTimeout(function() {
			StartTextAnimation(0);
		  }, 1500);
	   }
	   // check if dataText[i] exists
	  if (i < dataText[i].length) {
		// text exists! start typewriter animation
	   typeWriter(dataText[i], 0, function(){
		 // after callback (and whole text has been animated), start next text
		 StartTextAnimation(i + 1);
	   });
	  }
	}
	// start the text animation
	StartTextAnimation(0);
  });
  