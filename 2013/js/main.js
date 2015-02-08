jQuery(document).ready(function(){
    setTimeout(function () { 
	jQuery('#parallax .parallax-layer')
	    .parallax({mouseport: jQuery('#spaace')}, {}, {yparallax: '0px', xparallax: '0px'});
    }, 100);
});
