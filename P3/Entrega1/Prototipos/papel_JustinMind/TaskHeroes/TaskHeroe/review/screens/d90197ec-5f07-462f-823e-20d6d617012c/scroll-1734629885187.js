(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-d90197ec-5f07-462f-823e-20d6d617012c .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);