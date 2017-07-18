/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 



// ----------------------------------------------------------------------------
// Vegas - jQuery plugin 
// Add awesome fullscreen backgrounds to your webpages.
// v 1.2
// Dual licensed under the MIT and GPL licenses.
// http://vegas.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files ( the "Software" ), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------
( function( $ ){
    var $background = $( '<img />' ).addClass( 'vegas-background' ),
        $overlay    = $( '<div />' ).addClass( 'vegas-overlay' ),
        $loading    = $( '<div />' ).addClass( 'vegas-loading' ),
        $current    = $(),
        paused = null,
        backgrounds = [],
        step = 0,
		delay = 5000,
        timer,
        methods = {

        // Init plugin
        init : function( settings ) {

            var options = {
                src: getBackground(),
                align: 'center',
                valign: 'center',
                fade: 0,
                loading: true,
                load: function() {},
                complete: function() {}
            }
            $.extend( options, $.vegas.defaults.background, settings );

            if ( options.loading ) {
                loading();
            }

            var $new = $background.clone();
            $new.css( {
                'position': 'fixed',
                'left': '0px',
                'top': '0px'
            })
            .imagesLoadedForVegas( function() {
                if ( $new == $current ) {
                    return;
                }
                
                $( window ).bind( 'resize.vegas', function( e ) {
                    resize( $new, options );
                });

                if ( $current.is( 'img' ) ) {

                    $current.stop();

                    $new.hide()
                        .insertAfter( $current )
                        .fadeIn( options.fade, function() {
                            $('.vegas-background')
                                .not(this)
                                    .remove();
                            $( 'body' ).trigger( 'vegascomplete', [ this, step - 1 ] );
                            options.complete.apply( $new, [ step - 1 ] );
                        });
                } else {
                    $new.hide()
                        .prependTo( 'body' )
                        .fadeIn( options.fade, function() {
                            $( 'body' ).trigger( 'vegascomplete', [ this, step - 1 ] );
                            options.complete.apply( this, [ step - 1 ] );    
                        });
                }

                $current = $new;

                resize( $current, options );

                if ( options.loading ) {
                    loaded();
                }

                $( 'body' ).trigger( 'vegasload', [ $current.get(0), step - 1 ] );
                options.load.apply( $current.get(0), [ step - 1 ] );

                if ( step ) {
                    $( 'body' ).trigger( 'vegaswalk', [ $current.get(0), step - 1 ] );
                    options.walk.apply( $current.get(0), [ step - 1 ] );
                }
            })
            .attr( 'src', options.src );

            return $.vegas;
        },

        // Destroy background and/or overlay
        destroy: function( what ) {
            if ( !what || what == 'background') {
                $( '.vegas-background, .vegas-loading' ).remove();
                $( window ).unbind( 'resize.vegas' );
                $current = null;
            }

            if ( what == 'overlay') {
                $( '.vegas-overlay' ).remove();
            }

            return $.vegas;
        },

        // Display the pattern overlay
        overlay: function( settings ) {
            var options = {
                src: null,
                opacity: null
            };
            $.extend( options, $.vegas.defaults.overlay, settings );

            $overlay.remove();

            $overlay
                .css( {
                    'margin': '0',
                    'padding': '0',
                    'position': 'fixed',
                    'left': '0px',
                    'top': '0px',
                    'width': '100%',
                    'height': '100%'
            });

            if ( options.src ) {
                $overlay.css( 'backgroundImage', 'url(' + options.src + ')' );
            }

            if ( options.opacity ) {
                $overlay.css( 'opacity', options.opacity );
            }

            $overlay.prependTo( 'body' );

            return $.vegas;
        },

        // Start/restart slideshow
        slideshow: function( settings, keepPause ) {
            var options = {
                step: step,
                delay: delay,
                preload: false,
                backgrounds: backgrounds,
                walk: function() {}
            };
            
            $.extend( options, $.vegas.defaults.slideshow, settings );
                        
            if ( options.backgrounds != backgrounds ) {
                if ( !settings.step ) {
                    options.step = 0;
                }

                if ( options.preload ) {
                    $.vegas( 'preload', options.backgrounds );
                }
            }

            backgrounds = options.backgrounds;
			delay = options.delay;
            step = options.step;

            clearInterval( timer );

            if ( !backgrounds.length ) {
                return $.vegas;
            }

            var doSlideshow = function() {
                if ( step < 0 ) {
                    step = backgrounds.length - 1;
                }

                if ( step >= backgrounds.length || !backgrounds[ step - 1 ] ) {
                    step = 0;
                }

                var settings = backgrounds[ step++ ];
                settings.walk = options.walk;

                if ( settings.fade > options.delay ) {
                    settings.fade = options.delay;
                }

                $.vegas( settings );
            }
            doSlideshow();

            if ( !keepPause ) {
                paused = false;
                
                $( 'body' ).trigger( 'vegasstart', [ $current.get(0), step - 1 ] );
            }

            if ( !paused ) {
                timer = setInterval( doSlideshow, options.delay );
            }

            return $.vegas;
        },

        // Jump to the next background in the current slideshow
        next: function() {
            var from = step;

            if ( step ) {
                $.vegas( 'slideshow', { step: step }, true );

                $( 'body' ).trigger( 'vegasnext', [ $current.get(0), step - 1, from - 1 ] );
            }

            return $.vegas;
        },

        // Jump to the previous background in the current slideshow
        previous: function() {
            var from = step;

            if ( step ) {
                $.vegas( 'slideshow', { step: step - 2 }, true );

                $( 'body' ).trigger( 'vegasprevious', [ $current.get(0), step - 1, from - 1 ] );
            }

            return $.vegas;
        },

        // Jump to a specific background in the current slideshow
        jump: function( s ) {
            var from = step;

            if ( step ) {
                $.vegas( 'slideshow', { step: s }, true );

                $( 'body' ).trigger( 'vegasjump', [ $current.get(0), step - 1, from - 1 ] );
            }

            return $.vegas;
        },

        // Stop slideshow
        stop: function() {
            var from = step;
            step = 0;
            paused = null;
            clearInterval( timer );

            $( 'body' ).trigger( 'vegasstop', [ $current.get(0), from - 1 ] );

            return $.vegas;
        },

        // Pause slideShow
        pause: function() {
            paused = true;
            clearInterval( timer );

            $( 'body' ).trigger( 'vegaspause', [ $current.get(0), step - 1 ] );

            return $.vegas;
        },

        // Get some useful values or objects
        get: function( what ) {
            if ( what == null || what == 'background' ) {
                return $current.get(0);
            }

            if ( what == 'overlay' ) {
                return $overlay.get(0);
            }

            if ( what == 'step' ) {
                return step - 1;
            }

            if ( what == 'paused' ) {
                return paused;
            }
        },
        
        // Preload an array of backgrounds
        preload: function( backgrounds ) {
            for( var i in backgrounds ) {
                if ( backgrounds[ i ].src ) {
                    $('<img src="' + backgrounds[ i ].src + '">');
                }
            }

            return $.vegas;
        }
    }

    // Resize the background
    function resize( $img, settings ) {
        var options =  {
            align: 'center',
            valign: 'center'
        }
        $.extend( options, settings );

        var ww = $( window ).width(),
            wh = $( window ).height(),
            iw = $img.width(),
            ih = $img.height(),
            rw = wh / ww,
            ri = ih / iw,
            newWidth, newHeight,
            newLeft, newTop,
            properties;

        if ( rw > ri ) {
            newWidth = wh / ri;
            newHeight = wh;
        } else {
            newWidth = ww;
            newHeight = ww * ri;
        }

        properties = {
            'width': newWidth + 'px',
            'height': newHeight + 'px',
			'top': 'auto',
			'bottom': 'auto',
			'left': 'auto',
			'right': 'auto'			
        }

        if ( !isNaN( parseInt( options.valign ) ) ) {
            properties[ 'top' ] = ( 0 - ( newHeight - wh ) / 100 * parseInt( options.valign ) ) + 'px';
        } else if ( options.valign == 'top' ) {
            properties[ 'top' ] = 0;
        } else if ( options.valign == 'bottom' ) {
            properties[ 'bottom' ] = 0;
        } else {
            properties[ 'top' ] = ( wh - newHeight ) / 2;
        } 

        if ( !isNaN( parseInt( options.align ) ) ) {
            properties[ 'left' ] = ( 0 - ( newWidth - ww ) / 100 * parseInt( options.align ) ) + 'px';
        } else if ( options.align == 'left' ) {
            properties[ 'left' ] = 0;
        } else if ( options.align == 'right' ) {
            properties[ 'right' ] = 0;
        } else {
            properties[ 'left' ] = ( ww - newWidth ) / 2 ;
        }

        $img.css( properties );
    }

    // Display the loading indicator
    function loading() {
        $loading.prependTo( 'body' ).fadeIn();
    }

    // Hide the loading indicator
    function loaded() {
        $loading.fadeOut( 'fast', function() {
            $( this ).remove();
        });
    }

    // Get the background image from the body
    function getBackground() {
        if ( $( 'body' ).css( 'backgroundImage' ) ) {
            return $( 'body' ).css( 'backgroundImage' ).replace( /url\("?(.*?)"?\)/i, '$1' );
        }
    }

    // The plugin
    $.vegas = function( method ) {
        if ( methods[ method ] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist' );
        }
    };

    // Global parameters
    $.vegas.defaults = {
        background: {
            // src:         string
            // align:       string/int
            // valign:      string/int
            // fade:        int
            // loading      bool
            // load:        function
            // complete:    function
        },
        slideshow: {
            // step:        int
            // delay:       int
            // backgrounds: array
            // preload:     bool
            // walk:        function
        },
        overlay: {
            // src:         string
            // opacity:     float
        }
    }

    /*!
     * jQuery imagesLoaded plugin v1.0.3
     * http://github.com/desandro/imagesloaded
     *
     * MIT License. by Paul Irish et al.
     */
    $.fn.imagesLoadedForVegas = function( callback ) {
        var $this = this,
            $images = $this.find('img').add( $this.filter('img') ),
            len = $images.length,
            blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

        function triggerCallback() {
          callback.call( $this, $images );
        }

        function imgLoaded() {
          if ( --len <= 0 && this.src !== blank ){
            setTimeout( triggerCallback );
            $images.unbind( 'load error', imgLoaded );
          }
        }

        if ( !len ) {
          triggerCallback();
        }

        $images.bind( 'load error',  imgLoaded ).each( function() {
          // cached images don't fire load sometimes, so we reset src.
          if (this.complete || this.complete === undefined){
            var src = this.src;
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            // data uri bypasses webkit log warning (thx doug jones)
            this.src = blank;
            this.src = src;
          }
        });

        return $this;
      };
})( jQuery );

