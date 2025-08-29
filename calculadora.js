



function agregar(valor) {

    const pantalla = document.getElementById('pantalla');
    pantalla.value += valor;


}


function calcular(){
    const pantalla = document.getElementById('pantalla');

    try{
        pantalla.value = math.evaluate(pantalla.value)
    }catch(err){
        pantalla.value = "Error en el calculo"
    }

}

function limpiar(){
    const pantalla = document.getElementById('pantalla');

    pantalla.value = "";



}