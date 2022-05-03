X=5; 
console.log(x>7); // False
console.log(x<7); //True
console.log(x=="5"); // True
console.log(x==="5"); // False
console.log(x>=1); // True
console.log(x!=10); // True


console.log(2 < 12); // True 
console.log(2 < "12");	// True 
console.log(2 < "John"); // False
console.log(2 > "John"); // False 
console.log(2 == "John"); // False 
console.log("John" == "John"); // True 
console.log("john" == "John"); //
console.log("2" < "12"); //
console.log("2" > "12"); //	
console.log("2" == "12"); //


console.log("ejercicios")
x=12;  
y=7; 
x<15 && y!=7 // True 
y>8 && x<20 // False
x==12 && x<18 // True
("lunes" == "Lunes") || (y!=9) // False
!(x==10) && y>=6 // False 
x>6 && y==12 && 2>3 // False 
(x*2)>22 && y<(2*4) // False 
(x>10 || x<10) && !(y!=7 && y<21) // False
((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7") // True

var tocaEduFisica= "no";
var uniforme = "diario";
 
if(tocaEduFisica == "si"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);


var diaSiguiente= "lunes";
var uniforme = "diario";
 
if(diaSiguiente == "lunes" || diaSiguiente == "miercoles"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);