//'onclick' => 'document.getElementById("article_preview").innerHTML=document.getElementById("edit-add-art-text-value").value; return (false);
(function ($) {
$( "#edit-preview" ).on( "click", function() {
  $("#article_preview").html($("#edit-add-art-text-value").val());
  ajax_write();
  return false;
});
function ajax_write()
{
	
}
})(jQuery);
