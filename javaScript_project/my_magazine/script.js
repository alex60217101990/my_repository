/**
 * Created by Александр on 13.09.2017.
 */
/*var cart = new Cart();


cart.addProduct(new Product("Валенки", 250, "clothes"));


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
console.log(cart.GetCartElementById(1));*/




let category_arr=[];
category_arr.push(new Category(1,'clothes'));
category_arr.push(new Category(2,'footwear'));
category_arr.push(new Category(3,'accessories'));
category_arr.push(new Category(4,'perfumery'));
category_arr.push(new Category(5,'clock'));

let array_products=[];
array_products.push(new Product('wetwe',250, category_arr[1]));
array_products.push(new Product('yhfgrygfvryhv',400, category_arr[1]));
array_products.push(new Product('fhvbhfrbvr',700, category_arr[1]));
array_products.push(new Product('fhbvhrg', 740, category_arr[1]));
array_products.push(new Product('fhbvfr', 500, category_arr[1]));
array_products.push(new Product('vbhfgtg',800, category_arr[2]));
array_products.push(new Product('bfhjrtgtr',100, category_arr[2]));
array_products.push(new Product('bhgvdfyhrrrtgtr',1000, category_arr[2]));
array_products.push(new Product('bhgtr',4000, category_arr[2]));
array_products.push(new Product('bh5189456gtr',1500, category_arr[2]));
array_products.push(new Product('b/884545tgtr',1800, category_arr[3]));
array_products.push(new Product('bhg8756415', 87845, category_arr[3]));
array_products.push(new Product('hegfhr',5845, category_arr[3]));
array_products.push(new Product('dhfvgr', 25452, category_arr[3]));
array_products.push(new Product('jfhrg', 45541, category_arr[3]));
array_products.push(new Product('fvbhfgrf', 5451, category_arr[4]));
array_products.push(new Product('dvjbjreg', 24152, category_arr[4]));
array_products.push(new Product('sbvchef', 545, category_arr[4]));
array_products.push(new Product('sdhefc', 578254, category_arr[4]));
array_products.push(new Product('dfvbehjf', 6561, category_arr[4]));
array_products.push(new Product('dhgvhdev', 545, category_arr[5]));
array_products.push(new Product('xbgcfsdycsd', 8789, category_arr[5]));
array_products.push(new Product('snchcs', 878985, category_arr[5]));
array_products.push(new Product('scvgshcscs', 251201, category_arr[5]));
array_products.push(new Product('scvsc', 2454, category_arr[5]));