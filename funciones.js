console.log ("hola");
function saludo(){
    console.log ("que tal?")
    }

    //llamar a la funcion 

    saludo();
     function sumita(){

        var numerito1 = 10;
        var numerito2 = 22;
        return numerito1 + numerito2;
    }
    console.log(sumita ());

    //funciones por parametos

    function sumar(num1, num2) {
        return num1+num2;
    }
    //console.log(sumar(20, 10))
    
    function main(){
        var numero1 = parseFloat(prompt("ingrese el primer numero")); 
        var numero2 = parseFloat(prompt("ingrese el segundo numero"));
        console.log(sumar(numero1, numero2));
    }