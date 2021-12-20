/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validar(){
    //obtiene valores
    let reference = $("#reference").val();
    let brand = $("#brand").val();
    let category = $("#category").val();
    let material =  $("#material").val();
    let description = $("#description").val();
    let availability = $("#availability").val();
    let price = $("#price").val();
    let quantity = $("#quantity").val();
    let photography = $("#photography").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(reference)) {
        errores="Debe ingresar la referencia<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#reference").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(material)) {  
        errores="Debe ingresar el objetivo<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#material").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }
    else if( validaesVacio(availability)) { 
        errores="Debe ingresar la disponibilidad<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#availability").focus();
        return false;
    }
    else if( validaesVacio(price)) { 
        errores="Debe ingresar el precio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#price").focus();
        return false;
    }
    else if( validaesVacio(quantity)) { 
        errores="Debe ingresar la cantidad<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#quantity").focus();
        return false;
    }
    else if( validaesVacio(photography)) { 
        errores="Debe ingresar la imagen<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#photography").focus();
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

