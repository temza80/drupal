( function( $ ) {
 





  Drupal.behaviors.sliders = {
	
  attach: function (context, settings) {
	

$.fn.extend({
	
	onTapes: function(offself) 
	{
		
	 switch (this){
			   case offself.newsTape:
			   
			   this.on("contextmenu",'div.news_tape_div',function(ev){
   
   
	
             ev.preventDefault();
            offself.delete_menu.css("position","fixed");
            offself.delete_menu.css("left",ev.clientX);
             offself.delete_menu.css("top",ev.clientY);
              offself.delete_menu.css("visibility","visible");
          
              var temp=$(this).attr("id");
              var temp1=temp.split('_');
              offself.context_menu_item.html("Удалить запись номер "+ temp1[1]);
              offself.context_menu_item.attr("id",$(this).attr("id"));
            offself.menu_flag=1;
      
      
});

offself.context_menu_item.on('click',function(){offself.context_menu_item.deleter(offself)});
offself.context_menu_item.on('mouseover', function() {
  document.body.style.cursor = 'pointer';
  $(this).css("background-color", "silver");
 
});
offself.context_menu_item.on('mouseout', function() {
  document.body.style.cursor = 'default';
  $(this).css("background-color", "inherit");
});

			     this.on('mouseover','div.news_tape_div', function() {
  document.body.style.cursor = 'pointer';
  $(this).css("background-color", "white");
 
});
  this.on('mouseout','div.news_tape_div', function() {
  document.body.style.cursor = 'default';
  $(this).css("background-color", "inherit");
});
			   
			   break;
		   }
	},
        onClicker: function(offself) {
			
		 var href; var temp; var tempint;
		 
           switch (this){
			   case offself.newsTape:
			   this.on('click','div.news_tape_div', function(){
				//alert(this.id); 
				    temp=this.id.split('_');
			tempint=parseInt(temp[1]);

			offself.title.val(offself.titleHolder[tempint]);
			$('#edit-add-art-text-value').val(offself.textHolder[tempint]);

				   
				   });	
			   break;
           case offself.backTape:
           this.on('click',function(){
			
href= offself.backTape.attr('href');
 offself.newsTape.scrollTo(href, 1000);
       
temp=href.split('_');
tempint=parseInt(temp[1])-offself.step;
if(tempint<=0) tempint=0;
href=temp[0]+"_"+tempint;
 offself.backTape.attr('href',href);

href= offself.forwardTape.attr('href');
temp=href.split('_');
tempint=parseInt(temp[1])-offself.step;
href=temp[0]+"_"+tempint;
if(tempint>=offself.step) offself.forwardTape.attr('href',href);

else { href=temp[0]+"_"+offself.step; offself.forwardTape.attr('href',href);}

return false;  
});
         
           break;
           
           case offself.forwardTape:
    this.on('click',function(){



href= offself.backTape.attr('href');
temp=href.split('_');
tempint=parseInt(temp[1])+offself.step;
href=temp[0]+"_"+tempint;



offself.backTape.attr('href',href);


href= offself.forwardTape.attr('href');
temp=href.split('_');
tempint=parseInt(temp[1])+offself.step;
if(tempint>offself.ultimateLink)$(offself).drawTape(offself,offself.ultimateLink,tempint,temp[0]);
offself.newsTape.scrollTo(href, 1000);
href=temp[0]+"_"+tempint;


offself.forwardTape.attr('href',href);

return false;   
});      
 
           break;
           
	   }
  
        },
  drawLastTape: function(self)
  {
	 $().animate_wait_begin(self);
	

	 $.getJSON("tapenews",{'id': -1}, function(data){
		 self.newsTape.empty();
		$().animate_wait_end(self); 
for(i=0;(i<4);i=i+4){

		 var i2=i/4;
		var u=parseInt(i2);//offset to ne zadan!
		var uo=u*100;
	
	 self.newsTape.append("<div id='newstape_"+u.toString()+"' class='news_tape_div' style='width: 90px; position: absolute; left: "+uo.toString()+"px;'><div> ");
	 $("#newstape_"+ u.toString()).html(u+'<br>'+data[i]+'<br>'+data[i+1]);//тизеры конечно
	 
 } 
 for(i=0;i<self.textHolder.length;i++){
	var i2=i+1;

		var u=parseInt(i2);//offset to ne zadan!
		var uo=i2*100;
	
	 self.newsTape.append("<div id='newstape_"+u.toString()+"' class='news_tape_div' style='width: 90px; position: absolute; left: "+uo.toString()+"px;'><div> ");
	 $("#newstape_"+ u.toString()).html(u+'<br>'+self.titleHolder[i]+'<br>'+self.teaserHolder[i]);//тизеры конечно
 }
self.titleHolder.splice(0, 0, data[0]); self.textHolder.splice(0, 0, data[2]);
self.teaserHolder.splice(0, 0, data[1]); self.idHolder.splice(0,0,data[3]);
  self.ultimateLink++;
  });
  },
  animate_wait_begin:function(self){
self.backTape.css('visibility','hidden');
self.forwardTape.css('visibility','hidden');
var path_loader = 'url('+Drupal.settings.add_article.basepath+'/img/hourglass.gif)';
var path_loader2 = 'url('+Drupal.settings.add_article.basepath+'/img/hourglass2.gif)';
$("#back_div").css('background-image',path_loader);
$("#back_div").css('background-repeat','no-repeat');
$("#back_div").css('background-position','center');
$("#forward_div").css('background-image',path_loader2);
$("#forward_div").css('background-repeat','no-repeat');
$("#forward_div").css('background-position','center');
  },
  animate_wait_end:function(self){

	  $("#back_div").css('background-image','none');
$("#forward_div").css('background-image','none');
self.backTape.css('visibility','visible');
		
self.forwardTape.css('visibility','visible');// исчезают
  },
  drawTape: function(self,offset,tempint,temp) {   

     $().animate_wait_begin(self);
	 $.getJSON("tapenews",{'id': offset}, function(data){
		
	$().animate_wait_end(self); 
for(i=0;(i<data.length-2);i=i+4){

		 var i2=i/4;
		var u=parseInt(i2)+offset;
		var uo=u*100;
	self.newsTape.append("<div id='newstape_"+u.toString()+"' class='news_tape_div' style='width: 90px; position: absolute; left: "+uo.toString()+"px;'><div> ");
	 $("#newstape_"+ u.toString()).html(u+'<br>'+data[i]+'<br>'+data[i+1]);//тизеры конечно
	 self.titleHolder[(i/4)+offset]=data[i]; self.textHolder[(i/4)+offset]=data[i+2];
	  self.teaserHolder[(i/4)+offset]=data[i+1]; self.idHolder[(i/4)+offset]=data[i+3];
 
	 


	 }
	 	 self.ultimateLink=-1+offset+(data.length/4);

	if(typeof temp!='undefined'){

	 href=temp+"_"+(self.old_ultimateLink+1);

	href2=temp+"_"+(self.old_ultimateLink-self.step+1);
self.forwardTape.attr('href',href);self.backTape.attr('href',href2);
self.old_ultimateLink=self.ultimateLink;}
	 if((tempint)>self.ultimateLink){ href=temp+"_"+self.ultimateLink;
	var hr2=(self.ultimateLink-self.step);
	if(hr2<0) hr2=0;
	href2=temp+"_"+hr2;
	
self.forwardTape.attr('href',href);self.backTape.attr('href',href2);}


 });
  
$(document).ajaxError(function(oXHR, opt){
    alert("An error occurred!"+oXHR.status);
});


return false;
  },
  deleter: function(self){
temp1=$(this).attr('id');
temp2=temp1.split('_');
$().animate_wait_begin(self);


$.getJSON("tapedel",{'id': self.idHolder[temp2[1]]}, function(data)
	{ 
	$('#newstape_'+temp2[1]).html('');
	$().animate_wait_end(self);
	self.titleHolder.splice(temp2[1], 1);
	self.textHolder.splice(temp2[1], 1);
	self.teaserHolder.splice(temp2[1], 1);
	self.idHolder.splice(temp2[1],1);
	});
 }
  
    });  
 function sliders(backTape, forwardTape, newsTape,title,text,menu,item) {
	 this.old_ultimateLink=14;
	 this.ultimateLink=0;
	 this.menu_flag=0;
	 this.titleHolder;
	 this.textHolder;
	 this.title=$(title);
	 this.text=$(text);
	 this.once=1;
	 this.step=7;
	 this.delete_menu=$(menu);
	this.context_menu_item=$(item);
        this.backTape = $(backTape);
        this.forwardTape = $(forwardTape);
        this.newsTape = $(newsTape);
        
        this._init();
        this.ajaxCaller();
        return this;
    }
     sliders.prototype = {
        _init: function () {
			var self = this;
			
            this.idHolder=new Array();
            this.titleHolder=new Array();
			this.textHolder=new Array();
			this.teaserHolder=new Array();
            this.backTape.attr('href','#newstape_0');
	        this.forwardTape.attr('href','#newstape_7');
            this.backTape.onClicker(self);
            this.forwardTape.onClicker(self);
            this.newsTape.onClicker(self);
            this.newsTape.onTapes(self);

            $('body').addClass("slider_loaded");
            $("#article_preview").on('change',function(){$(this).drawLastTape(self);});
            $(document).on('click',function(){$("#delete_menu").css("visibility","hidden");});//
            $(document).on('contextmenu',function(){self.menu_flag--;if(self.menu_flag==-1)$("#delete_menu").css("visibility","hidden");});//
        },
        ajaxCaller: function() {
         self=this;
         $(this).once("add_article").drawTape(self,self.ultimateLink);
        }
    }

 if(!$('body').hasClass("slider_loaded")) var slider = new sliders("#back_tape","#forward_tape","#news_tape","#article_title_add_art","#edit_add_art_text_value","#delete_menu",".context-menu_item1");  
}
}

})( jQuery );

