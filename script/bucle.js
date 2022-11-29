// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

const usuarioConEmail="alejo@gmail.com"
const contrasenia="12345"


let usuarioName =prompt("Hola por favor ingresar tu nombre:")
let usuarioEmail=""
let accarroba = 0

do{
    usuarioEmail =prompt("Hola por favor ingresar tu e-mail:")
  

for ( let i = 0; i < usuarioEmail.length; i++ ) { 
  
   if ( usuarioEmail[i].match(/[@]/)) {
    
        accarroba=accarroba+1     
        console.log(accarroba)
    }

}
if (accarroba==0)
{
    alert("Debe ingresar un usuario un email con @ arroba")
}
}
while(accarroba==0)

let numerocontrasenia=false
let cantidadcaracteres=false

let usuarioPassword =""

do{
    while ( numerocontrasenia ==false ){
        usuarioPassword=prompt("Recuerde que ingresar password con al menos un numero del 0 a 9")
        let accnumero = 0

        for ( let i = 0; i < usuarioPassword.length; i++ )
         { 
           if ( usuarioPassword[i].match(/[0123456789]/)) {
            accnumero = accnumero + 1 }
        }
        if (accnumero>0) {numerocontrasenia=true}
        else{alert("Elige otra password por que este no tiene al menos un numero del 0 al 9")}
    }

    while ( cantidadcaracteres ==false ){
        if (usuarioPassword.length<8)
        {usuarioPassword =prompt("Hola por favor ingrese mas de 8 caracteres:")}
        else
        {cantidadcaracteres=true}
    }
}
while(numerocontrasenia==false && cantidadcaracteres==false)






// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.

if (usuarioConEmail==usuarioEmail && contrasenia==usuarioPassword)
{alert("Bienvenido " + usuarioName)}
else{
    alert("Usuario o password incorrectos")
}

