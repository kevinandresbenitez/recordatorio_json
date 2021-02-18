$(document).ready(function () {
  console.log("hola")
  $.get("../info.json", function(data){
    console.log(data);
  })

});
