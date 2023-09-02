//funciones

function mayorDeDosNumeros(ingresoUno, ingresoDos){
    if(ingresoUno > ingresoDos){
        console.log(ingresoUno + " es mayor que " + ingresoDos)
    } else {
        return ingresoDos + " es mayor que " + ingresoUno
    }
}

const resultado = mayorDeDosNumeros(40,391)
console.log(resultado)
mayorDeDosNumeros(124, 123)


let mensaje = "Hola clase de javascript"
console.log(mensaje[2])

function containsWord(mensaje, texto){
     const resultado = mensaje.indexOf(texto)

     if(resultado !== -1){
        console.log("La palabra " + texto + " se encuentra en el mensaje ")
     } else{
        console.log("No se encuentra el mensaje")
     }

   /*console.log(resultado)
   console.log(texto)*/
}

containsWord("Hola clase de javascript", "clase")