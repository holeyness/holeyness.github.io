(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(200).fadeOut("slow"); 
});

$(document).ready(function(){
	
	
//------------------------------------- Site slider ------------------------------------------------//

$("#testimonial-carousel").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true   
});
  
  
$("#block-slider").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: true,
    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
});




//------------------------------------- End site slider------------------------------------------------//





//------------------------------------- Skills percentage setup------------------------------------------------//



$(".percentage").each(function(){
          var  width= $(this).text();
          $(this).css("width", width).empty();
});
		



//------------------------------------- End skills percentage setup------------------------------------------------//




//------------------------------------- Portfolio setup------------------------------------------------//



	
$('.box').magnificPopup({
					  type: 'image',
					fixedContentPos: false,
					fixedBgPos: false,
					mainClass: 'mfp-no-margins mfp-with-zoom',
					image: {
						verticalFit: true
					},
					zoom: {
						enabled: true,
						duration: 300
					}
				});


$('.popup-youtube, .popup-vimeo').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});
				



/*Filtred portfolio*/
$('.filter li a').on("click", function(e){
	
		e.preventDefault();
		$(this).addClass('active');
		$(this).parent().siblings().find('a').removeClass('active');
		
		
		
        var filters = $(this).attr('data-filter');
        $(this).closest('.works').find('.item').removeClass('disable');

        if (filters !== 'all') {
        
        
        
        
        var selected =  $(this).closest('.works').find('.item');
        
        for(var i = 0; i < selected.length; i++){
        
        if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
				}
        
        }	
            
   }
   

});



//------------------------------------- End portfolio setup------------------------------------------------//




//------------------------------------- Search input------------------------------------------------//


	
	$('.search-form i').on("click", function(){
		$(this).closest('.search-form').find('input[type="text"]').focus();
		if($(this).closest('.search-form').find('input[type="text"]').val()){
			$(this).closest('.search-form').find('input[type="submit"]').trigger('click');
		}
	});

//------------------------------------- End search input------------------------------------------------//







});


})(jQuery);
