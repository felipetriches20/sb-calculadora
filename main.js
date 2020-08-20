var inputValor1 = document.getElementById("valor1");
var inputValor2 = document.getElementById("valor2");

function pegaValores(){
    //array
    return [parseInt(inputValor1.value), parseInt(inputValor2.value)];
}
function add(){
    //var valor1 = parseInt(inputValor1.value);
    //var valor2 = parseInt(inputValor2.value); //convertendo em inteiro parseInt

    document.getElementById('resultado').innerHTML = pegaValores()[0] + pegaValores()[1];  //innerHTML mostra o valor no campo
    }
 function subtrair(){
     //var valor1 = parseInt(inputValor1.value);
     //var valor2 = parseInt(inputValor2.value); //convertendo em inteiro parseInt
    
        document.getElementById('resultado').innerHTML = pegaValores()[0] - pegaValores()[1]; //innerHTML mostra o valor no campo
    }

    function multiplicar(){
       // var valor1 = parseInt(inputValor1.value);
        //var valor2 = parseInt(inputValor2.value); //convertendo em inteiro parseInt
       
           document.getElementById('resultado').innerHTML = pegaValores()[0] * pegaValores()[1]; //innerHTML mostra o valor no campo
    }

       function dividir(){
        //var valor1 = parseInt(inputValor1.value);
        //var valor2 = parseInt(inputValor2.value); //convertendo em inteiro parseInt
            if(pegaValores()[1] != 0){
                document.getElementById('resultado').innerHTML = pegaValores()[0] / pegaValores()[1]; //innerHTML mostra o valor no campo
            }
            else{
                document.getElementById('resultado').innerHTML = "Você não pode dividir por 0";
            }
           
    }
    //seta o evento de onclic nos botões 
    document.getElementById("btnAdd").onclick = add;
    document.getElementById("btnSub").onclick = subtrair;
    document.getElementById("btnMulti").onclick = multiplicar;
    document.getElementById("btnDivi").onclick = dividir;
