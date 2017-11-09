/**
 * Created by Alex on 18.10.2017.
 */
$('<div/>').attr("id","Cart").appendTo("#left").css('position','relative');
$( "<img src='http://www.kniga.org.ua/images/cart/cart.png'>").attr("id","myCart")
    .css( "width", "40%" ).css('height', 'auto').css('position', 'relative').css('left','30%').appendTo( "#Cart" );
let cart= $('#myCart');
cart.mouseover(function(){
    $(this).css("cursor","pointer")
});
let arr_pr=$('div.products');

arr_buy.on('change', function(event) { // handler
    if(event.type=="insert") {
        if ($('#size').length) {
            $('#size').text(arr_buy.length);
        }else{
            $('<p id="size">')
                .css('width','25px').css('height','25px').css('background','red')
                .css('border','2px solid yellow').css('color','#E0FFFF').css('font-size','22px')
                .css('text-align','center').css('border-radius','14px')
                .css('position','absolute').css('top','5%').css('left','65%')
                .text(arr_buy.length)
                .appendTo("#Cart");
            $('<img src="images/update.png">')
                .css('width','27px').css('height','27px')
                .css('position','absolute').css('top','18%').css('left','29%').appendTo("#Cart")
                .on({
                    click: function (event) {
                        arr_buy.remove(undefined);
                        //$('#size').remove();
                       // $(this).remove();
                        $('#size').fadeTo("fast", 0);
                        $(this).fadeTo("fast", 0);
                    }
                });
        }
    }
});


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}





cart.click(function (event) {
    if(arr_buy.length<=0) {
        $('<p id="otv">Извините, корзина заказов пуста!</p>').appendTo("body");
        $('#otv').center();
        $(window).scroll(function () {
            if ($('#otv').length > 0) {
                $('#otv').center();
            }
        });
        setTimeout(massege, 4000);
        function massege() {
            $('#otv').remove();
        }
    }
    else{
        $('<div id="font">').css('width','100%').css('height','1000%').css('background','#000').css('margin','0')
            .css('opacity','0.7').css('position','absolute').css('top','0').css('left','0')
            .css('z-index','7768').appendTo("body");
        //if($('#CArt').length==0) {
            $('<div id="CArt">').css('width', '80%').css('height', '70%').css('animation', 'sky1 10s infinite linear')
                .css('z-index', '7770').css('overflow','scroll').appendTo("body");
            $('<img id="closeCart" src="images/CloseCart.png"/>').css('width', '30px').css('height', '30px')
                .appendTo('#CArt');
        //}

        let mytable = document.createElement('table');
        mytable.setAttribute('id', 'tableProduct');
        mytable.setAttribute('border', '1px');
        document.getElementById('CArt').appendChild(mytable);
        $('#tableProduct').attr('cellspacing','0');
        $('#tableProduct').attr('cellpadding','0');
            for (let i = 0; i < catName.length; i+=5) {
                //console.log(document.getElementsByTagName('table')[0]);
                let el=$('<tr><td>'+catName[i]+'</td><td>'+catName[i+1]+'</td><td>'+
                    '<img class="cI" src="'+catName[i+2]+'"/>'+
                    '</td><td>'+catName[i+3]+'</td><td>'+catName[i+4]+'</td></tr>');
                $('#tableProduct').append(el);
                console.log(catName);
            }
       // $('<img id="buttKup" src="images/buyCart.png"/>').appendTo('#CArt');
        $('<button id="buttKup1"/>').appendTo('#CArt');
        $('#buttKup1').text('Пoдтвердить заказ');






        $('#closeCart').click(function () {
            $('#font').remove();
            $('#CArt').remove();
        })
        $('#CArt').center();
        $('#CArt').addClass('scrol1Cart')
        $(window).scroll(function () {
            if($('#CArt').length>0){
                $('#CArt').center();
            }
        });
    }
});


