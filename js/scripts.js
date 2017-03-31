
function result(number){
  for(var index = number; index <= number; index++){
if(index % 5 === 0 && index % 3 === 0 ||index == 0) {
  $("ul").append('<li>' + 'PING-PONG' + "</li>");
  }
 else if (index % 5 === 0 || index == 0) {
  $("ul").append('<li>' +'PONG'+ "</li>");
  }
else if(index % 3 === 0 || index == 0) {
  $("ul").append('<li>' +'PING'+ "</li>");
  }
else{
  $("ul").append("<li>" + index + "</li>");
  }

};
};





$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input= parseInt($("#userNum").val());
    var number= input;
    if(0 >= number){
    alert("Pick Another Number");
  };
  result(number);

  });
});
