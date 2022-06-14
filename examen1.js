// Valeria Arboleda 
// Mariana Peñaranda 

// Primer punto 

var veces = 0
var ciclo = (prompt ("Por favor ingrese el numero hasta el cual quiere saber los multiplos de 5"))
while (veces<=ciclo ){
    if (veces % 5){
        console.log("No, el número "+veces+ " no es múltiplo de 5");
    }else{
        console.log("Si, el número "+veces+ " es múltiplo de 5");
    }
    veces += 1 
}

// Segundo punto 

var tienda = parseInt(prompt ("Ingrese la cantidad de articulos que desea"))
var precio = 0; 
var preciototal = 0; 
var ciclo1 = 1; 
while (ciclo1<=tienda) {
    precio = parseInt (prompt ("por favor ingrese el precio de los articulos"))
    preciototal += precio
    ciclo1+= 1
     }
console.log ("el valor total es " + preciototal)

// Tercer punto 

var precio = 0; 
var preciototal = 0; 
var ciclo1 = 1;
var parar = "si"
while(parar != "no"){
    precio = parseInt (prompt ("por favor ingrese el precio de los articulos"))
    preciototal += precio

    parar = prompt("ingrese no para parar");
}
console.log ("el valor total es " + preciototal)

// Cuarto punto 

var articulos1=0;
var precio = 0; 
var preciototal = 0; 
var ciclo1 = 1;
var parar = "si"
while(parar != "no"){
    precio = parseInt (prompt ("por favor ingrese el precio de los articulos"))
    preciototal += precio
    articulos1+=1
    parar = prompt("ingrese no para parar");
}
if(articulos1>=8 && articulos1<15){
    console.log ("Su descuento seria del 10% " +(preciototal * 0.90))
}
else if (articulos1>=15 && articulos1<25){
    console.log ("Su descuento es del 15%" + (preciototal * 0.85))
}
else if (articulos1>=25){                             
    console.log ("Su descuento es del 20%" + (preciototal * 0.8))
}else{
    console.log ("el valor total es " + preciototal)

    
}

// Quinto punto 

var perdiomateria = 0;
var vecesenotas = 5
var notaactual
var cilom = 1
var gano = 0 

while (cilom<=vecesenotas){
    var notaactual = parseFloat (prompt ("Digite la nota final del estudiante" + cilom));

    cilom += 1 



if (notaactual >= 3.8){
    console.log ("el estudiante gano la materia")
    gano += 1
} else {
    console.log("el estudiante perdio la materia")
    perdiomateria += 1
}
}

if (gano<=perdiomateria){
    console.log ("debe abrirse el cuso de verano para los estudiantes")

}else{
    console.log("La cantidad de estudiiantes no alcanza para el curso de verano")
}
