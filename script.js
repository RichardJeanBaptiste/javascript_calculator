$( document ).ready(function(){

$("button").click(function() {
  var text = $(this).text();
  if( text === "="){
  var equation  = $("#disabledInput").val();
  var answer = eval(equation);
  $("#disabledInput").val(answer);
  
  }else if(text === "*" || text === "/" || text === "-"){
    $("#disabledInput").val($("#disabledInput").val() + text);
  }else if(text === "ce"){
    console.log("ce");
  }else{
  	$("#disabledInput").val($("#disabledInput").val() + text);
  }
});

$("#btn1").click(function(){
   $("#disabledInput").val("");
});

$("#btn2").click(function(){
   var myInput = $("#disabledInput").val();
   var newInput = myInput.slice(0,-1);
   $("#disabledInput").val(newInput);
});
   

});
 
