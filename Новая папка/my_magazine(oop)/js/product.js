/**
 * Created by Александр on 15.09.2017.
 */

class Product /*extends Category*/{
    constructor(Aname, Aprice,img,DopInfo,ACategory) {
        this.name = Aname;
        this.price = Aprice;
        this.image=img;
        this.catId=ACategory;
        this.dopInfo=DopInfo;
    }
    get Name(){
        return (this.name);
    }
    get Img(){
        return (this.image);
    }
    get Price(){
        return (this.price);
    }
    get Info(){
        return (this.dopInfo);
    }
    get Category(){
        return (this.catId);
    }
    set Image(Image){
        this.image=Image;
    }
    set Name(Aname){
        this.name = Aname;
    }
    set Price(Aprice){
        this.price = Aprice;
    }
    set Info(Info){
        this.dopInfo=Info;
    }
    set Category(ACategory){
        this.catId = ACategory;
    }
}
Product.prototype.valueOf = function () {
    return JSON.stringify(this);
}
