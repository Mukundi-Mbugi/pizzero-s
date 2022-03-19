$(document).ready(function(){
    $("#btn3").click(function(){
        // Call user inputs
        var largePizza = $("#largepizza").val();
        var mediumPizza = $("#mediumpizza").val();
        var smallPizza = $("#smallpizza").val();

        var cripsyCrust = $("#cripsy").val();
        var stuffedCrust = $("#stuffed").val();
        var glutenCrust = $("#gluten-free").val();

        var berbecueTopping = $("#bbq").val();
        var pepperoniTopping = $("#pepperoni").val();
        var hawaiiTopping = $("#hawaii").val();

        var orderNumber = $("#ordernumber").val();
        console.log(orderNumber);

        // Declare prices

        var largePizzaPrize = 300;
        var mediumPizzaPrize = 200;
        var smallPizzaPrize = 100;

        var cripsyPrice = 300;
        var stuffedPrice = 200;
        var glutenPrice = 150;

        var berbecuePrice = 400;
        var pepperoniPrice = 350
        var hawaiiPrice = 300

        var totalLargePizza = {}



    })
    
})
