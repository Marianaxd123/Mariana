//1.Algoritmo que imprime los números del 1 al 10


for(var i=1; i<=10; i+=1){ //el incremento de i+=1, se puede escribir también como i++
    console.log(i);
}

//2.Algoritmo que imprime los números del 10 al 1


for(var i=10; i>=1; i--){ //el decremento de i--, se puede escribir también como i-=1
    console.log(i);
}

//3.Algoritmo que solicite un número, muestre la sumatoria desde 1 hasta el número recibido.


var sumatoria=0; //variable que almacena el acumulado de la suma de los números ingresados
var limite=parseInt(prompt("Ingrese un número hasta donde quiere conocer la sumatoria"))
 
for(var i=0; i<=limite; i++){ //Se pueden escribir variables para indicar hasta dónde va la i
    sumatoria+=i; //a sumatoria se le suma el valor de i y lo guarda nuevamente en sumatoria
}
console.log("la sumatoria desde 0 hasta "+ limite + " es "+ sumatoria);


//4.


var numInicio = parseInt(prompt("Ingrese desde qué número inicia el ciclo"))
var numFin = parseInt(prompt("Ingrese hasta qué número va el ciclo"))
 
for(var i=numInicio; i<=numFin; i++){//En ambos casos, inicio y fin de i, se determina mediante una variable
    if(i%2==0){ // i%2==0, si i modulo 2 es igual a cero, quiere decir que el número es par
        console.log(i+" es un número par")
    }
}
//5. 

var arregloNombres=[] //se crea un vector/arreglo vacío para guardar los nombres
var nombre; //variable para almacenar cada nombre
for(var i=1; i<=5; i++){ //no siempre el ciclo for debe empezar en cero
    nombre=prompt("Ingrese el nombre número "+i)//el mensaje es más específico para que el usuario sepa en qué número de registro está
    arregloNombres.push(nombre); //.push() es el método que permite insertar elementos al final del arreglo
}
