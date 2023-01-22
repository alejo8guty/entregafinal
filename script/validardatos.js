//variables de registro
const formRegistro = document.querySelector("#registro")
const formContacto = document.querySelector("#contactoForm")


const nuevoUser = document.querySelector(".nuevo-user")
const nuevoPass = document.querySelector(".nuevo-pass")





function tienearroba(usuarioEmail)
{

let accarroba = 0
  
for ( let i = 0; i < usuarioEmail.length; i++ ) { 
  
   if ( usuarioEmail[i].match(/[@]/)) {
    
        accarroba=accarroba+1     
       
    }
}

if (accarroba==0)
{
    alert("Debe ingresar un usuario un email con @ arroba")
    return false
}
else
    {
    return true
    }

}


function passwordAlfanumerico(usuarioPassword){

        let accnumero = 0

        for ( let i = 0; i < usuarioPassword.length; i++ )
         { 
           if ( usuarioPassword[i].match(/[0123456789]/)) {
            accnumero = accnumero + 1 }
        }
        //console.log(accnumero)

        if (accnumero==0) 
        {
        
        alert("Elige otra password por que este no tiene al menos un numero del 0 al 9")
        return false
        }
        else
        {
            return true
        }
    }



function passwordCantidad(usuarioPassword){

    
            if (usuarioPassword.length<8)
            {alert("Su password debe tener al menos 8 caracteres")
                return false
            }
            else
            {return true
            }
    
    }


// usuario nuevo
if (formRegistro != null)
{
formRegistro.onsubmit = ( event ) => {
    event.preventDefault()
    const respuetaArroba=tienearroba(nuevoUser.value)
    const respuestaAlfanumerico=passwordAlfanumerico(nuevoPass.value)
    const respuestaCantidad=passwordCantidad(nuevoPass.value)

    
    if ( respuetaArroba &&   respuestaAlfanumerico && respuestaCantidad)
    {    alert("Felicidades " + nuevoUser.value + "!!, Su password ahora es mas seguro")
    }

}
}

//nuevo contacto
if (formContacto != null)
{
formContacto.onsubmit = ( event ) => {
    event.preventDefault()
    const respuetaArroba=tienearroba(nuevoUser.value)
    const respuestaAlfanumerico=passwordAlfanumerico(nuevoPass.value)
    const respuestaCantidad=passwordCantidad(nuevoPass.value)

    
    if ( respuetaArroba &&   respuestaAlfanumerico && respuestaCantidad)
    {    alert("Muchas gracias " + nuevoUser.value + "!!, nos pondremos en contacto")
    }

}
}
// function validar(mail,password)
// {
//     if (mail!=datosUsuario.user && password!=datosUsuario.password){alert("Erro de login, usuario y password erroneos")
//                                                         return false
//                                                     }
//     else if (mail!=usuarioConEmail){alert("Error de login, Usuario no coincide")
//                                                         return false}
//     else if (password!=contrasenia){alert("Error de login, passsword no coincide")
//                                                         return false}
  
//     else {alert("Bienvenido " + usuarioName)
//             return true}
    

// }

