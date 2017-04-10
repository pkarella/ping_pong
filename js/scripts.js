
function result(number){
  var pingArray=[];
  for(var index = 0; index <= number; index++){
    if(number <= 0){
      pingArray.push("Pick Another Number")
      return alert(pingArray);
    }
    if ((index % 5 === 0) && (index % 3 === 0)) {
      pingArray.push("ping-pong");
    }
    else if (index % 5 === 0) {
      pingArray.push("pong");
    }
    else if (index % 3 === 0) {
    pingArray.push("ping");
    }
    else{
    pingArray.push(index);
    }
  };
  return pingArray;
};





$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input= parseInt($("#userNum").val());
    var number= result(input);
    $("#dog").empty();
    number.forEach(function(item) {
      console.log(item)
      $("#dog").append("<li>" + item);
    })
  });
});
