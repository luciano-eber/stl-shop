$(document).ready(function() {

    let $myMenu = $('#my-menu');

    $myMenu.mmenu({
        slidingSubmenus: false,
    }, {
        
        offCanvas: {
           pageSelector: "#my-page"
        },
        
     });


    var API = $myMenu.data( "mmenu" );


    $("#my-button").click(function() {

        $(triggerToggle($(this), API, $myMenu));
     });
    
});

function triggerToggle(trigger,api,panel){

    let status = trigger.attr('status');

    if( status == 'close' ){

        api.openPanel(panel);
        trigger.attr('status','open');

    } else {

        api.close(panel);
        trigger.attr('status','close');
    }
}
