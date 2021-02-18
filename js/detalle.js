function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var prodId = getParameterByName('id');


$(document).ready(function () {

  $.get("../info.json", function(data){
    var evento=[];

    data.eventos.forEach(arreglo => {

      if(arreglo.id == prodId){
          evento.push(arreglo)
      }else{return false}

    });





      $("#detalles").append(`

      <div class="col-12 mx-md-auto my-3  col-md-7 bg-light border border-dark rounded p-0 py-3">
      <div class="col-12 border-bottom border-dark  ">
      <h3 class="mx-auto ">${evento[0].nombre}</h3>
      </div>

      <div class="col-12 py-2 text-justify">
        <p>${evento[0].descripcion}</p>
        <p>Invitados: ${evento[0].invitados}</p>
        <p>Precio: ${evento[0].precio}</p>
        <p> <small class="text-muted">Fecha: ${evento[0].fecha}  Lugar: ${evento[0].lugar}</small></p>
      </div>

    </div>
    `)





  });

})


