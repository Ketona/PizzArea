$(function() {
      $( "#flower" ).selectmenu();
  	  $( "#date" ).datepicker();
   
      $( "#number" )
        .selectmenu()
        .selectmenu( "menuWidget" )
          .addClass( "overflow" );

      $(function() {
        $( "#address" ).resizable({
          animate: true
        });
      });

      $('input').addClass("ui-corner-all");

  		$( "input[type=submit], a, button" )
        .button()
        .click(function( event ) {
          event.preventDefault();
        });
    });