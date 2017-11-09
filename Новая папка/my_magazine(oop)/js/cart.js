/**
 * Created by Александр on 15.09.2017.
 */
'use strict';
class Cart extends Array {
    //  constructor(){
    //let productList=[];
    add(product, quantity, description) {
        let counter = 1;
        quantity = quantity || 1;
        description = description || "information is absent";
        product = product || 0;
        let b = false;
        for (let i = 0; i < this.length; i++) {
            if (this[i].product.valueOf() == product.valueOf() && this[i].description === description) {
                this[i].quantity += quantity;
                return;
            }
        }
        this.push({"product": product, "quantity": quantity, "description": description, "id": ++counter});
    }


    toString() {
        return JSON.stringify(this);
    }


    searchAtNomber(index) {
        if (typeof index == "number" && index < this.length && index > 0) {
            return this[index];
        } else {
            throw new err('error_of_index');
        }
    }


    getNumberOfPairs(name_of_product) {
        var size = 0;
        let new_arr=[];
        if(typeof name_of_product == "string"){
            for (let j=0; j<this.length; j++)
            {
                if (this[j].product.name === name_of_product) {new_arr.push(this[j]); size++;}
            }
            if (size <= 0)
            return 'not found !';
            else return new_arr;
        }
        else{
            throw new err2('error_of_name_entered')
        }
    }


    GetCartElementById(id) {
        if( typeof (id)!="number" ||arguments.length<1||
            typeof id === "undefined" || id === null ||
            id ===  ""|| id>=this.length || id<0)
            throw new err3('reeoe_of_Id');
        else{
            return this[id-1];
        }
    }

    deleteProduct(name) {
        var search_string = arguments[0];
        function isEmpty(str) {
            return (typeof str === "undefined" || str === null || str ===  "");
        }
        if(isEmpty(name)){throw new err4('error_of_delete_by_info');}
        if(typeof name ===null || arguments.length<1 || isNaN(name)) throw err4;
        for(var q=0; q<this.length; q++){
            if(this[q].product.price === +name || this[q].quantity === name
                || this[q].description === name|| this[q].product.name===name){
                this.splice(q, 1);
            }
        }
        return this;
    }




    get Sum() {
        var summa=0;
        var new_array_with_sum=[];
            for (let u=0;u<this.length; u++){
                new_array_with_sum.push({"product": this[u], "sum": (this[u].quantity*this[u].product.price)});
            }
        for (let e=0; e<this.length; e++){
            summa+=(parseInt(this[e].product.price,10)*parseInt(this[e].quantity));
        }
        for (var key in this) { this[key].product;}
        return {"total": summa, "products":new_array_with_sum};
    }
};


function compareSum(sumA,sumB){return (sumA.product.price*sumA.quantity-sumB.product.price*sumB.quantity);}
function compareNameOfProduct(nameA,nameB){return (nameA.product.name.localeCompare(nameB.product.name));}
function compareQuantity(quanA,quanB){return (quanA.quantity-quanB.quantity);}
function compareDescription(descA,descB){return (descA.description.localeCompare(descB.description));}
function compareId(IdA,IdB){return (IdA.id-IdB.id);}

