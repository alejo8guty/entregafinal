// CASO ECOMMERCE

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



const productosOKS=[
{
    id: 23,
    producto: 	"OKS 200",
    descripcion : "OKS 200 es una pasta con MoS₂ para la lubricación de montajes a presión.",
    precio:	1500,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	true,
    img: "../media/",
},
        
{    id: 33,
    producto: 	"OKS 240",
    descripcion :	"Pastas para facilitar el montaje y el desmontaje, OKS 240 Pasta antiagarrotamiento por calor (pasta de cobre) Pasta de tornillería de alta temperatura a base de cobre para evitar la corrosión, el agarrotamiento y el atascamiento.",
    precio:	800,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	true,
    img: 	"../media",
},
{       
    id: 20,
    producto: 	"OKS 1105",
    descripcion :	"OKS 1105 impide la formación de capas conductoras de electricidad y minimiza el riesgo de saltos de chispa y las pérdidas dieléctricas. Los aisladores y las instalaciones de conmutación cubiertos con la pasta conservan una buena resistencia de aislamiento.",
    precio:	1300,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	false,
    img: 	"../media",
},    
 
]
// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).


function verificaroferta()
{
productosOKS.forEach((elemento) => {
    if (elemento.oferta==true)
    {   console.log("El precio base  es: " + elemento.precio)
        dscto= prompt("El producto tiene un precio "+elemento.precio+" escriba su descuento 5, 10 o 15")
        elemento.precio=elemento.precio*(100-dscto)/100    
        console.log("El precio con descuento " + dscto + "% es: "+ elemento.precio)
    }
    
})
}

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//     - [...array] ---> spread operator
//     - array.slice() ---> copia segura en otra variable
//     - [].concat(array) ---> copia segura en otra variable


function ordenarporid()
{
const ordenaID=[...productosOKS].sort((a, b) => {
    return a.id-b.id
})
console.log(productosOKS)
 console.log(ordenaID)
}




// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

function productosenoferta(){
let respuesta=confirm("Desea ver los productos con descuento las descuentos?")

if(respuesta==true){
    const arrFiltrado = productosOKS.filter( ( curr ) => {
        return curr.oferta  === true
    })
    
    console.table(arrFiltrado)
}
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

verificaroferta()
ordenarporid()
productosenoferta()
buscarproducto()
