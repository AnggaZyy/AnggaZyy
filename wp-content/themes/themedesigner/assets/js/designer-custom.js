jQuery(document).ready(function($) {
	
	//alert('1');
  jQuery('.text-slider').flexslider({
            animation: "fade",
            animationLoop: true,
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 1500,
        });
        
        
        $(function () {
			$("select").selectbox();
		});
	
	
	   $('.links #download_link').click(function(){
		   $( this ).siblings( ".popup-box-container" ).css('display','block');
		   window.scrollTo(0, 0);
			   post_id = $( this ).siblings( ".postid" ).val();
			   var count = $( this ).parent( ".links" ).siblings( ".counting-section" ).find( ".count" );

			   jQuery.ajax({
				 type : "post",
				 url : myAjax.ajaxurl,
				 data : {action: "increase_download_count", post_id : post_id},
				 success: function(response) {
				    count.html( response );
				 }
			   }) 
		   
		   
		   
	   	  //$('.popup-box-container').css('display','block');
	   });
	   $('.popup-box .close').click(function(){
	   	  $('.popup-box-container').css('display','none');
	   });

	
	 jQuery('.mobile-menu').click(function() {

        jQuery(this).toggleClass('close');
        jQuery('.main-navigation').slideToggle(400);

    });
	
	//jQuery( ".rew-short-desc p" ).wrap( "<a href='' class='new'></a>" );
	
	jQuery(".rew-entries").each(function(){
	    var link = jQuery(this).find(".rew-image").children("a").attr("href");
	    var name = jQuery(this).find(".rew-short-desc").children("p").text();
	    
	    jQuery(this).find(".rew-short-desc").html("<p><a href='"+ link +"' target='_blank'>"+ name +"</a></p>");
	   
	});
});
