$(document).ready(function () {

  $.get("../info.json", function(data){
      var eventos_futuros=[];

      data.eventos.forEach(arreglo => {

        if(arreglo.fecha > data.fechaActual){
            eventos_futuros.push(arreglo)
        }

      });

      eventos_futuros = eventos_futuros.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });



      for (var sec=0;eventos_futuros.length > sec ;sec ++){
        $("#cont_recientes").append(`

        <div class="col-12 mx-md-auto my-3  col-md-7 bg-light border border-dark rounded p-0 py-3">
        <div class="col-12 border-bottom border-dark  ">
        <a href="detalle.html?id=${eventos_futuros[sec].id}"><h3 class="mx-auto ">${eventos_futuros[sec].nombre}</h3></a>
        </div>

        <div class="col-12 py-2 text-justify">
          <p>${eventos_futuros[sec].descripcion}</p>
          <p>Precio: ${eventos_futuros[sec].precio}</p>
          <p> <small class="text-muted">Fecha: ${eventos_futuros[sec].fecha}  Lugar: ${eventos_futuros[sec].lugar}</small></p>
        </div>

      </div>



      `)}


  })

});
