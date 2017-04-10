
function result(number){
  var pingArray=[];
  for(var index = number; index <= number; index++){
    if(0 >= number){
    alert("Pick Another Number");
  }
else if(index % 5 === 0 && index % 3 === 0) {
  pingArray.push("ping-pong");
  }
 else if (index % 5 === 0) {
  pingArray.push("pong");
  }
else if(index % 3 === 0) {
pingArray.push("ping");
  }
else{
pingArray.push(index);
  }
  return pingArray;
console.log(pingArray);
};
};





$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var input= parseInt($("#userNum").val());
    var number= result(input);


  $("#dog").text(number);


  });
});
