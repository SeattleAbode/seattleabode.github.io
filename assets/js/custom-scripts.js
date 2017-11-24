jQuery(document).ready(function(){

  TweenLite.to(window, 1, {scrollTo:{y:0}, ease:Power2.easeInOut});
  var banner = jQuery('.renaissance-header');
  var brand = jQuery('#brand-name');
  var bannerContainer = jQuery('#banner-container');
  var windowWidth = jQuery(window).width();
  var windowHeight = screen.availHeight + 80;
  var headerBackground = jQuery('#masthead.site-header');
console.log(windowHeight);
  jQuery('#wrapper').css('height',windowHeight+100);
  jQuery('#prop-wrap').css('height',windowHeight-100);
  jQuery('#about-us-holder').css('height',windowHeight-200);
  jQuery('#about-us-holder').css('width',windowWidth);
  jQuery('#overlay').css('width',windowWidth);
jQuery('#overlay').css('height',windowHeight);
  // jQuery('#prop-wrap').css('height',windowHeight-100);
  jQuery('#clients-main').css('height',windowHeight-200);
  function setCookie(cname,cvalue,exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("abode");
    if (user != "") {
      console.log('cookie set');
      var tl = new TimelineLite();
      tl.to(["#title-container",'#nav-wrap','#brand-name','#mission-statement','.site-banner',"body",".renaissance-header", headerBackground, '#motto'],.5,{opacity:1, ease: Power2.easeIn })

    } else {
      setCookie("abode",'abode',1);
      // Index (home) page
      var tl = new TimelineLite();
      tl.to('body',.5,{opacity:1, ease: Power2.easeIn })
        .to(".renaissance-header", .5, {opacity:1, ease: Power2.easeIn })
        .to(headerBackground,1,{opacity:1,ease: Power2.easeIn})
      //add second tween at time of 0 seconds
        .to("#title-container", 1, {opacity:1,  ease: Power2.easeIn })
        .to('#nav-wrap',1.5,{opacity:1,  ease: Power2.easeIn })


      //add a label called "end" at a time of 3 seconds
        .add("end", 2)

      // add two tweens at the "end" label
        .to("#brand-name", 2, {opacity:1,  ease: Power2.easeIn }, "end");
      //   .to("#blueBox", 3, {scale:2, rotation:0, opacity:0}, "end");
      // TweenMax.to([banner,titleContainer],3,{opacity:1, ease: Power2.easeIn });
      // TweenMax.to(brand,3,{opacity:1, ease: Power2.easeIn , delay: 1.75});


    }
}
checkCookie();
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
jQuery(this).scrollTop(0);
jQuery('#wrapper','#prop-wrap','#clients-main','#Saxony1-details','#Saxony2-details').css('height',windowHeight);
// jQuery('.renaissance-header').css('height',windowWidth);
jQuery(['#banner-container','#site-banner-container']).css('width',windowWidth);
jQuery('#title-container').css('width',windowWidth);
windowWidth >= '500' ? jQuery('.renaissance-header').css('height',(windowHeight/1)):jQuery('.renaissance-header').css('height',(windowHeight/1)) ;

jQuery(window).on('resize', function(){
  var windowWidth = jQuery(window).width();
  windowWidth >= '500' ? jQuery('.renaissance-header').css('height',(windowHeight/1.20)):jQuery('.renaissance-header').css('height',(windowHeight/1.55)) ;
  jQuery('#title-container').css('width',windowWidth);
  jQuery('#banner-container').css('width',windowWidth);
  jQuery('#wrapper','#prop-wrap','#clients-main').css('height',windowHeight)
  setHeights();
	});
  // jQuery("#about-link").click(function(){
  //   console.log('click');
  // var offset= jQuery("#about-us-holder").offset().top;
  // var $window = jQuery(window);
  // TweenMax.to($window, 1, {
  //     scrollTo:{
  //         y: offset,
  //         autoKill: true
  //     },
  //     ease:Power3.easeOut
  //  });
  // });

var controller = new ScrollMagic.Controller();
var about = TweenMax.to('#wrapper',2,{opacity:1,left:0,  ease: Power2.easeIn });
var exit = TweenMax.to('#wrapper',1,{left:'100%',opacity:0,  ease: Power2.easeIn });
var properties = TweenMax.to('#prop-wrap',1,{opacity:1, ease: Power2.easeIn });
var propertiesExit = TweenMax.to('#prop-wrap',1,{opacity:0, ease: Power2.easeIn });
var clients = TweenMax.to('#clients-main',1,{opacity:1,left:0,ease: Power2.easeOut});
var mountains = TweenMax.to('#about-us-holder',1,{opacity:1, ease: Power2.easeIn});
  var scene = new ScrollMagic.Scene({
  				triggerElement: "#wrapper",
  				triggerHook: 'onEnter',
  				triggerHook:(.9),
  				duration:windowHeight/1.5
          // duration:windowHeight/4
  			})
  			.setTween(about)
  var sceneExit = new ScrollMagic.Scene({
  				triggerElement: "#wrapper",
  				triggerHook: 'onLeave',
  				triggerHook:(.01),
          // duration: '100%', // resposive duration in %
  				duration:windowHeight
  			})
  			.setTween(exit)
  var scene2 = new ScrollMagic.Scene({
  				triggerElement: "#prop-wrap",
  				triggerHook: 'onEnter',
  				triggerHook:(.95),
          reverse: true,
  				duration:windowHeight/1.5
  			})
  			.setTween(properties)
  var scene2exit = new ScrollMagic.Scene({
          triggerElement: "#clients-main",
          triggerHook: 'onEnter',
          triggerHook:(.99),
          // duration: '100%', // resposive duration in %

        })
        .setTween(propertiesExit)
var scene3 = new ScrollMagic.Scene({
          triggerElement: "#clients-main",
          triggerHook: 'onEnter',
          triggerHook:(.99),
          duration:windowHeight/.85
            // duration:windowHeight/4
          // duration: '100%' // resposive duration in %
        })
        .setTween(clients)
var scene4 = new ScrollMagic.Scene({
  triggerElement: "#about-us-holder",
  triggerHook: 'onEnter',
  triggerHook:(.8),
  offset: -500,
  duration:windowHeight/1.8
})
.setTween(mountains)
        controller.addScene([
				scene,
        scene2,
        scene3,
        scene4
        // scene2exit
	     ]);
//HEIGHTS SET
function setHeights(){
var   topA = jQuery('#about-us-holder').offset().top,
      topP = jQuery('#prop-wrap').offset().top,
      topC = jQuery('#clients-main').offset().top;
      setCookie('about',topA, 10000);
      setCookie('prop',topP, 10000);
      setCookie('client',topC, 10000);
}
var heightCount = 0;
if(heightCount == 0){
  setHeights();
  heightCount++
}
//LINKS SCROLL TO
jQuery('.links').on("click", function(e){
  var tl = new TimelineLite();
  var wrapper = jQuery("#wrapper"),
    $menu = jQuery("#menu"),
    $window = jQuery('body');
    e.preventDefault();
    var $this = jQuery(this),
        href = $this.attr("href"),
        id = $this.attr('id'),
        topY = jQuery(href).offset().top;
      if( !getCookie(id)){ setCookie(id,topY,10000)};
        console.log('fdlkn '+getCookie(id));
      tl.to('#back-to',0,{display:'none'})
        .to(['#wrapper' , '#clients-main' , '#prop-wrap'], 0, {opacity:1,ease:Power2.easeIn})
        .to(window, 1, {scrollTo:jQuery(href).offset().top-150, opacity:1,ease:Power2.easeInOut})
        .to(['#Saxony1-details','#Saxony2-details','#Saxony3-details','#Tobira-details','#SV-details'],0,{display:'none'})
        .to(['#about-link','#clients-link'],.5,{opacity:1,visibility:'visible'});


});
jQuery('#overlay').on('click',function(){
  var tl = new TimelineLite();
    tl.to('#overlay',.5,{backgroundColor:'rgba(0,0,0,.5)',zIndex:-9999,ease:Power2.easeIn})
    .to('#prop',.2,{opacity:1,ease:Power2.easeIn})
    .to('#application',.5,{opacity:0,height:0,ease:Power2.easeIn});
});



jQuery('#saxony-link').on('click',function(e){
  e.preventDefault();
  var tl = new TimelineLite();
    tl.to(['#about-link','#clients-link'],0,{opacity:0,ease:Power2.easeIn})
      .to(['#about-link','#clients-link'],0,{visibility:'hidden',ease:Power2.easeIn})
      .to(['#Saxony2-details','#Saxony3-details','#Tobira-details','#SV-details'],0,{display:'none'})
      .to('#Saxony1-details',0,{display:'inline-block'})
      .to('#Saxony1-details',0,{height:windowHeight})
      .to('#Saxony1-details',0,{opacity:1,ease:Power2.easeIn})
      .to(window,1,{scrollTo:jQuery('#Saxony1-details').offset().top,ease:Power2.easeInOut})
      .to('#back-to',0,{display:'inline-block'})
      .to('#back-to',.5,{opacity:1,ease:Power2.easeIn});
});
// jQuery('.apply-btn').on(function() {
//
//     var tl = new TimelineLite();
//     tl.to('#application',1,{height:'33%',opacity:1,ease:Power2.easeIn})
//       .to('#application',1,{opacity:1,ease:Power2.easeIn});
//
// });
jQuery( ".apply-btn" ).toggle(function() {
  var tl = new TimelineLite();
     tl.to('#application',.5,{height:'33%',opacity:1,ease:Power2.easeIn});
}, function() {
  var tl = new TimelineLite();
     tl.to('#application',.5,{height:0,opacity:0,ease:Power2.easeIn});
});
jQuery('#aol_app_submit_button').on('click',function(){
  var tl = new TimelineLite();
     tl.to('#application',1,{height:'10%',ease:Power2.easeIn});
});
// jQuery('.apply-btn').on('click',function(e){
//   e.preventDefault();
//   var tl = new TimelineLite();
//   tl.to('#application',1,{height:'33%',opacity:1,ease:Power2.easeIn})
//     .to('#application',1,{opacity:1,ease:Power2.easeIn});
// }).on('click',function(e){
//   e.preventDefault();
//   var tl = new TimelineLite();
//   tl.to('#application',1,{height:0,opacity:0,ease:Power2.easeIn});
// });

jQuery('#Saxony2-link').on('click',function(e){
  e.preventDefault();
  var tl = new TimelineLite();
    tl.to(['#about-link','#clients-link'],0,{opacity:0,ease:Power2.easeIn})
      .to(['#about-link','#clients-link'],0,{visibility:'hidden',ease:Power2.easeIn})
      .to(['#Saxony1-details','#Saxony3-details','#Tobira-details','#SV-details'],0,{display:'none'})
      .to('#Saxony2-details',0,{display:'inline-block'})
      .to('#Saxony2-details',0,{height:windowHeight,opacity:1})
      .to('#Saxony2-details',0,{opacity:1,ease:Power2.easeIn})
      .to(window,1,{scrollTo:jQuery('#Saxony2-details').offset().top,ease:Power2.easeIn})
      .to('#back-to',0,{display:'inline-block'})
      .to('#back-to',.5,{opacity:1,ease:Power2.easeIn});
});
jQuery('#Saxony3-link').on('click',function(e){
  e.preventDefault();
  var tl = new TimelineLite();
    tl.to(['#about-link','#clients-link'],0,{opacity:0,ease:Power2.easeIn})
      .to(['#about-link','#clients-link'],0,{visibility:'hidden',ease:Power2.easeIn})
      .to(['#Saxony1-details','#Saxony2-details','#Tobira-details','#SV-details'],0,{display:'none'})
      .to('#Saxony3-details',0,{display:'inline-block'})
      .to('#Saxony3-details',0,{height:windowHeight,opacity:1})
      .to('#Saxony3-details',0,{opacity:1,ease:Power2.easeIn})
      .to(window,1,{scrollTo:jQuery('#Saxony3-details').offset().top,ease:Power2.easeIn})
      .to('#back-to',0,{display:'inline-block'})
      .to('#back-to',.5,{opacity:1,ease:Power2.easeIn});
});
jQuery('#Tobira-link').on('click',function(e){
  e.preventDefault();
  var tl = new TimelineLite();
    tl.to(['#about-link','#clients-link'],0,{opacity:0,ease:Power2.easeIn})
      .to(['#about-link','#clients-link'],0,{visibility:'hidden',ease:Power2.easeIn})
      .to(['#Saxony1-details','#Saxony2-details','#Saxony3-details','#SV-details'],0,{display:'none'})
      .to('#Tobira-details',0,{display:'inline-block'})
      .to('#Tobira-details',0,{height:windowHeight,opacity:1})
      .to('#Tobira-details',0,{opacity:1,ease:Power2.easeIn})
      .to(window,1,{scrollTo:jQuery('#Tobira-details').offset().top,ease:Power2.easeIn})
      .to('#back-to',0,{display:'inline-block'})
      .to('#back-to',.5,{opacity:1,ease:Power2.easeIn});
});
jQuery('#Sunset-link').on('click',function(e){
  e.preventDefault();
  var tl = new TimelineLite();
    tl.to(['#about-link','#clients-link'],0,{opacity:0,ease:Power2.easeIn})
      .to(['#about-link','#clients-link'],0,{visibility:'hidden',ease:Power2.easeIn})
      .to(['#Saxony1-details','#Saxony2-details','#Saxony3-details','#Tobira-details'],0,{display:'none'})
      .to('#SV-details',0,{display:'inline-block'})
      .to('#SV-details',0,{height:windowHeight,opacity:1})
      .to('#SV-details',0,{opacity:1,ease:Power2.easeIn})
      .to(window,1,{scrollTo:jQuery('#SV-details').offset().top,ease:Power2.easeIn})
      .to('#back-to',0,{display:'inline-block'})
      .to('#back-to',.5,{opacity:1,ease:Power2.easeIn});
});
  jQuery('.condo1,.condo2,.condo3,.condo4,.condo5').hover(function(){
    var tl = new TimelineLite();
    var content = jQuery(this).children('.prop-content');
    TweenMax.to(content,.5,{top:'100px' });
  },function(){
    var tl = new TimelineLite();
    var content = jQuery(this).children('.prop-content');
    tl.to(content,1,{top:'400px',paddingTop:0,paddingLeft:5,paddingRight:5, ease: Power2.easeOut });
  });

  if ( window.location.pathname == '/renaissance-housing/' ){

  } else {
      // Other page
      console.log(window.location.pathname);

  }


  var domain = document.location.pathname;
  domain.substring(0,'/');
console.log(domain);
//clients icons
jQuery('#clients-main > #clients-container > img').hover(function(){
  var $this = jQuery(this);
  // $this.css('transform','scale(1.2)');
  TweenMax.to($this,.2,{transform:'scale(1.1)',  ease: Power2.easeIn });
},function(){
  var $this = jQuery(this);
  // $this.css('transform','scale(1)');
  TweenMax.to($this,.2,{transform:'scale(1)',  ease: Power2.easeIn });
})


  //CLIENTS PAGE
  jQuery('#client0').css('background-image','url("'+domain+'wp-content/uploads/2017/11/microsoft.png")');
});
