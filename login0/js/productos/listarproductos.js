//$(document).ready(function () {
//carga la librería javascript de jquery cuando se carga la página barcos.html por completo
//cuando carga la página html se ejecuta la función: listar()
$(document).ready(function () {
    //configura el aspecto inicial de la pagina
    estadoInicial();
    //ejecuta función para enviar petición al ws
    listar();
});

//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo GET
function listar() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://localhost:8080/api/accessory/all",
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //recibe el arreglo 'items' de la respuesta a la petición
            listarProductos(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado productos...");
            $("#mensajes").hide(1000);
        }
    });
}

/* 
    Esta función se encarga de recorrer el listado de datos 'items' recibido como parametro,
    construir una tabla html en la variable javascript 'tabla',
    acceder al elemento elemento identificado con el id 'listado'
    y modificar su html agregando el contenido de la variable 'tabla'.
    
*/
function listarProductos(items){
    $("#listado").html("");
    $("#listado").show(500);

    let tabla = `<table class="table table-bordered border-primary mt-5">
                <thead>
                  <tr>
                    <th>Referencia</th>
                    <th>Categoría</th>
                    <th>Marca</th>
                    <th>Descripción</th>
                    <th>Disponibilidad</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
    //escribe en la consola del desarrollador para efectos de depuración
    console.log(items);

    //recorrer el arreglo de items de producto para pintarlos en la tabla
    for (let index = 0; index < items.length; index++) {

        let texto = `<strong>Referencia:</strong> ${items[index].reference}</br><strong>Descripción:</strong> ${items[index].description}`;
        
        tabla +=`<tr>
                  <td>${items[index].reference}</td>
                   <td>${items[index].category}</td>
                   <td>${items[index].brand}</td>
                   <td>${items[index].description}</td>
                   <td>${items[index].availability}</td>
                   <td>${items[index].price}</td>
                   <td><img class="img-thumbnail" src="${items[index].photography}" class="img-fluid"/></td>
                   <td><button onclick="editarRegistro(${items[index].reference})">Editar</button></td>
                   <td><button onclick="mostrarEliminar('${items[index].reference}','${texto}')">Borrar</button></td>
                    </td>
                   </tr>`;     
    }

    //cierra tabla agregando el tag adecuado
    tabla +=`</thead></table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);

}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)
    $("#eliminar").hide(); 
    $("#idDelete").hide();

    //limpia el contenido de los campos del formulario nuevo
    /* $("#brand").val(""),
    $("#year").val(""),
    $("#category").val(""),
    $("#description").val(""),
    $("#name").val("") */

    //ejecuta función para enviar petición al ws
    //listar();
}