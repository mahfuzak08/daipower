/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
	// main-silder-swiper
	if(jQuery('.main-silder-swiper').length > 0){
		var swiper = new Swiper('.main-silder-swiper', {
			speed: 1500,
			parallax: true,
			loop:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
			navigation: {
				nextEl: '.swiper-button-next1',
				prevEl: '.swiper-button-prev1',
			},
		});
	}
	
	
	
	if(jQuery('.main-silder-swiper-03').length > 0){
		//alert(0);
		var galleryThumbs = new Swiper(".swiperThumbsHome", {
			spaceBetween: 0,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
		var swiper = new Swiper('.main-silder-swiper-03', {
			speed: 1500,
			parallax: true,
			loop:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-home-next',
				prevEl: '.swiper-button-home-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
		
	}
	
	
	
	 
      
	
	// main-silder-swiper-2
	if(jQuery('.main-silder-swiper-2').length > 0){
		var swiper = new Swiper('.main-silder-swiper-2', {
			speed: 1500,
			parallax: true,
			loop:true
		});
	}
	
	
	// main-silder-swiper
	if(jQuery('.main-silder-swiper-04').length > 0){
		var swiper = new Swiper('.main-silder-swiper-04', {
			speed: 1500,
			parallax: true,
			loop:true,
			autoplay:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}
	
	
	
	// Swiper Portfolio
	if(jQuery('.swiper-portfolio').length > 0){
		var swiper2 = new Swiper('.swiper-portfolio', {
			slidesPerView: 4,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next2',
				prevEl: '.swiper-button-prev2',
			},
			breakpoints: {
				1280: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Blog Swiper
	if(jQuery('.blog-swiper').length > 0){
		var swiper2 = new Swiper('.blog-swiper', {
			slidesPerView: 3,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			breakpoints: {
				1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}

	// Blog Swiper
	if(jQuery('.post-swiper').length > 0){
		var swiper2 = new Swiper('.post-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			navigation: {
				nextEl: '.prev-post-swiper-btn',
				prevEl: '.next-post-swiper-btn',
			},
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiper3 = new Swiper('.testimonial-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next3',
				prevEl: '.swiper-button-prev3',
			},
			breakpoints: {
				1191: {
					slidesPerView: 3,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper-2').length > 0){
		var swiper3 = new Swiper('.testimonial-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next3',
				prevEl: '.swiper-button-prev3',
			},
			breakpoints: {
				1191: {
					slidesPerView: 2,
				},
				691: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper').length > 0){
		var swiper4 = new Swiper('.team-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper-2').length > 0){
		var swiper4 = new Swiper('.team-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.clients-swiper').length > 0){
		var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 6,
				},
				991: {
					slidesPerView: 5,
				},
				691: {
					slidesPerView: 4,
				},
				591: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
});

/* Document .ready END */