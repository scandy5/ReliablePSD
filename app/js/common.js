$(function() {
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			margin: 20,
			loop: true,
			responsiveClass:true,
			dots: false,
			responsive:{
					0:{
							items:1,
					},
					600:{
							items:4,
					},
					990:{
							items:5,
					},
					1200:{
							items:6,
					}
			}
		});
	});
});
