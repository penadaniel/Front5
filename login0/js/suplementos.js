//$(document).ready(function () {
//carga la librería javascript de jquery cuando se carga la página barcos.html por completo
//cuando carga la página html se ejecuta la función: listar()
$(document).ready(function () {
    //configura el aspecto inicial de la pagina
    estadoInicial();
});

/**
 * Regresa la interfaz gráfica a su estado incial
 */
function estadoInicial() {
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)
    $("#eliminar").hide();
    $("#idDelete").hide();
    //ejecuta función para enviar petición al ws
    listar();
}

function listar() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://localhost:8080/api/supplements/all",

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            //recibe el arreglo 'items' de la respuesta a la petición
            listarRespuesta(respuesta);
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
            $("#mensajes").html("Obteniendo listado suplementos...");
            $("#mensajes").hide(1000);
        }
    });
}

function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show(500);

    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var tabla = `<table border="1">
                  <tr>
                  <th>reference</th>
                  <th>brand</th>
                  <th>category</th>
                  <th>objetivo</th>
                  <th>availability</th>
                  <th>price</th>
                  <th>Imagen</th>
                  <th colspan="2">Acciones</th>
                  </tr>`;

    for (var i = 0; i < items.length; i++) {
        var texto = `<strong>Nombre:</strong> ${items[i].reference}</br><strong>Descripción:</strong> ${items[i].description}`;

        tabla += `<tr>
                    <td>${items[i].reference}</td>
                    <td>${items[i].brand}</td>
                    <td>${items[i].category}</td>
                    <td>${items[i].objetivo}</td>
                    <td>${items[i].availability}</td>
                    <td>${items[i].price}</td>
                    <td>${items[i].photography}</td>
                    <td>
                        
                    </td>
                    <td>
                    
                    </td>
                    </tr>`;
                //<button onclick="editarRegistro(${items[i].id})">Editar</button>
                //<button onclick="mostrarEliminar(${items[i].id},'${texto}')">Borrar</button>

    }

    //cierra tabla agregando el tag adecuado
    tabla += `</table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);

}

