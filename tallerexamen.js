/*// Valeria Arboleda
// Mariana Peñaranda 

// Primer punto 
var num1 =  parseInt(prompt("Ingrese cualquier numero"))
var num2 = parseInt(prompt("Ingrese cualquier numero"))
if (num1>=num2){
    for(var i=num2; i<=num1; i++){
    console.log (i)
    }
}
else if(num1<=num2){
    for(var i=num1; i<=num2; i++){
        console.log(i)
    }
}

// Segundo Punto
var multiplicacion = parseInt(prompt("Ingrese un numero para mostrar su tabla"))
for (var i=0; i<=10; i++){
    console.log (multiplicacion + " X " + i + " = " + multiplicacion * i)
}

// Tercer Punto 
var multiplicacion2 = parseInt(prompt("Digite el numero para mostrar su tabla :3"))
var numtabla = parseInt(prompt("Ingrese un numero para mostrar su tabla hasta donde deseé :3"))
for (var i=0; i<=numtabla; i++){
    console.log (multiplicacion2 + " X " + i + " = " + multiplicacion2 * i)
}
*/
// Cuarto Punto 
var arreglonum=[] 
var numero3;
for(var i=1; i<=10; i++){ 
    numero3=prompt("Por Favor ingrese diez numeros uwu " +i)
    arreglonum.push(numero3); 
}
var mayor= arreglonum[0]

for(var i=0; i<10; i++){
    if(arreglonum[i] > mayor){
        mayor = i 
    }
    console.log("El numero mas grande es "+ arreglonum[i]) 
}

