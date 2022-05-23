
let ingredientes = ['tomate','mozzarella','pepperoni','aceitunas'];
function turnOnOven() {
   console.log("horno encendido"); 
}
function makeDough(){
    console.log("extender la masa");
}
function ponerenbandeja(){
    console.log("Pizza en bandeja"); 

}
function ponerIngredientes(ingredientes){
   
    ingredientes.forEach(item => console.log("ingrediente " + item + " añadido")); 
}
function meteralhorno(){
    console.log('pizza en el horno . Espere 20 minutos');
}
function pizzaentregrada(){
    console.log('Pizza entregada');
}
function app(){    
    turnOnOven();
    makeDough();
    ponerenbandeja();
    ponerIngredientes(ingredientes);
    meteralhorno();
    pizzaentregrada();
}

app();