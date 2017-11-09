/**
 * Created by Александр on 15.09.2017.
 */
'use strict';
let category_arr=[];
let array_products=[];
sessionStorage.setItem('add', 0);
let AddNewProduct=document.querySelector('#left');
let Add = document.createElement('div');
Add.id = 'add';
AddNewProduct.appendChild(Add);
Add.textContent="Добавить продукт";
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Add.addEventListener("click", function(event){
    if(sessionStorage.getItem('add')%2==0) {
        let bl = document.createElement('div');
        let bl_name = document.createElement('input');
        let bl_image = document.createElement('input');
        let bl_price = document.createElement('input');
        let bl_dopInf = document.createElement('textarea');
        let bl_catId = document.createElement('input');
        let bl_bott = document.createElement('input');
        bl.id = 'bl';
        bl_name.id = 'name1';
        bl_image.id = 'img1';
        bl_price.id = 'price1';
        bl_catId.id = 'cat1';
        bl_dopInf.id = 'dopInf1';
        bl_bott.id = 'bott1';
        bl_bott.setAttribute('type', 'button');
        bl_image.setAttribute('type', 'url');
        bl_dopInf.setAttribute('type', 'text');
        bl_price.setAttribute('type', 'text');
        bl_name.setAttribute('type', 'text');
        bl_catId.setAttribute('type', 'text');


        document.querySelector('#left').appendChild(bl);
        bl.appendChild(bl_name);
        bl.appendChild(bl_image);
        bl.appendChild(bl_price);
        bl.appendChild(bl_catId);
        bl.appendChild(bl_dopInf);
        bl.appendChild(bl_bott);
        //--------------------------------------------------

        bl_bott.addEventListener('click', function() {
            //let rez1=bl_name.value.match( /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/g);
            let rez2 = bl_price.value.match(/^\d+(?:\.\d+)?(?:,\d+(?:\.\d+)?)*$/i);
            let rez3 = bl_image.value.match(/^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i);
            if(rez2.length && rez3.length && bl_catId.value.split('|').length && bl_name.value.length && bl_dopInf.value.length) {
                let o = new Category(parseInt(bl_catId.value.split('|')[0]), bl_catId.value.split('|')[1]);
                array_products.push(new Product(bl_name.value, rez2[0], rez3[0], bl_dopInf.value, o));
                let counter=0;
                for(let u=0; u<category_arr.length; u++){
                    if(category_arr[u].name!==bl_catId.value.split('|')[1])
                       counter++;
                    console.log(category_arr);
                    console.log(array_products);
                }
                if(counter>0) {
                    console.log(category_arr);
                    console.log(array_products);
                    category_arr.push(o);
                    counter=0;
                }
                SaveAllCategory(category_arr);
                console.log(category_arr);
                SaveAllProducts(array_products);
                console.log(array_products);
            }
        });
        //++++++++++++++++++++++++++++++++++++++++++++++++++
        let t=sessionStorage.getItem('add'); t++;
        sessionStorage.setItem('add', t);
    }
    else{
        document.getElementById('bl').remove();
        let t=sessionStorage.getItem('add'); t++;
        sessionStorage.setItem('add', t);
    }
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(category_arr.length);

/*
* 1111111111
* https://www.watches2u.com/watches/swiss-military/6-4231-04-007-mens-swiss-soldier-prime-black-leather-strap-watch.jpg
* 54545.5445
* {"Id": "6", "name": "clock"}
* fxdkjfdbjmfbjnfb fjnfdbf fdbjnfdbbfdnbfddjb fdbjfnb
* */






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



category_arr.push(new Category(1,'clothes'));
category_arr.push(new Category(2,'footwear'));
category_arr.push(new Category(3,'accessories'));
category_arr.push(new Category(4,'perfumery'));
category_arr.push(new Category(5,'clock'));


array_products.push(new Product('шорты',250, 'https://i2.rozetka.ua/goods/2019239/nike_876651_010_m_images_2019239981.jpg', 'здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...',category_arr[0]));
array_products.push(new Product('брюки',400, 'https://pi2.lmcdn.ru/img236x341/O/O/OO001EMNXJ52_4063145_1_v1.jpg','здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...,здесь будет любая дополнительная информация...',category_arr[0]));
array_products.push(new Product('рубашки',700,'https://gloimg.rowcdn.com/ROSE/2015/201511/source-img/1448672585790-P-3524659.jpg','здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...,здесь будет любая дополнительная информация...',category_arr[0]));
array_products.push(new Product('свитера', 740,'http://www.mhealth.ru/upload/iblock/1eb/1ebbd0df0ad04e6c9d3b16a19b4d369e.jpg','здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...,здесь будет любая дополнительная информация...,здесь будет любая дополнительная информация...',category_arr[0]));
array_products.push(new Product('куртки', 500,'http://admin.sunshouse.com.ua/uploads/fotos/muzhskie-kurtki-zima.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[0]));
array_products.push(new Product('туфли',800,'http://stepland.ru/images/ut000008157.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[1]));
array_products.push(new Product('сандали',100,'https://street-shoes.com.ua/images/M_images/%D0%A4%D0%BE%D1%82%D0%BE3.jpg555503399df91.jpg','здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[1]));
array_products.push(new Product('ботинки',1000,'https://shoessale.com.ua/public/360/4/1/2/41227/41227_0.jpg','здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[1]));
array_products.push(new Product('кросовки',4000,'http://chevli.com.ua/image/cache/data/Nike/Thea%20ai%20max/%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B1%D0%B5%D0%BB%D0%BE' +
    '-%D1%81%D0%B8%D0%BD%D0%B8%D0%B5%20%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8%20Nike%20Air%20Max%20Thea(%D0%9D%D0%B0%D0%B9%D0%BA%20%D0%90%D0%B8%D1%80%20%D0%9C%D0%B0%D0%BA%'+
'D1%81%20%D0%A2%D0%B5%D0%B0)%20%D0%BD%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%20%D0%9A%D0%B8%D0'+
'%B5%D0%B2%D0%B5,%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%20%D0%B8%20%D0%A3%D0%BA%D1%80%D0%B0%'+
'D0%B8%D0%BD%D0%B5!-500x500.jpg','здесь будет любая дополнительная информация...',category_arr[1]));
array_products.push(new Product('кеды',1500,'http://trainers-shop.ru/image/data/Kategorii/krossovki-mujskie-cena-nedorogo-yalta-simferopol.jpg','здесь будет любая дополнительная информация..., '+
 'здесь будет любая дополнительная информация...',category_arr[1]));
array_products.push(new Product('галстуки',1800,'https://bohenon.com/uploads/images/pages/d80b25153708c5192175866384e85f04963ed846.jpeg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[2]));
array_products.push(new Product('запанки', 87845,'http://avtograf22.ru/wp-content/uploads/2015/02/zolotye-zaponki.jpg','здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация...',category_arr[2]));
array_products.push(new Product('перчатки',5845,'http://fh.kiev.ua/wp-content/uploads/2013/12/modnye-muzhskie-perchatki.jpg','здесь будет любая дополнительная информация...',category_arr[2]));
array_products.push(new Product('сумки', 25452,'http://nedvigo.net/images/2-kakie-muzskie-sumki-modnie.jpg','здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[2]));
array_products.push(new Product('шапки', 45541,'http://tossy.ru/pics/2017/02/1486551031_5583.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[2]));
array_products.push(new Product('туалетна вода', 5451,'http://www.laromat.ru/pics/253421.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[3]));
array_products.push(new Product('бользам после бритья', 24152,'https://m.onlinetrade.ru/img/items/b/balzam_posle_britya_loreal_men_expert_gidra_sensitiv_100_ml_163819_2.jpg','здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация...',category_arr[3]));
array_products.push(new Product('гель для душа', 545,'http://ic.pics.livejournal.com/be_ba_bu/20549744/389175/389175_original.jpg','здесь будет любая дополнительная информация...',category_arr[3]));
array_products.push(new Product('одеколон', 578254,'https://img.klubok.com/img/used/2016/04/11/9481/9481802_2.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[3]));
array_products.push(new Product('дезодорант', 6561,'https://www.piluli.ru/images/smacs_images/products/000/464/976/original_dezodorant_sprej_Adidas_Get_Ready_muzhskoj_150_ml_www_piluli_ru_eapt241864.jpg','здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация...',category_arr[3]));
array_products.push(new Product('карманные', 545,'http://www.hollinsandhollinshead.com/ekmps/shops/hollins123/images/royal-london-full-hunter-quartz-pocket-watch-with-chain-90021-02-194333-p.jpg','здесь будет любая дополнительная информация...',category_arr[4]));
array_products.push(new Product('туристические', 8789,'http://www.milcamp.eu/image/data/Blogs/Suunto-Traverse-Alpha-2016-photo-4.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация..., '+
' здесь будет любая дополнительная информация...',category_arr[4]));
array_products.push(new Product('спортивные хронометры', 878985,'https://lv3.pigugroup.eu/colours/125/712/8/1257128/9256ceaadc0066c14a865962a9129267_large.jpg','здесь будет любая дополнительная информация...',category_arr[4]));
array_products.push(new Product('механические', 251201,'http://www.alltime.ru/obj/catalog/watch/orient/img/normal/ET0P002B.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...',category_arr[4]));
array_products.push(new Product('кварцевые', 2454,'http://timebar.ua/uploads/images/tovar/%D0%9D%D0%95%D0%A1%D0%A2%D0%95%D0%A0%D0%9E%D0%92/Neasterov-H056202-05E.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...'+
' здесь будет любая дополнительная информация... ',category_arr[4]));


//delAll();
//SaveAllCategory(category_arr);
//SaveAllProducts(array_products);



category_arr=GetAllCategory();
array_products=GetAllProducts();
console.log(GetAllCategory());
console.log(array_products[array_products.length-1].catId.name);
console.log("*****************");

console.log(category_arr.length);

let el6 = document.getElementById('right');
document.getElementById('left').style.height =  + (el6)/*document.body.clientHeight */+ 'px';


console.dir(array_products);
let arr_of_menu_div=[];
function menu(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(category_arr.length + '$$$$$');
        let div1 = document.createElement('div');
        let strelka = document.createElement('img');
        div1.className = 'menu';
        strelka.className = 'strelka';
        div1.innerHTML = '<p>' + category_arr[i].name + '</p>';
        /*!!!!!!!!!*/
        strelka.setAttribute('src', 'images/strelka1.png');
        strelka.hidden = true;
        div1.addEventListener("mouseover", function () {
            this.children[1].hidden = false;
        });
        div1.addEventListener("mouseout", function () {
            this.children[1].hidden = true;
        });
        var el = document.getElementById('left');
        el.insertBefore(div1, el.children[i]);
        div1.appendChild(strelka);
        arr_of_menu_div.push(div1);
        arr_of_menu_div.push(strelka);
    }
    ;
}
//console.dir(array_products);
//console.dir( arr_of_menu_div[0].textContent);
let arr_of_products=[];
let el5 = document.getElementById('right');
menu(category_arr);
work();

function work() {
    for (let q = 0; q < arr_of_menu_div.length; q += 2) {
        console.log();
        arr_of_menu_div[q].addEventListener("click", function () {
                let el5 = document.getElementById('right');
                if (el5.children.length > 0) {
                    while (el5.childNodes[0]) {
                        el5.removeChild(el5.childNodes[0]);
                    }
                }
                let u = 0;
                for (let j = 0; j < array_products.length; j++) {
                    sessionStorage.setItem('dopInf' + j, 0);
                    if (array_products[j].catId.name === arr_of_menu_div[q].textContent) {                /*!!!!!!!!!!!!!*/
                        /* console.dir(array_products[19].Category.Name);
                         console.dir( arr_of_menu_div[q].textContent);*/
                        let div2 = document.createElement('div');
                        let close = document.createElement('img');
                        div2.className = 'products';
                        close.className = 'closeIkon';
                        //  console.log(array_products[j].image);
                        close.setAttribute('src', 'images/close.png');
                        close.hidden = true;

                        div2.addEventListener("mouseover", function () {
                            this.children[3].hidden = false;
                            this.children[4].hidden=false;
                        });
                        //alert(close.parentElement);

                        div2.addEventListener("mouseout", function () {
                            this.children[3].hidden = true;
                            this.children[4].hidden=true;
                        });
                        console.log('!!');
                        div2.innerHTML = '<img src="' + array_products[j].image + '" class="imageProduct">' + "<p>" + array_products[j].name + "</p>" + "<p>" + array_products[j].price + "</p>";


                        let buy=document.createElement('img');
                        buy.className='buy';
                        buy.setAttribute('src', 'images/buy.png');
                        buy.hidden=true;
                        div2.appendChild(buy);


                        let el = document.getElementById('right');
                        let hei = document.body.clientHeight;
                        hei += 40;
                        el.appendChild(div2);
                        div2.appendChild(close);
                        close.addEventListener("click", function () {
                            this.parentElement.style.display = 'none';
                            div2.hidden = true;
                        });


                        let dop_info = document.createElement('div');
                        dop_info.className = 'dopInfoClose';


                        div2.addEventListener("click", function () {
                            if (sessionStorage.getItem('dopInf' + j) % 2 == 0) {
                                dop_info.classList.add('dopInfoClose');
                                dop_info.classList.remove('dopInfoOpen');
                                let time = sessionStorage.getItem('dopInf' + j);
                                time++;
                                sessionStorage.setItem('dopInf' + j, time);
                                div2.style.marginBottom = 0 + 'px';
                            }
                            else {
                                dop_info.innerHTML = '<p></p><span class="sp">Name: </span>' + ' - ' + array_products[j].name + '</p>' +
                                    '<p><span class="sp">Information: </span>' + array_products[j].dopInfo + '</p>';
                                div2.appendChild(dop_info);
                                div2.style.marginBottom = 200 + 'px';
                                dop_info.classList.remove('dopInfoClose');
                                dop_info.classList.add('dopInfoOpen');
                                let time = sessionStorage.getItem('dopInf' + j);
                                time++;
                                sessionStorage.setItem('dopInf' + j, time);
                            }
                        });
                        let el4 = document.getElementById('right');
                        el4.style.height = +(hei) + 'px';

                    }
                }
            }
        )
    }

}

/*let el6 = document.getElementById('right');
el6.style.height = +(el6)/*document.body.clientHeight + 'px';*/

//};