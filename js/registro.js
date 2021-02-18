function validar(formulario) {
  var re =/^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

     if(formulario.nombres.value.length < 8){
        var error_nombre= document.getElementById("errornombres")
        error_nombre.innerText=("Su nombre tiene que tener mas de 7 caracteres")

       return false;
     }

     if(!re.test(formulario.email.value)|| formulario.email.value.length < 1 ){
       var error_email= document.getElementById("errorEmail")
       error_email.innerText=("Su email tiene un formato invalido")

      return false;
    }

      if(formulario.contrasena.value.length < 8){
         var error_contraseña= document.getElementById("errorContrasena")
         error_contraseña.innerText=("Su contraseña tiene que tener mas de 7 caracteres")

        return false;
      }

        if(formulario.confirmacion.value.length < 8){
         var error_confirmacion= document.getElementById("errorConfirmacion")
         error_confirmacion.innerText=("Su contraseña no coincide")

        return false;
      }

     if(formulario.tipo.value == 0){

          var error_tipo= document.getElementById("errorTipo")
          error_tipo.innerText=("Necesita seleccionar un tipo")
          return false
     }

    if(!formulario.acepto.checked){
          var error_acepto= document.getElementById("errorAcepto")
          error_acepto.innerText=("Tiene que aseptar los terminos y condiciones")
          return false
    }
    else{
      return true
    }
}
