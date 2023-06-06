
let item=null;
let plate=null;
let drink=null;
let dessert=null;
let price1=0;
let price2=0;
let price3=0;
let clientName;
let address;
let total=0;



// selecionar comidas
function foodSelection(chooseFood,kindOfFood,name,price){

    let selected=document.querySelector("." + kindOfFood + " .selected");
    if(selected !== null){
        selected.classList.remove("selected");
        item=item-1;
    }
    let choose=document.querySelector("." + chooseFood);
    choose.classList.add("selected");
    item=item+1;

    if(item===3){
        let text=document.querySelector("button p");
        text.innerHTML= "Finalizar Pedido."
        let activate=document.querySelector("button");
        activate.classList.add("activate");
        activate.disabled = false;
    }
    if(kindOfFood=="plate"){
        plate=name;
        price1=price.toFixed(2);
    }
    if(kindOfFood=="drink"){
        drink=name;
        price2=price.toFixed(2);
    }
    else{
        dessert=name;
        price3=price.toFixed(2);
    }
}
// confirmar pedido
function orderConfirmation(){
    address=prompt("Qual é o seu endereço?");
    clientName=prompt("Qual é o seu nome?");
    let confirmation=document.querySelector(".transparent");
    confirmation.classList.remove("hide");
    let fixed=document.querySelector(".background");
    fixed.classList.add("fixed");
    // info plate
    let infosOrder=document.querySelector(".name-plate");
    infosOrder.innerHTML= `${plate}`;
    let infosOrder2=document.querySelector(".price-plate");
    infosOrder2.innerHTML= (`${price1}`).replace(".",",");
    // info drink
    let infosOrder3=document.querySelector(".name-drink");
    infosOrder3.innerHTML= `${drink}`;
    let infosOrder4=document.querySelector(".price-drink");
    infosOrder4.innerHTML= (`${price2}`).replace(".",",");
    // info dessert
    let infosOrder5=document.querySelector(".name-dessert");
    infosOrder5.innerHTML= `${dessert}`;
    let infosOrder6=document.querySelector(".price-dessert");
    infosOrder6.innerHTML= (`${price3}`).replace(".",",");
    // total price
    let infosOrder7=document.querySelector(".total-price");
    total =((parseFloat(price1)+parseFloat(price2)+parseFloat(price3)).toFixed(2)).replace(".",",");
    infosOrder7.innerHTML= total;  

}
 

function cancelar(){
    let confirmation=document.querySelector(".transparent");
    confirmation.classList.add("hide");
    let fixed=document.querySelector(".background");
    fixed.classList.remove("fixed");
}
function lastConfirmation(){
    let infoConfirmation= encodeURIComponent("Olá, gostaria de fazer o pedido: " + "\n" +
    "- Prato: " + plate + "\n" +
    "- Bebida: " + drink + "\n" +
    "- Sobremesa: " + dessert + "\n" +
    "Total: R$ " + total + "\n" + "\n" +
    "Nome: " + clientName + "\n" +
    "Endereço: " + address);
     let URL = "https://wa.me/55449?text=" + infoConfirmation;
    window.open(URL)

}



