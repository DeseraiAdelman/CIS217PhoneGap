/**
 * Created by Deserai Adelman on 11/12/13.
 */


var cart = [];

function displayCart(){
    var cartDiv = $("#cartDiv");
    cartDiv.html("");
    var grandTotal = 0
    for( var item in cart ){
        var qty = cart[item].qty;
        var price = cart[item].price;
        var subtotal = qty * price;
        grandTotal += subtotal;
        cartDiv.append('<p>' + qty + ' : ' + cart[item].name + ' $' + price.toFixed(2) + ' == $' + subtotal.toFixed(2) +'</p>');
    };
    cartDiv.append( '<p>Grand Total: $' + grandTotal.toFixed(2) + '</p>');
};

$(document).ready(function(){
//    working with Shopping cart stuff:
   //add a buy button to each product
    $('div[data-product]').each( function (){
        $(this).append('<br /><button class="btnCart">Add to Cart</button>');
    });
    $('.btnCart').on("click", function(event){
        var pid = $(this).parent().data("product");
        console.log( pid );
        if ( cart[pid] ){
            cart[pid].qty += 1;
        } else{
            cart[pid] = new Object();
            cart[pid].qty = 1;
            cart[pid].name = $(this).siblings("span").data("name");
            cart[pid].price = $(this).siblings("span").next().data("price");
        }

        displayCart();

    });
    $('#buyNow').on("click",function(event){
        var buyUrl = "";
        for(var item in cart){
            buyUrl += " &pid=" + item + "&qty=" + cart[item].qty;
        }
        console.log(buyUrl);
    });
});