/*
 * CrossSlide jQuery plugin v0.6.2
 *
 * Copyright 2007-2010 by Tobia Conforto <tobia.conforto@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
(function(){var d=jQuery,a=(d.fn.startAnimation?"startAnimation":"animate"),c="pause plugin missing.";function e(h){for(var g=1;g<arguments.length;g++){h=h.replace(new RegExp("\\{"+(g-1)+"}","g"),arguments[g])}return h}function f(){arguments[0]="CrossSlide: "+arguments[0];throw new Error(e.apply(null,arguments))}function b(i){var g=1;var h=i.replace(/^\s*|\s*$/g,"").split(/\s+/);if(h.length>3){throw new Error()}if(h[0]=="center"){if(h.length==1){h=["center","center"]}else{if(h.length==2&&h[1].match(/^[\d.]+x$/i)){h=["center","center",h[1]]}}}if(h.length==3){g=parseFloat(h[2].match(/^([\d.]+)x$/i)[1])}var j=h[0]+" "+h[1];if(j=="left top"||j=="top left"){return{xrel:0,yrel:0,zoom:g}}if(j=="left center"||j=="center left"){return{xrel:0,yrel:0.5,zoom:g}}if(j=="left bottom"||j=="bottom left"){return{xrel:0,yrel:1,zoom:g}}if(j=="center top"||j=="top center"){return{xrel:0.5,yrel:0,zoom:g}}if(j=="center center"){return{xrel:0.5,yrel:0.5,zoom:g}}if(j=="center bottom"||j=="bottom center"){return{xrel:0.5,yrel:1,zoom:g}}if(j=="right top"||j=="top right"){return{xrel:1,yrel:0,zoom:g}}if(j=="right center"||j=="center right"){return{xrel:1,yrel:0.5,zoom:g}}if(j=="right bottom"||j=="bottom right"){return{xrel:1,yrel:1,zoom:g}}return{xrel:parseInt(h[0].match(/^(\d+)%$/)[1])/100,yrel:parseInt(h[1].match(/^(\d+)%$/)[1])/100,zoom:g}}d.fn.crossSlide=function(i,k,l){var g=this,j=this.width(),h=this.height();if(g.length!=1){f("crossSlide() must be called on exactly 1 element")}g.get(0).crossSlideArgs=[i,k,l];k=d.map(k,function(m){return d.extend({},m)});if(!i.easing){i.easing=i.variant?"swing":"linear"}if(!l){l=function(){}}(function(o){var m=0;function n(q,p){p.onload=function(r){m++;k[q].width=p.width;k[q].height=p.height;if(m==k.length){o()}};p.src=k[q].src;if(q+1<k.length){n(q+1,new Image())}}n(0,new Image())})(function(){if(!i.fade){f("missing fade parameter.")}if(i.speed&&i.sleep){f("you cannot set both speed and sleep at the same time.")}var A=Math.round(i.fade*1000);if(i.sleep){var z=Math.round(i.sleep*1000)}if(i.speed){var o=i.speed/1000,v=Math.round(A*o)}g.empty().css({overflow:"hidden",padding:0});if(!/^(absolute|relative|fixed)$/.test(g.css("position"))){g.css({position:"relative"})}if(!g.width()||!g.height()){f("container element does not have its own width and height")}if(i.shuffle){k.sort(function(){return Math.random()-0.5})}for(var t=0;t<k.length;++t){var m=k[t];if(!m.src){f("missing src parameter in picture {0}.",t+1)}if(o){switch(m.dir){case"up":m.from={xrel:0.5,yrel:0,zoom:1};m.to={xrel:0.5,yrel:1,zoom:1};var x=m.height-h-2*v;break;case"down":m.from={xrel:0.5,yrel:1,zoom:1};m.to={xrel:0.5,yrel:0,zoom:1};var x=m.height-h-2*v;break;case"left":m.from={xrel:0,yrel:0.5,zoom:1};m.to={xrel:1,yrel:0.5,zoom:1};var x=m.width-j-2*v;break;case"right":m.from={xrel:1,yrel:0.5,zoom:1};m.to={xrel:0,yrel:0.5,zoom:1};var x=m.width-j-2*v;break;default:f("missing or malformed dir parameter in picture {0}.",t+1)}if(x<=0){f("impossible animation: either picture {0} is too small or div is too large or fade duration too long.",t+1)}m.time_ms=Math.round(x/o)}else{if(!z){if(!m.from||!m.to||!m.time){f("missing either speed/sleep option, or from/to/time params in picture {0}.",t+1)}try{m.from=b(m.from)}catch(w){f('malformed "from" parameter in picture {0}.',t+1)}try{m.to=b(m.to)}catch(w){f('malformed "to" parameter in picture {0}.',t+1)}if(!m.time){f('missing "time" parameter in picture {0}.',t+1)}m.time_ms=Math.round(m.time*1000)}}if(m.from){d.each([m.from,m.to],function(p,C){C.width=Math.round(m.width*C.zoom);C.height=Math.round(m.height*C.zoom);C.left=Math.round((j-C.width)*C.xrel);C.top=Math.round((h-C.height)*C.yrel)})}var s,y;y=s=d(e('<img src="{0}"/>',m.src));if(m.href){y=d(e('<a href="{0}"></a>',m.href)).append(s)}if(m.onclick){y.click(m.onclick)}if(m.alt){s.attr("alt",m.alt)}if(m.rel){y.attr("rel",m.rel)}if(m.href&&m.target){y.attr("target",m.target)}y.appendTo(g)}delete o;function n(D,C){var E=[0,A/(D.time_ms+2*A),1-A/(D.time_ms+2*A),1][C];return{left:Math.round(D.from.left+E*(D.to.left-D.from.left)),top:Math.round(D.from.top+E*(D.to.top-D.from.top)),width:Math.round(D.from.width+E*(D.to.width-D.from.width)),height:Math.round(D.from.height+E*(D.to.height-D.from.height))}}var u=g.find("img").css({position:"absolute",visibility:"hidden",top:0,left:0,border:0});u.eq(0).css({visibility:"visible"});if(!z){u.eq(0).css(n(k[0],i.variant?0:1))}var B=i.loop;function q(O,p){if(O%2==0){if(z){var E=O/2,S=(E-1+k.length)%k.length,P=u.eq(E),M=u.eq(S);var L=function(){l(E,P.get(0));M.css("visibility","hidden");setTimeout(p,z)}}else{var H=O/2,S=(H-1+k.length)%k.length,R=u.eq(H),M=u.eq(S),F=k[H].time_ms,N=n(k[H],i.variant?3:2);var L=function(){l(H,R.get(0));M.css("visibility","hidden");R[a](N,F,i.easing,p)}}}else{var D=Math.floor(O/2),G=Math.ceil(O/2)%k.length,Q=u.eq(D),C=u.eq(G),T={},K={visibility:"visible"},J={};if(G>D){K.opacity=0;J.opacity=1;if(i.doubleFade){T.opacity=0}}else{T.opacity=0;if(i.doubleFade){K.opacity=0;J.opacity=1}}if(!z){d.extend(K,n(k[G],0));if(!i.variant){d.extend(T,n(k[D],3));d.extend(J,n(k[G],1))}}if(d.isEmptyObject(J)){var L=function(){l(G,C.get(0),D,Q.get(0));C.css(K);Q[a](T,A,"linear",p)}}else{if(d.isEmptyObject(T)){var L=function(){l(G,C.get(0),D,Q.get(0));C.css(K);C[a](J,A,"linear",p)}}else{var L=function(){l(G,C.get(0),D,Q.get(0));C.css(K);C[a](J,A,"linear");Q[a](T,A,"linear",p)}}}}if(i.loop&&O==k.length*2-2){var I=L;L=function(){if(--B){I()}}}if(O>0){return q(O-1,L)}else{return L}}var r=q(k.length*2-1,function(){return r()});r()});return g};d.fn.crossSlideFreeze=function(){this.find("img").stop()};d.fn.crossSlideStop=function(){this.find("img").stop().remove()};d.fn.crossSlideRestart=function(){this.find("img").stop().remove();d.fn.crossSlide.apply(this,this.get(0).crossSlideArgs)};d.fn.crossSlidePause=function(){if(!d.fn.pause){f(c)}this.find("img").pause()};d.fn.crossSlideResume=function(){if(!d.fn.pause){f(c)}this.find("img").resume()}})();


 
 
