let prodcarrito=JSON.parse(localStorage.getItem("carrito"))
console.log(prodcarrito)


// function cardsHtml ( array) {

//     const contenedor = document.querySelector(".contenedor-carrito")

//     array.forEach( ( itemoks ) => {
//         const card = document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${itemoks.img} alt=${itemoks.producto}>
//             </div>
//             <h2>
//                 ${itemoks.producto}
//             </h2>
//             <ul>
//                 <li> Id de producto: ${itemoks.id}</li>
//                 <li> Precio en USD:${itemoks.precio}</li>
//             </ul>
//             <button id="boton-${itemoks.id}" class="boton-card">
//                 Eliminar al carrito
//             </button>
//         `
//         contenedor.appendChild(card)
//     })

// }

const cardsHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card-carrito" id="OKS-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.producto}>
                </div>                
                <h2>
                    ${element.producto}
                </h2>
                <h3>
                El precio en USD: ${element.precio}
                </h3>
                <button id="boton-${element.id}" class="boton-card">
                    Eliminar del carrito
                </button>
            </div>
        `
    }, "")

    document.querySelector(".contenedor-carrito").innerHTML = generarNodos
}

cardsHtml(prodcarrito || [])


function borrardelCarrito(array){
    const botonRestar=document.querySelectorAll(".boton-card")
    botonRestar.forEach(boton => {
         boton.onclick=()=>{
    
        const id=boton.id.slice(6)
        const filtrarProd=prodcarrito.filter((elemento,i)=>{
            return elemento.id!=Number(id)
        })
        prodcarrito= filtrarProd
        localStorage.setItem("carrito",JSON.stringify(prodcarrito))
        //console.log(prodcarrito)
        cardsHtml(prodcarrito)
        borrardelCarrito(prodcarrito)
        }
    })

}

borrardelCarrito(prodcarrito)


const botonBorrarCarrito=document.querySelector("#borrar-carrito")
botonBorrarCarrito.onclick=()=>{
    localStorage.removeItem("carrito")
    document.querySelector(".contenedor-carrito").innerHTML= "Se borro el carrito"
}

const botonSumarCarrito=document.querySelector("#sumar-carrito")
botonSumarCarrito.onclick=()=>{
    let sumatotal=0
    prodcarrito.forEach(element => {
         //sumatotal=sumatotal+element.precio
         console.log(typeof(element.precio))
         sumatotal=sumatotal+element.precio
         //console.log(sumatotal)
    });

    document.querySelector(".contenedor-sumatoria").innerHTML= "El total es USD " +sumatotal
}