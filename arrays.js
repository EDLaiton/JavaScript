//Arrays

/* 
let frutas = []

frutas[0] = "manzanas"
frutas[1] = "bananas"
frutas[2] = "peras"
frutas[3] = "tomate de arbol"
frutas[4] = "peras"
frutas[5] = "guayabas"



console.log(frutas)


let MyFamily = []

MyFamily[0] = "Franklin"
MyFamily[1] = "Arledis"
MyFamily[2] = "David"
MyFamily[3] = "Francisco"
MyFamily[4] = "Andres"
MyFamily[5] = "Luciana"
MyFamily[6] = "Tyra"

console.log(MyFamily)
*/
let frutas2 = [
    "bananos",
     "guayabas", 
     "manzanas", 
     "durazno", 
     "platanos", 
     "fresas"
    ];

for (let i=0; i < frutas2.length; i++) {
    if(frutas2[i] === "platanos"){
        console.log("Se encuentra en el inventario " + frutas2[i])
    }
}