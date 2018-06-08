$(document).ready(function() {

    $("#my-menu").mmenu({
        // options
     }, {
        // configuration
        offCanvas: {
           pageSelector: "#my-page"
        }
     });

    var API = $("#my-menu").data( "mmenu" );

    $("#my-button").click(function() {
        $(triggerToggle( $(this), API.open, API.close ) );
     });
    
});

function triggerToggle(trigger,open,close){

    let status = trigger.attr('status');

    if( status == 'close' ){
        open();
        trigger.attr('status','open');
    } else {
        close();
        trigger.attr('status','close');
    }
}
