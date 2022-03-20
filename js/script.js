$(document).ready(function(){
    $("#btn3").click(function(){
        // Call user inputs
        var pizzaSize = $("#size").val();
        var pizzaCrust = $("#crust").val();
        var pizzaTopping = $("#topping").val();
        var orderNumber = $("#ordernumber").val();
        // console.log(pizzaSize, pizzaCrust, pizzaTopping);   
  
        var totalPrice = (parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTopping)) * parseInt(orderNumber);
        console.log(totalPrice);



    })
    
})
