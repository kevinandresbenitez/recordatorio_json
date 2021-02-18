$(document).ready(function () {

  $.get("../info.json", function(data){


      var eventos_futuros=[];
      var eventos_pasados=[];

      data.eventos.forEach(arreglo => {

        if(arreglo.fecha > data.fechaActual){
            eventos_futuros.push(arreglo)
        }
        else if(arreglo.fecha < data.fechaActual){
            eventos_pasados.push(arreglo)
        }
      });

      eventos_futuros = eventos_futuros.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });
      eventos_pasados= eventos_pasados.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });



      for (var sec=0;eventos_futuros.length > sec && sec < 2;sec ++){
        $("#cont_recientes").append(`

        <div class="col-12 m-md-auto mb-3 mb-md-auto col-md-5 bg-light border border-dark rounded p-0 py-3">
        <div class="col-12 border-bottom border-dark  ">
          <a href="/detalle.html?id=${eventos_futuros[sec].id}"><h3 class="mx-auto ">${eventos_futuros[sec].nombre}</h3></a>
        </div>

        <div class="col-12 py-2 text-justify">
          <p>${eventos_futuros[sec].descripcion}</p>
          <p> <small class="text-muted">${eventos_futuros[sec].fecha}</small></p>
        </div>

      </div>



      `)}

      for (var sec=0;eventos_pasados.length > sec && sec < 2;sec ++){
        $("#cont_pasados").append(`

        <div class="col-12 m-md-auto mb-3 mb-md-auto col-md-5 bg-light border border-dark rounded p-0 py-3">
        <div class="col-12 border-bottom border-dark  ">
          <a href="detalle.html?id=${eventos_pasados[sec].id}"><h3 class="mx-auto ">${eventos_pasados[sec].nombre}</h3></a>
        </div>

        <div class="col-12 py-2 text-justify">
          <p>${eventos_pasados[sec].descripcion}</p>
          <p> <small class="text-muted">${eventos_pasados[sec].fecha}</small></p>
        </div>

      </div>



      `)}




      







  })

});
