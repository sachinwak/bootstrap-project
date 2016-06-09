jQuery(document).ready(function(){
	
	    if (window.matchMedia('(min-width: 768px)').matches) {
	        $(".dropdown").hover(
		        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
		        },
		        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
		    });
	    } 
    
});