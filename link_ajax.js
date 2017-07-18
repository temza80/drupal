
( function( $ ) {

 
  // When ready...
  // @see http://www.benmarshall.me/drupal-behaviors/
  Drupal.behaviors.add_art = {
	 
  attach: function (context, settings) {
	  var path_loader = 'url('+Drupal.settings.add_article.basepath+'/img/ajax-loader.gif)';

    $('#prev_look').click (function() {
		draw_drafts("back","#prev_look",'#forward_look');	
	});
  $('#forward_look').click (function() {
	  draw_drafts("forward","#forward_look",'#prev_look');	
	});
function draw_drafts(dir,doing,inactive)
{
		$(doing).css('background-image',path_loader);
		$(inactive).css('background-image','none');

   $.getJSON("add_article/prevlooks",{'dir': dir},function(data) 
   {
 
		$("#article_title_add_art" ).val( data[0]);//data.pageviews
		$("#edit-add-art-text-value" ).val( data[1]);//data.pageviews
		$(doing).css('background-image','none');
		//alert(data[1]);
	//	animate_ajax(data[2]);
	});
}
function animate_ajax()
{
$('body').append('<div id="draft_number" style="position: fixed; top: 15%; right : 50%; height: 15%; background-color: red;display: none; font-size: 350%; color: white;"><br><br>'+arguments[0]+'</div>')	
$('#draft_number').slideDown();
setInterval(function(){$('#draft_number').remove();},5000);
}
}
}
    Drupal.behaviors.add_art3 = {
	 
  attach: function (context, settings) {
    $('.red_arrows').on('mouseover', function() {
  document.body.style.cursor = 'pointer';
 
});
  $('.red_arrows').on('mouseout', function() {
  document.body.style.cursor = 'default';
});
  
}
  }

}) (jQuery);
/*
$.fn.extend({
    test: function () {
		alert('!a!');
      //the main js function which is triggered
      //...
    });
    // Arguments to pass to the AJAX script.
   // vars arguments = { status: 'awesome' };
 
    // Send the arguments & return the JSON data.
 
    $('#prev_look').click(function() {
  alert( "Handler for .click() called." );
		
        $.getJSON("add_article/prevlooks2").done(function(data) {
 
      // Add the number of pageviews to the page.
      $("#test-json" ).html( '123' );//data.pageviews
      return false;
    });
});
  };
 
})( jQuery );
*/
