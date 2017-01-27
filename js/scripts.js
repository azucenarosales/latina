$(document).ready(function() {     
 $('.carousel.carousel-slider').carousel({full_width: true});

 	$("#next").click(function(){
    	$('.carousel').carousel('next');
	});	

	$("#prev").click(function(){
    	$('.carousel').carousel('prev');
	});	
});


