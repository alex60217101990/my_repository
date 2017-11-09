/**
 * Created by Alex on 15.10.2017.
 */
function SaveAllProducts(array){
    localStorage.setItem("lengthOfProducts", /*JSON.stringify(array.length)*/ array.length);
    for(let i=0; i<array.length; i++){
        localStorage.setItem("product"+i, JSON.stringify(array[i]));
    }
}
function saveProductInEnd(array, element){
    localStorage.setItem("lengthOfProducts", /*JSON.stringify(array.length)*/ array.length);
    localStorage.setItem("product"+array.length-1, JSON.stringify(element));
}
function  GetAllProducts(){
    let name, price, catId;
    let length=localStorage.getItem("lengthOfProducts");
    if(arguments.length){
        for(let j=0; j<length;j++){
            arguments[0].push(new Product(JSON.parse(localStorage.getItem("product"+j), function(key, value){
                if(key=='name') return value; }),JSON.parse(localStorage.getItem("product"+j), function(key,value){
                    if(key=='price') return value;}), JSON.parse(localStorage.getItem("product"+j), function (key, value) {
                        if (key=='image') return value;}), JSON.parse(localStorage.getItem("product"+j), function (key, value) {
                    if (key=='dopInfo') return value;}),
                JSON.parse(localStorage.getItem("product"+j), function(key, value){
                        if(key=='catId') {
                            let cat= new Category(JSON.parse(localStorage.getItem("product"+j), function(key, value){
                                if(key=='Id') return value;
                            }), JSON.parse(localStorage.getItem("product"+j), function(key, value){
                                if(key=='name') return value;
                            })); return cat;}}))
            )//);
        }
        return arguments[0];
    }
    else{
        let ArrayOfProducts=[];
        for(let j=0; j<length;j++){
            ArrayOfProducts.push(JSON.parse(localStorage.getItem("product"+j)));
        }
        return ArrayOfProducts;
    }
}
function SaveAllCategory(cat_arr) {
    localStorage.setItem("countOfCategory", cat_arr.length);
    for(let q=0; q<cat_arr.length; q++){
        localStorage.setItem("category"+q, JSON.stringify(cat_arr[q]));
    }
}
function SaveNewCat(cat_arr, new_cat) {
    console.log(cat_arr.length);
    localStorage.setItem("countOfCategory", cat_arr.length+1);
    localStorage.setItem("category"+cat_arr.length, JSON.stringify(new_cat));
}
function GetAllCategory() {
    let id, name;
    let length=localStorage.getItem("countOfCategory");
    if(arguments.length){
        for(let j=0; j<length;j++){

           // arguments[0].push(JSON.parse(localStorage.getItem("category"+j)));
            arguments[0].push(JSON.parse(localStorage.getItem("category"+j)));
        }
        return arguments[0];
    }
    else{
        let ArrayOfCategorys=[];
        for(let j=0; j<length;j++){
            ArrayOfCategorys.push(JSON.parse(localStorage.getItem("category"+j)));
        }
        return ArrayOfCategorys;
    }
}

function delAll(){
    let size=localStorage.getItem("lengthOfProducts");
    for(let u=0; u<size; u++){
        localStorage.removeItem("product"+u);
    }
    localStorage.removeItem("lengthOfProducts");
    size=localStorage.getItem("countOfCategory");
    for(let t=0; t<size; t++){
        localStorage.removeItem("category"+t);
    }
    localStorage.removeItem("countOfCategory");
}