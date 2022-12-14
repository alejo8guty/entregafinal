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
    id: 24,
    producto: 	"OKS 200",
    descripcion : "OKS 200 es una pasta con MoS₂ para la lubricación de montajes a presión.",
    precio:	1500,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	true,
    img: "../imagenes/oks-200.jpeg"
},
        
{    id: 33,
    producto: 	"OKS 240",
    descripcion :	"Pastas para facilitar el montaje y el desmontaje, OKS 240 Pasta antiagarrotamiento por calor (pasta de cobre) Pasta de tornillería de alta temperatura a base de cobre para evitar la corrosión, el agarrotamiento y el atascamiento.",
    precio:	800,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	false,
    img: 	"../media",
},
{       
    id: 21,
    oferta:	false,
    producto: 	"OKS 1105",
    descripcion :	"OKS 1105 impide la formación de capas conductoras de electricidad y minimiza el riesgo de saltos de chispa y las pérdidas dieléctricas. Los aisladores y las instalaciones de conmutación cubiertos con la pasta conservan una buena resistencia de aislamiento.",
    precio:	1300,
    categoria: 	"Pastas montaje y desmontaje",
    img:  "../media",
},    
{
    id: 32,	
    oferta:	false,
    producto: 	"OKS 2610",
    descripcion :	"Limpiador universal de evaporación sin residuos para la limpieza de componentes de máquina y superficies de los materiales.",
    precio: 980,	
    categoria: 	"Limpiadores de lubricantes",
    img: "../media",
},

{
    id: 15,	
    oferta:	false,
    producto: 	"OKS 2650",
    descripcion :	"OKS 2650, potente limpiador biodegradable alcalino de base acuosa de fabricación alemana. para eliminar suciedades de todo tipo, restos de aceite, grasa u hollín. para todo tipo de industrias y talleres; concentrado, se puede diluir dependiendo del grado de suciedad y el área a aplicar.",
    precio: 1250,	
    categoria: "Limpiadores de lubricantes",
    img: "../media",
},
{   id: 23,	
    oferta:	false,
    producto: "OKS 2681",
    descripcion :	"Le invitamos a probar nuestro removedor o limpiador OKS 2681 altamente eficaz para la eliminación de residuos resistentes tales como los residuos de sellado, pintura y adhesivos en aplicaciones industriales, comerciales y de taller.",
    categoria: 	"Limpiadores de lubricantes",
    precio: 2000,	

    img: "../media",	
},
{   id: 55,	
    oferta:	true,
    producto: 	"OKS 340",
    descripcion :	"Lubricante adherente sintético para componentes mecánicos en áreas interiores y exteriores, expuestos a altas presiones o bajo influencia de la corrosión.",
    categoria: 	"Aceite con aditivos",
    precio:	1930,
    img: 	"../media",
},	

{
    id: 34,	
    oferta: false,	
    producto: 	"OKS 370",
    descripcion :	"Aceite universal incoloro para la industria alimenticia.",
    categoria: 	"Aceite con aditivos",
    precio: 1450,
    img:"../media", 	
},
{	id: 9,	
    oferta:	false,
    producto: 	"OKS 3760",
    descripcion :	"Aceite sintético para el cuidado y limpieza de herramientas finas y mecanismos sensibles.",
    categoria: 	"Aceite con aditivos",
    precio: 4300,	
    img: "../media",	
},
{	
    id: 14,
    oferta:	false,
    producto: "OKS 1140",
    descripcion : "OKS 1140 es una grasa de silicona para más alta temperatura para componentes mecánicos de funcionamiento lento a temperaturas extremadamente elevadas.",
    categoria: 	"Grasas condiciones críticas",
    precio:	2370,
    img: "../media",	
},
{	
    id: 27,	
    oferta:	false,
    producto: 	"OKS 402",
    descripcion :	"Grasa multiuso para la lubricación de componentes mecánicos de carga normal.",
    categoria: 	"Grasas condiciones críticas",
    precio:800,	
    img: "../media",	
},

{	id: 40,
    oferta:	true,
    producto: 	"OKS 4100",
    descripcion :"OKS 4100 es una pasta de alta temperatura con MoS₂ para rodamientos y cojinetes de fricción de marcha lenta sometidos a cargas muy altas y bruscas.",
    categoria: 	"Grasas condiciones críticas",
    precio:	680,
    img: "../media",	
},
{	
    id: 77,	
    oferta:	false,
    producto: "OKS 450",
    descripcion :	"Lubricante adherente completamente sintético para la lubricación de cadenas de alta velocidad y componentes mecánicos en áreas interiores y exteriores, expuestos a cargas elevadas o bajo influencia de la corrosión.",
    categoria: "Grasas condiciones críticas",
    precio:	1450,
    img: "../media",	
},
{	
    id: 13,	
    oferta:	false,
    producto: 	"OKS 110",
    descripcion :"OKS 110 es un polvo de MoS₂ para la mejora de las propiedades de deslizamiento de los componentes mecánicos.",
    categoria: 	"Lubricantes secos",
    precio: 550,
    img: "../media",	
},
{	id: 20,
    oferta:	false,
    producto: 	"OKS 510",
    descripcion :	"Laca lubricante de secado al aire a base de MoS₂ para la lubricación seca de componentes mecánicos durante funcionamiento temporal y en tiempos de inactividad prolongados.",
    categoria: 	"Lubricantes secos",
    precio: 1500,	
    img: "../media",	
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
