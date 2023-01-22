const botonOscuro=document.querySelector("#boton-oscuro")
const fondoweb=document.querySelector(".fondomainmontaje")

// codigo para el login

const colocarClave = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerBooleano = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}




function validarLogin ( clave ) {
    if ( clave !== true ) {
//Modo Claro

fondoweb.style.background = '#F7EED2'
       
    } else {
//Modo Oscuro 

fondoweb.style.background = '#54666F'
document.querySelector("#boton-oscuro").innerHTML= "Modo Claro" 

        
    }
}


validarLogin(obtenerBooleano("oscuro"))


botonOscuro.onclick=()=>{
    //console.log(botonOscuro.textContent.slice(10))
    //console.log(botonOscuro.textContent.length)
   const textoboton=botonOscuro.textContent.trim()

    
    if(textoboton=="ModoOscuro")
    {
        colocarClave("oscuro", true)
        validarLogin(obtenerBooleano("oscuro"))}
    else
    {localStorage.removeItem( "oscuro" )
    validarLogin(obtenerBooleano("oscuro"))
    document.querySelector("#boton-oscuro").innerHTML= "ModoOscuro" 
    }

}

