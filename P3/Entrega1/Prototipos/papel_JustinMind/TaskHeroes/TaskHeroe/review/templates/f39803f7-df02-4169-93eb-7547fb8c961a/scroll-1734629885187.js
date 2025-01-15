(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery("div[class*='t-f39803f7-df02-4169-93eb-7547fb8c961a']:not([class*=' s-']) .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);