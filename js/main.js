
		  var typed = new Typed('.typed', {
		    strings:[
		    	"Marketing Professional",
		    	"Seeking Marketing Position",
		    	"Polyglot",
		    	
		    ],
			    typeSpeed:80,
			    backSpeed:80,
			    loop:true
		  });


		  var header = document.querySelector('header');

		  window.addEventListener('scroll', function() {
			if (window.scrollY > 100) {
			  header.classList.add('active');
			} else {
			  header.classList.remove('active');
			}
		  });
			  
// fillter pluging
	var mixer = mixitup('.gallery');


// counter
		$('.count').counterUp({
		    delay:2 ,
		    time: 1000
			});

// button popup
	function popUp(){
		swal("submitted successfully!", "I received your email!", "success");

	}
// animation

	new WOW().init();

// scrolling top	
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0

		},1000);
	});
	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<800){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});


// scrolling menu

	$('.navbar-nav a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.nav-item a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.about-content a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.btn a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});
	$('.header-area a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -100
		},500);
	});

// for change menu color

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});



	