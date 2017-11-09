/**
 * Created by Александр on 15.09.2017.
 */

class Product /*extends Category*/{
    constructor(Aname, Aprice,ACategory) {
        this.name = Aname;
        this.price = Aprice;
        this.catId=ACategory;
    }
    get Name(){
        return (this.name);
    }
    get Price(){
        return (this.price);
    }
    get Category(){
        return (this.catId);
    }
    set Name(Aname){
        this.name = Aname;
    }
    set Price(Aprice){
        this.price = Aprice;
    }
    set Category(ACategory){
        this.catId = ACategory;
    }
}
Product.prototype.valueOf = function () {
    return JSON.stringify(this);
}
