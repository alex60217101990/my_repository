/**
 * Created by Александр on 13.09.2017.
 */
function Cart() {
    var productList = [];
    /*this.addProduct = function(product, quantity) {
        quantity = quantity || 1;
        productList.push({"product": product, "quantity":quantity});
    }*/
    var counter;
    this.addProduct = function(product, quantity, description) {
        quantity = quantity || 1;
        description=description || "information is absent";
        var b=false;
        for (var i=0; i<productList.length; i++){
            if(productList[i].product.name===product.name && productList[i].description===description){
                productList[i].quantity+=quantity; return;}
        }
        productList.push({"product": product, "quantity":quantity, "description": description, "id": ++counter});
    }


    var it = productList.entries();
    var entry;
    while (!(entry = it.next()).done) {
        if(entry.value[1].product.name===name_of_product) size++;
    }




    this.getProducts = function(){
        return productList;
    }


    this.getNumberOfPairs=function(name_of_product){
        var size=0;
       /* for (var key in productList) {
            if(productList[key].product.name===name_of_product) size++;
        }*/
       //через итераторы стандарт 6:
        var it = productList.entries();
        var entry;
        while (!(entry = it.next()).done) {
            if(entry.value[1].product.name===name_of_product) size++;
        }
        if(size>0) return size;
        return -1;
    };




    var new_array_with_sum=[];
    function new_arr() {
        productList.forEach(function (p1, p2, p3) { new_array_with_sum.push({"product":p1, "sum": (p1.quantity*p1.product.price)}) });
    }

    


    function product_comparison(obj1, obj2){
        var counter=0;
        for(var key1 in obj1){
            for (var key2 in obj2){
                if(obj1[key1]==obj2[key2]) counter++;
            }
        }
        if(counter!=0)return false;
        if(counter==0) return true;
    }


    function product_comparison_name(obj1, obj2){
        var counter=0;
        if(obj1.name===obj2.name) return true;
        else return false;
    }


    this.getS=function () {
        var copy_arr =[];
           copy_arr = productList.slice();
        return copy_arr;
    }

    /*Object.defineProperty(this, "getNewArrayWithSum", {
        get: function() {
            var new_array_with_sum = [];
            var copy_arr = productList.slice();

/*
                for (var counter1 = 0; counter1 < copy_arr.length; counter1++) {
                    for (var counter2 = counter1 + 1; counter2 < copy_arr.length; counter2++) {
                        if (copy_arr[counter1].product.name === copy_arr[counter2].product.name) // если найден одинаковый элемент
                        {
                            for (var counter_shift = counter2; counter_shift < copy_arr.length - 1; counter_shift++) {
                                // выполнить сдвиг всех остальных элементов массива на -1, начиная со следующего элемента, после найденного дубля
                                copy_arr[counter_shift].quantity += copy_arr[counter_shift + 1].quantity;
                                copy_arr.splice(counter_shift, 1, copy_arr[counter_shift + 1]);

                            }
                            if (copy_arr[counter1].product.name === copy_arr[counter2].product.name) // если следующий элемент - дубль
                            {
                                counter2--; // выполнить переход на предыдущий элемент     
                            }
                        }
                    }
                }
            return copy_arr;


    });*/




    var counter=0;
    Object.defineProperty(this, "sum", {
        get: function() {
            var summa=0;
            var it = productList.entries();
            var entry;
            while (!(entry = it.next()).done) {
                summa+=(parseInt(entry.value[1].product.price,10)*parseInt(entry.value[1].quantity));
            }
            for (var key in productList) {
                productList[key].product;}
            new_arr();
            return {"total": summa, "products":new_array_with_sum/*[{"product":,"sum":234}]*/};
        }
    });


    
    
    this.deleteProduct=function (name) {
        var search_string = arguments[0];
        function isEmpty(str) {
            return (typeof str === "undefined" || str === null || str ===  "");
        }
        if(isEmpty(name)){console.log("ERROR"); return;}
            for(var q=0; q<productList.length; q++){
                if(productList[q].product.price === name || productList[q].quantity === name
                    || productList[q].description === name|| productList[q].product.name===name){
                        productList.splice(q, 1);
                }
            }
            return productList;
    }



    this.deleteProductObject=function (index, section) {
        var search_index = arguments[0];
        var section = arguments[1];
        function isEmpty(str) {
            return (typeof str === "undefined" || str === null || str ===  "");
        }
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        if(isEmpty(search_index) || isNumeric(search_index) || isNumeric(section) || isEmpty(section))
        {console.log("ERROR_1"); return;}
        if(section==="quantity"){
            for(var q=0; q<productList.length; q++){
                if(productList[q].product.name===search_index) delete productList[q].quantity;
            }
        }
        if(section==="description"){
            for(var q=0; q<productList.length; q++){
                if(productList[q].product.name===search_index) delete productList[q].description;
            }
        }
        if(section==="product"){
            for(var q=0; q<productList.length; q++){
                if(productList[q].product.name===search_index) delete productList[q].product;
            }
        }
        return productList;
    }



    this.SetQuantity= function(product,value) {
        var r=false;
        if(typeof (product)!="string" || typeof (value)!="number" || arguments.length<2 ||
                typeof product === "undefined" || typeof value === "undefined" || value === null || product ===  ""
                ||product===null || isNaN(value) /*|| isNaN(product)*/)
                return false;
            productList.forEach(function (p1, p2, productList) { if(p1.product.name===product)
            { p1.quantity=parseInt(value); r=true;}});
        if(r===false)return false; else return true;
        };
    this.GetQuantity = function (product,value) {
        if(typeof (product)!="string" || typeof (value)!="number" ||arguments.length<2 ||
            typeof product === "undefined" || typeof value === "undefined" || value === null || product ===  ""
            ||product===null || isNaN(value) /*|| isNaN(product)*/)
            return false;
            productList.forEach(function (p1, p2, p3) { if(p1.product.name===product) return p1.quantity;});
        }


    this.GetCartElementById=function (id) {
        if( typeof (id)!="number" ||arguments.length<1||
            typeof id === "undefined" || id === null ||
            id ===  ""|| id>=productList.length || id<0)
            return;
        else{
            return productList[id-1];
        }
    }
}