$(document).ready(function () {

  $.get("../info.json", function(data){
      var eventos_pasados=[];

      data.eventos.forEach(arreglo => {

        if(arreglo.fecha < data.fechaActual){
            eventos_pasados.push(arreglo)
        }

      });

      eventos_pasados = eventos_pasados.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });



      for (var sec=0;eventos_pasados.length > sec ;sec ++){
        $("#cont_pasados").append(`

        <div class="col-12 mx-md-auto my-3  col-md-7 bg-light border border-dark rounded p-0 py-3">
        <div class="col-12 border-bottom border-dark  ">
        <a href="detalle.html?id=${eventos_pasados[sec].id}"><h3 class="mx-auto ">${eventos_pasados[sec].nombre}</h3></a>
        </div>

        <div class="col-12 py-2 text-justify">
          <p>${eventos_pasados[sec].descripcion}</p>
          <p>Precio: ${eventos_pasados[sec].precio}</p>
          <p> <small class="text-muted">Fecha: ${eventos_pasados[sec].fecha}  Lugar: ${eventos_pasados[sec].lugar}</small></p>

        </div>

      </div>



      `)}


  })

});
