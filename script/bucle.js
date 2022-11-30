// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

const usuarioConEmail="alejo.gmail.com"
const contrasenia="12345"



function validar(mail,password)
{
    if (mail!=usuarioConEmail && password!=contrasenia){alert("Erro de login, usuario y password erroneos")
                                                        return false
                                                    }
    else if (mail!=usuarioConEmail){alert("Error de login, Usuario no coincide")
                                                        return false}
    else if (password!=contrasenia){alert("Error de login, passsword no coincide")
                                                        return false}
  
    else {alert("Bienvenido " + usuarioName)
            return true}
    

}


function tienearroba(usuarioEmail)
{

let accarroba = 0
do{
  
for ( let i = 0; i < usuarioEmail.length; i++ ) { 
  
   if ( usuarioEmail[i].match(/[@]/)) {
    
        accarroba=accarroba+1     
        console.log(accarroba)
    }

}
if (accarroba==0)
{
    alert("Debe ingresar un usuario un email con @ arroba")
    usuarioEmail =prompt("Hola por favor ingresar tu e-mail con @:")
}
else{alert("su usuario si contiene @")}
}
while(accarroba==0)
}



function passwordseguro(usuarioPassword){


let numerocontrasenia=false
let cantidadcaracteres=false



do{
    while ( numerocontrasenia ==false ){
        let accnumero = 0

        for ( let i = 0; i < usuarioPassword.length; i++ )
         { 
           if ( usuarioPassword[i].match(/[0123456789]/)) {
            accnumero = accnumero + 1 }
        }
        if (accnumero>0) {numerocontrasenia=true
        alert("Muy bien! Su password al menos tiene un caracter numerico")}
        else{alert("Elige otra password por que este no tiene al menos un numero del 0 al 9")
        usuarioPassword=prompt("Recuerde que ingresar password con al menos un numero del 0 a 9")
        }
    }

    while ( cantidadcaracteres ==false ){
        if (usuarioPassword.length<8)
        {usuarioPassword =prompt("Hola por favor ingrese mas de 8 caracteres:")}
        else
        {cantidadcaracteres=true
        alert("Muy bien su password al menos tiene 8 caracteres")}
    }
}
while(numerocontrasenia==false && cantidadcaracteres==false)

}

let usuarioName =prompt("Hola por favor ingresar tu nombre:")

let usuarioEmail =""
let usuarioPassword=""
let respuesta=false
do {

usuarioEmail =prompt("Hola por favor ingresar tu e-mail:alejo.gmail.com")
usuarioPassword=prompt("Hola por favor ingrese su password:12345")
respuesta=validar(usuarioEmail,usuarioPassword)
}
while (respuesta==false)

if (respuesta==true)
{tienearroba(usuarioEmail)
passwordseguro(usuarioPassword)
alert("Felicidades " + usuarioName + "!!, Su password ahora es mas seguro")}