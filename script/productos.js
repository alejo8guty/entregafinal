const produtosOKS=[
{
    id: 	"OKS200001",
    producto: 	"OKS 200 – Pasta de montaje MoS",
    descripcion : "OKS 200 es una pasta con MoS₂ para la lubricación de montajes a presión.",
    precio:	1500,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	true,
    img: "../media/",
},
        
{    id: 	"OKS200002",
    producto: 	"OKS 240  Pasta antiagarrotamiento por calor (pasta de cobre)",
    descripcion :	"Pastas para facilitar el montaje y el desmontaje, OKS 240 Pasta antiagarrotamiento por calor (pasta de cobre) Pasta de tornillería de alta temperatura a base de cobre para evitar la corrosión, el agarrotamiento y el atascamiento.",
    precio:	800,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	true,
    img: 	"../media",
},
{       
    id: 	"OKS200003",
    producto: 	"OKS 1105 – Pasta de aislamiento",
    descripcion :	"OKS 1105 impide la formación de capas conductoras de electricidad y minimiza el riesgo de saltos de chispa y las pérdidas dieléctricas. Los aisladores y las instalaciones de conmutación cubiertos con la pasta conservan una buena resistencia de aislamiento.",
    precio:	1300,
    categoria: 	"Pastas montaje y desmontaje",
    oferta:	false,
    img: 	"../media",
},    
 
]


function buscarproducto(){

    let busqueda=prompt("Ingrese el nombre del producto que desea buscar").toUpperCase()
    let productoBuscado=produtosOKS.find(producto=>producto.producto.toLocaleUpperCase()==busqueda)
    if (productoBuscado==undefined){
        console.log("El producto de OKS no se encuentra en la busqueda")
    }
    else{
        console.table(productoBuscado)
    }
}

 buscarproducto()