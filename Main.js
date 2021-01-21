
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }




  

$("#BotonEnviar").click(function(){
    var campoVacio="";
    var mensajeError= "";

// varificacion campos vacios

if ($("#email").val() == ""){

    campoVacio = campoVacio+"Email<br>";

}

if ($("#Telefono").val() == ""){

    campoVacio= campoVacio + "Telefono<br>";
}


if ($("#Nombre").val() == ""){
    campoVacio= campoVacio + "ConfirmarPassword<br>";
}


if ($("#ConfirmarPassword").val() == ""){   
    
    campoVacio= campoVacio + "Password<br>";
}


 if ($("#Password").val() == ""){    
   
    campoVacio= campoVacio + "Nombre<br>";
}

if (campoVacio!= ""){

    mensajeError = "<p> Los siguientes campos estan vacios: </p>" + campoVacio+mensajeError;
}

    // Validacion Mail//
if (isEmail($("#email").val()) ==false)
{
    mensajeError = mensajeError + "<p>Tu mail esta mal</p>";

}  

    //Validacion Numero en telefono//
if ($.isNumeric($("#Telefono").val()) ==false)
{
    mensajeError = mensajeError+"<p> Tu telefono esta mal </p>"

}  

if ($("#Password").val()!= $("#ConfirmarPassword").val()) 
{
    mensajeError = mensajeError + "<p> Las contraseñas no coinciden </p>"

}
    

if (mensajeError!= ""){

    $("#MensajeErrorCampos").html(mensajeError);
    
}

else {

    $("#MensajeExisto").html("<p>Registro Exitoso </p> ");

}
}
)