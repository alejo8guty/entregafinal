// CASO ECOMMERCE

//variables de logeo
const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const nuevousuarioForm=document.querySelector(".nuevo-usuario")
const logout = document.querySelector("#logout")

//Variables para mostrar productos
const listanormalOKS = document.querySelector(".productos-oks")
const listaOrdenID = document.querySelector(".productos-oks-ordenID")
const listaofertaslOKS = document.querySelector(".productos-oks-ofertas")
const botonOfertasOKS=document.querySelector(".botonMostrar")

const listadsctoOKS = document.querySelector(".productos-oks-dscto")
const botondsctoOKS=document.querySelector(".botonDescuentos")


// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//     - id
//     - producto
//     - precio
//     - fechaVencimiento (en el caso de que tenga una)
//     - descripción
//     - categoría (si tiene una)
//     - oferta (booleano)

// Quiero que algunos de los elementos tengan un true en oferta.

// para hacer una función que nos sirva para subir valores al ls
// 1) un valor a convertir con JSON.stringify
// 2) una clave que le proporcione un nombre a ese valor que se suba

const datosUsuario = {
    user: "carola@com",
    password: "pokemon23"
}

function llamarFetch(){
    fetch("./prodoks.json")
    .then( res => res.json())
    .then( data => {
    const productosOKS = data
    //verificaroferta()
    // ordenarporid(productosOKS)
    // productosenoferta(productosOKS)
        cardsHtml(productosOKS,".productos-oks")
        sumarAlCarrito(productosOKS)   
    //console.log(productosOKS)

    })
    .catch((error)=>console.log("salio mal"))

}


// codigo para el login

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}
// consultar si esta en true
const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) 
    {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        nuevousuarioForm.style.display="none"
        logout.style.display = "block"      
        listanormalOKS.style.display = "block" 

        llamarFetch()
        // fetch("./prodoks.json")
        // .then( res => res.json())
        // .then( data => {
        // const productosOKS = data
        // //verificaroferta()
        // // ordenarporid(productosOKS)
        // // productosenoferta(productosOKS)
        //     cardsHtml(productosOKS,".productos-oks")
        //     sumarAlCarrito(productosOKS)   
        // //console.log(productosOKS)

        // })
        // .catch((error)=>console.log("salio mal"))

            
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        //listanormalOKS.style.display = "none"
    }
}

// esta función valida si existe un token en el localStorage
// también verifica su valro, es decir, si este es diferente a true, que es el valor que subimos desde el envío del formulario (onsubmit), entonces signiifca que el usuario no se pudo loggear

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
        listanormalOKS.style.display = "none" 
        botonOfertasOKS.style.display="none"
        botondsctoOKS.style.display="none"
        //listaofertaslOKS.style.display="none"      
        //listadsctoOKS.style.display="none"
        //botones de ordenamiento
    } else {
        contenedorForm.style.display = "none"
        nuevousuarioForm.style.display="none"
        logout.style.display = "block"
        llamarFetch()
        listanormalOKS.style.display = "block"  
        botonOfertasOKS.style.display="block"
        botondsctoOKS.style.display="block"      
    }
}

// evento que deslogea a mi usuario

logout.onclick = () => {
    localStorage.removeItem( "login" )
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
    location. reload()

}

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).


// function verificaroferta()
// {
//     productosOKS.forEach((elemento) => {
//     if (elemento.oferta==true)
//       {elemento.precio=elemento.precio*90%}
        
// }
// )
// }


// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//     - [...array] ---> spread operator
//     - array.slice() ---> copia segura en otra variable
//     - [].concat(array) ---> copia segura en otra variable


function ordenarporid(array)
{
const ordenaID=[...array].sort((a, b) => {
    return a.id-b.id
})
cardsHtml(ordenaID,".productos-oks-ofertas")
}




// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

function productosenoferta(array){



    const arrFiltrado = array.filter( ( curr ) => {
        return curr.oferta  === true
    })
    
    cardsHtml(arrFiltrado,".productos-oks-dscto") 
    //console.table(arrFiltrado)

}
// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().


function buscarproducto(){

    let busqueda=prompt("Ingrese el nombre del producto que desea buscar").toUpperCase()
    let productoBuscado=productosOKS.find(producto=>producto.producto.toLocaleUpperCase()==busqueda)
    if (productoBuscado==undefined){
        console.log("El producto de OKS no se encuentra en la busqueda")
    }
    else{
        console.table(productoBuscado)
    }
}


validarLogin(obtenerDelLs("login"))


// verificaroferta()
//ordenarporid()
//productosenoferta()
// buscarproducto()


function cardsHtml ( array,contenido) {

    const contenedor = document.querySelector(contenido)

    array.forEach( ( itemoks ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="container-img">
                <img src=${itemoks.img} alt=${itemoks.producto}>
            </div>
            <div class="containter-detalles">
            <h2>
                ${itemoks.producto}
            </h2>
            <ul>
                <li> Id de producto: ${itemoks.id}</li>
                <li> Precio en USD:${itemoks.precio}</li>
                <li> Categoria : ${itemoks.categoria}</li>
                <li> Descripcion : ${itemoks.descripcion}</li>
                <li> Categoria : ${itemoks.categoria}</li>
            </ul>
            <button id="boton-${itemoks.id}" class="boton-card">
                Añadir al carrito
            </button>
            </div>
        `
        contenedor.appendChild(card)
    })

}





// const eventoCategorias =(boton, nodo1) => {
//     boton.onclick=() => {
//         //nodo1.style.display="flex"
//         //nodo2.style.display="none"

//     }
//}

 //eventoCategorias(botonOfertasOKS,listaofertaslOKS,listanormalOKS )
 //eventoCategorias(botonOfertasOKS,listanormalOKS )

 //eventoCategorias(botondsctoOKS,listadsctoOKS,listanormalOKS )

let carrito=[]

function sumarAlCarrito(array){
    const botonSumar=document.querySelectorAll(".boton-card")
    botonSumar.forEach(boton => {
         boton.onclick=()=>{
            //console.log("hola mundo")
        //console.log(boton.id)
        const id=boton.id.slice(6)
        const filtrarProd=array.find((elemento)=>{
            return elemento.id===Number(id)
        })
        carrito.push(filtrarProd)
        console.log(carrito)
        localStorage.setItem("carrito",JSON.stringify(carrito))
        }
    })

}
const OKSeleccionados=JSON.parse(localStorage.getItem("carrito"))
carrito=OKSeleccionados || []
