function suma(n1, n2){
    var resultado = n1 + n2; 
    var mensaje = "El total de sumar" + n1 + " y " + n2 + " es igual a " + resultado; 
    return mensaje;
}



function main_calculadora(){
    var menu = prompt("Que operacion desea hacer? (digite el numero)\n ")
}

if(menu==1){
    console.log (suma(numero1, numero2)); 
    }else if (menu == 2){
        console.log (resta(numero1, numero2));
    }else if (menu == 3){
        console.log (multiplicacion(numero1, numero2));
    }else if (menu == 4){
        console.log (division(numero1, numero2));
    }else if (menu == 5){
        console.log (potencia(numero1, numero2));
    }