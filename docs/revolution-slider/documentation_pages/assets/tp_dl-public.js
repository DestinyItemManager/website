(function( $ ) {
	'use strict';

	$(document).ready(function() {
	   $('a[data-downloadid]').click(function(){
	    	var downloader = jQuery(this);
	    	var media_id = downloader.data('downloadid');
	    	top.location.href=bajax_var.abs+"tp_dl_download.php?f="+media_id;
	    	// Ajax call
	        jQuery.ajax({
	            type: "post",
	            url: bajax_var.url,
	            data: "action=tp_dl_count&nonce="+bajax_var.nonce+"&tp_dl_count=&post_id="+media_id,
	            success: function(count){
	                if (window.console && console.log) console.log(count);
	            }
	        });
	        return false;
	   });
	})

})( jQuery );
