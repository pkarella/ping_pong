












$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input= $("#userNum").val();
    var result =ping(input);
    function ping(number){
      if( number % 3 && number % 5 ) {
            $("ul").append('<li>' + number+ "</li>");
        } else {
            if( x % 3 == 0 ) {
                ('li').text("ping");
            }
            if( x % 5 == 0 ) {
                ('li').text("pong");
            }
    };






    result();
  });
});




// for (var x=number; x <= 100; x++){
