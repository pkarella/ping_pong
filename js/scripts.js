











$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input= $("#userNum").val();
    var number=input;

    if( number % 3 && number % 5 ) {
          $("ul").append('<li>' + number+ "</li>");
      } else {
          if( number % 3 === 0 && !number % 5 === 0 && !number % 15 === 0 ) {
          $("ul").append('<li>' +'ping'+ "</li>");
          }
         if( number % 5 === 0 && !number % 3 === 0 && !number % 15 === 0 ) {
          $("ul").append('<li>' +'pong'+ "</li>");
          }
        if ( number % 15 === 0 && !number % 5 === 0 && !number % 3 === 0) {
          $("ul").append('<li>' +'ping pong'+ "</li>");
        }
    };


  });
});




// for (var x=number; x <= 100; x++){
