



$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input= parseInt($("#userNum").val());
    var number=input;

    for(var index =number; index<=number; index++){
    if(index % 5 === 0 && index % 3 === 0) {
      $("ul").append('<li>' + 'ping-pong' + "</li>");
      }
     else if (index % 5 === 0) {
      $("ul").append('<li>' +'ping pong'+ "</li>");
      }
   else if(index % 3 === 0) {
      $("ul").append('<li>' +'ping'+ "</li>");
      }
    else{
      $("ul").append("<li>" + index + "</li>");
      }

};


  });
});
