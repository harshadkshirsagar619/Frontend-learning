class Car {

    constructor(brand,mileage){
        this.brand = brand;
        console.log("creating new Obj",brand," | Mileage :",mileage);
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBarnd(brand){
        this.brandName = brand;
    }

}

let myObj = new Car("maruti",15);
console.log(myObj);
let myObjs = new Car("Jeep",10);
console.log(myObjs);
let myObjy = new Car("Ferrari",9);
console.log(myObjy);
myObj.setBarnd("Nissan");
myObj.start();