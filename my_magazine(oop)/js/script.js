/**
 * Created by Александр on 15.09.2017.
 */
/*let cart = new Cart();
cart.add(new Product("Валенки", 250));


cart.add(new Product("Валенки", 250));
cart.add(new Product("Валенки", 250));
cart.add(new Product("Кеды", 150), 10);
console.log(cart.toString());
try {console.log(cart.searchAtNomber(8));}
catch(e){
    if(e.name=='error_of_index')
    console.log("ERROR OF INDEX:");
    }
console.log(cart);
cart.add(new Product('Sandali', 500),20,'hkhkk');
cart.add(new Product('Krasovki', 750));

try{
    console.log('777');
    console.log(JSON.stringify(cart.getNumberOfPairs('Krasovki')));
}
catch (e){
    if(e.name.localeCompare('error_of_name_entered'))
        console.log('ERROR OF PRODUCT NAME ENTERED:');
}
console.log(cart.GetCartElementById(3));
try {console.log(cart.deleteProduct('7'));}
catch (e){console.log('delete_error');}
console.log(cart.Sum);


window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
        "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");*/

///let c=new Product('fvnf',100, new Category(10,10));


let category_arr=[];
category_arr.push(new Category(1,'clothes'));
category_arr.push(new Category(2,'footwear'));
category_arr.push(new Category(3,'accessories'));
category_arr.push(new Category(4,'perfumery'));
category_arr.push(new Category(5,'clock'));

let array_products=[];
array_products.push(new Product('шорты',250, category_arr[0]));
array_products.push(new Product('брюки',400, category_arr[0]));
array_products.push(new Product('рубашки',700, category_arr[0]));
array_products.push(new Product('свитера', 740, category_arr[0]));
array_products.push(new Product('куртки', 500, category_arr[0]));
array_products.push(new Product('туфли',800, category_arr[1]));
array_products.push(new Product('сандали',100, category_arr[1]));
array_products.push(new Product('ботинки',1000, category_arr[1]));
array_products.push(new Product('кросовки',4000, category_arr[1]));
array_products.push(new Product('кеды',1500, category_arr[1]));
array_products.push(new Product('галстуки',1800, category_arr[2]));
array_products.push(new Product('запанки', 87845, category_arr[2]));
array_products.push(new Product('перчатки',5845, category_arr[2]));
array_products.push(new Product('сумки', 25452, category_arr[2]));
array_products.push(new Product('шапки', 45541, category_arr[2]));
array_products.push(new Product('туалетна вода', 5451, category_arr[3]));
array_products.push(new Product('бользам после бритья', 24152, category_arr[3]));
array_products.push(new Product('гель для душа', 545, category_arr[3]));
array_products.push(new Product('одеколон', 578254, category_arr[3]));
array_products.push(new Product('дезодорант', 6561, category_arr[3]));
array_products.push(new Product('карманные', 545, category_arr[4]));
array_products.push(new Product('туристические', 8789, category_arr[4]));
array_products.push(new Product('спортивные хронометры', 878985, category_arr[4]));
array_products.push(new Product('механические', 251201, category_arr[4]));
array_products.push(new Product('кварцевые', 2454, category_arr[4]));



let Obj=[];
let new_array_product=[];
function saveAllProduct(){
    for(let i=0; i<array_products.length; i++){
        localStorage.setItem("length",array_products.length.toString());
         localStorage.setItem("Product"+i,JSON.stringify(array_products[i]));
    }
}
let l=localStorage.getItem("length");
function getAllProduct(){
    for(let i=0; i<l; i++){
    new_array_product.push(localStorage.getItem("Product"+i));
    Obj.push(JSON.parse(new_array_product[i]));
    }
}
function removeProductById(id, new_el){
    localStorage.removeItem("lastname");
}
saveAllProduct();
getAllProduct();

console.log(l);
console.log(Obj);



 








let el6 = document.getElementById('right');
document.getElementById('left').style.height =  + (el6)/*document.body.clientHeight */+ 'px';


console.dir(array_products);
let arr_of_menu_div=[];
for(let i=0; i<category_arr.length; i++){
    let div1 = document.createElement('div');
    let strelka = document.createElement('img');
    div1.className = 'menu';
    strelka.className = 'strelka';
    div1.innerHTML = '<p>'+category_arr[i].Name+'</p>';
    strelka.setAttribute('src', 'images/strelka1.png');
    strelka.hidden=true;
    div1.addEventListener( "mouseover", function () {
        this.children[1].hidden=false;
    });
    div1.addEventListener( "mouseout", function () {
        this.children[1].hidden=true;});
    var el=document.getElementById('left');
    el.insertBefore(div1, el.children[i]);
    div1.appendChild(strelka);
    arr_of_menu_div.push(div1);
    arr_of_menu_div.push(strelka);
};
//console.dir(array_products);
//console.dir( arr_of_menu_div[0].textContent);
let arr_of_products=[];
let el5 = document.getElementById('right');

for(let q=0; q<arr_of_menu_div.length; q+=2) {
    arr_of_menu_div[q].addEventListener( "click", function () {
         let el5=document.getElementById('right');
         if(el5.children.length>0){
             while(el5.childNodes[0]){
                 el5.removeChild(el5.childNodes[0]);
             }
         }
        for (let j = 0; j < array_products.length; j++) {
            if (array_products[j].Category.Name === arr_of_menu_div[q].textContent) {
               /* console.dir(array_products[19].Category.Name);
                console.dir( arr_of_menu_div[q].textContent);*/
                let div2 = document.createElement('div');
                let close = document.createElement('img');
                div2.className = 'products';
                close.className = 'closeIkon';
                close.setAttribute('src', 'images/close.png');
                close.hidden=true;

                div2.addEventListener( "mouseover", function () {
                    this.children[2].hidden=false;
                });
                //alert(close.parentElement);

                div2.addEventListener( "mouseout", function () {
                    this.children[2].hidden=true;});

                div2.innerHTML = "<p>" + array_products[j].Name + "</p>" + "<p>" + array_products[j].Price + "</p>";
                let el = document.getElementById('right');
                let hei = document.body.clientHeight;
                hei += 40;
                el.appendChild(div2);
                div2.appendChild(close);
                close.addEventListener( "click", function () {
                    this.parentElement.style.display='none';
                    div2.hidden=true;
                });
               // alert(hei);
                let el4 = document.getElementById('right');
                el4.style.height = +(hei) + 'px';
            }
        }
    }
    )
}
/*let el6 = document.getElementById('right');
el6.style.height = +(el6)/*document.body.clientHeight + 'px';*/

//};