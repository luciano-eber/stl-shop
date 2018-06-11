$(document).ready(function() {

    $("#my-menu").mmenu({}, {

        offCanvas: {
           pageSelector: "#my-page"
        }
     });

    var API = $("#my-menu").data( "mmenu" );
    let myPanel = $('#my-panel');

    $("#my-button").click(function() {

        $(triggerToggle($(this), API, myPanel));
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
