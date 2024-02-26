/*
bongsher maddhome kichu pawa. nam/jomi etc
*/

class Owner {
    ownerName;
    ownerAge;

    constructor(name, age) {
        this.ownerName = name;
        this.ownerAge = age;
    }

    ownerInfo() {
        console.log(`owner name is ${this.ownerName}. Age of the owner is ${this.ownerAge}`);
    }
}

// 

class Owner2 {
    owner2name;
    owner2age;

    constructor(name, age) {
        this.owner2name = name;
        this.owner2age = age;
    }

    showInfo() {
        console.log(`owner is ${this.owner2name}, age is ${this.owner2age}`);
    }
}


class Vehicle extends Owner2 {
    name;
    age;

    constructor(name, age, oName, oAge) {
        super(oName, oAge);
        this.name = name;
        this.age = age;
    }

    vechileInfo(){
        console.log(`vehicle name is ${this.name}, age is ${this.age}`);
    }

}

const x = new Vehicle("BMX", "2 years", "azad", 26);
x.showInfo();
x.vechileInfo();

// class Bike extends Vehicle{
//     name;
//     color;

//     constructor(bName, bColor, oName, oAge){
//         super(oName, oAge);
//         this.name = bName;
//         this.color = bColor;

//     }

//     bikeInfo(){
//         console.log(`Bike is ${this.name} color of the bike is ${this.color}`);
//     }
// }

// const y = new Bike("Yamaha", "Black");
// y.showInfo();
// y.bikeInfo();