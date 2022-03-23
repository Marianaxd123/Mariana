// Ac = L^2
// Ac = L * L
var lado = prompt ("por favor imgrese el lado para hallar el area"); 
var areacua = lado**2;
console.log ("el area del cuadrado es" + areacua ); 

//2.
var altura = prompt ("por favor ingrese la altura del rectangulo para poder hacer el area");
var base = prompt ("por favor ingrese la base para hallar el area");
var arearectangu = base*altura
console.log ("el area del rectangulo es" + arearectangu)

var lado = prompt ("por favor ingrese la medida de un lado del rectangulo"); 
var altura = prompt ("por favor ingrese la altura")
var lado2 = prompt ("por favor ingrese el segundo lado del rectangulo")
var altura2 = prompt ("por favor ingrese la segunda altura del rectangulo para poder hacer el perimetro")
var perimetrorectangu = lado + altura + lado2 + altura2
console.log ("el perimetro del rectangulo es " + perimetrorectangu)

//3. 
var diametro = prompt ("por favor ingrese el diametro del circulo"); 
var diametrocirculo = diametro/Math.PI;
console.log ("el diametro del circulo es " + diametrocirculo)

var radio = prompt (" por favor ingrese el valor del radio de la esfera");
var volumenesfera = 4/3*Math.PI * radio**3
console.log (" el volumes de la esfera es " + volumenesfera)

//4. 
var base1 = prompt (" por favor ingrese la primera base del trapecio"); 
var base2 = prompt (" por favor ingrese la segunda base del trapecio"); 
var altura = prompt (" por favor ingrese la altura del trapecio"); 
var areatrapecio = ((base1 + base2) * altura)/2; //calificar formula
console.log ("el area del trapecio es " + areatrapecio)

//5. 
var ancho = prompt (" por favorel ancho de la pisccina");
var largo = prompt (" por favor ingrese el largo de la pscina");
var profundo = prompt ("por favor ingrese el profundo de la pscina");
var litrospiscina = ancho* largo* profundo
console.log ("los litros que necesita para llenar la piscina son" + litrospiscina); 

//6. 
var alto = prompt ("por favor ingrese el alto de la fachada"); 
var ancho = prompt ("por favor ingrese el ancho de la fachada"); 
var preciofachada = alto* ancho* 22000
console.log ("el total del precio a pagar la pintada es" + preciofachada); 

//punto 7. 
//a.
var cm = prompt ("por favor ingrese la longitud de centrinetros que quieres comvertir a kilometros");
var resultado = cm * (1/100) * (1/100)
console.log ("los centrimetros convertidos son" + resultado + "km");

//b.
var dl;
var resultado;
dl = prompt ("por favor ingrese los decilitros que desea convertir a litro"); 
resultado = dl*(0.1/0.1)
console.log ("el equivalente correspondido en litros es" + resultado); 

//C. 
var microgramos = prompt ("por favor ingrese los microgramos que desea convertir a gramos");
var gramos = microgramos/ 1e+6 
console.log ("su equivalente en gramos es este" + gramos); 

//d. 
var kilometros = prompt ("por favor ingrese la distancia en kilometros que quiere pasar a milimetros"); 
var milimetros = kilometros* 1000
console.log ("su distancia de kilometros pasada a miletros es" + milimetros); 

vscode

