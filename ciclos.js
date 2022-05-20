//Mariana Peñaranda y Valeria Arboleda 

// 1.

var numciclo = 0

while (numciclo < 5){

    console.log(2)
    numciclo += 1
}
//tambien se puede numciclo = numciclo + 1

// 2.

var nciclo = 0

while (nciclo < 8) {
    console.log ("el numero del ciclo es " + nciclo);
    nciclo += 1
}

// 3.

var ciclo3 = 0

while (ciclo3 <= 10){
    console.log(ciclo3)
    ciclo3 += 1

}

// 4. 

var ciclo4 = "ok"

while(ciclo4 != "ok"){
    ciclo4 = prompt("ingrese ok para parar");
    console.log("dijo" + ciclo4)
}
console.log("dijo ok")

// 5. 

var ciclo5 = 0

while (ciclo5 < 5){ 
    console.log(2)
    ciclo5 += 1

}

// 6. 

var ciclo61;
var ciclo62;
var resultado6 = 0;

while(resultado6 <= 20){
    ciclo61 =  parseInt( prompt("valor 1"));
    ciclo62 = parseInt( prompt("valor 2"));
    resultado6 = ciclo61 + ciclo62;
}

// 7.

console.log("PUNTO 7");
var contraseña = "Mariana123" ;
var intento=prompt("ingrese una contraseña")
var numintento=1;
while((intento != contraseña) && numintento < 4 ){
    console.log("la contraseña es incorrecta");
    intento=prompt("ingrese una contraseña nueva")
    numintento += 1;

}
if(numintento=4){
    console.log("intentos agotados")
}else{
    console.log("contraseña correcta")
}
