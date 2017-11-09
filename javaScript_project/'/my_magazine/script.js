/**
 * Created by Александр on 13.09.2017.
 */
var cart = new Cart();
cart.addProduct(new Product("Валенки", 250));
/*

 cart.addProduct(new Product("Валенки", 250));
 cart.addProduct(new Product("Валенки", 250));
 cart.addProduct(new Product("Валенки", 250));
 4 пары валенок

 */

cart.addProduct(new Product("Валенки", 250));
cart.addProduct(new Product("Валенки", 250));
cart.addProduct(new Product("Кеды", 150), 10);
if(cart.getNumberOfPairs("Кеды")>0)
    console.log(cart.getNumberOfPairs("Кеды"))
else
    console.log("такой продукт отсутствует!");




cart.addProduct(new Product("Кеды", 150), 10);
cart.addProduct(new Product("Кеды", 150), 10);
console.log(cart.getProducts());

console.log(cart.sum);

var v = new Product("Валенки", 250);
var v2 = new Product("Валенки", 250);
var k = new Product("Кеды", 150);

console.log(product_comparison(v,k));
console.log( product_comparison(v,v2));
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

//console.log(cart.deleteProduct(3));
console.log(cart.deleteProductObject("Кеды", "description"));
console.log(cart.SetQuantity("Кеды", '100'));
console.log(cart.GetCartElementById(1));
