// //code repetation komano hocche object oriented er kaj

// //class is a blueprint of creating an object 

// class Animal {
//     name = 'meow';
//     color = 'red';

//     show(){
//         console.log("hello from class");
//     }
// }

// const cat = new Animal();
// console.log(cat.name);
// cat.show();


// class Animal {
//     name;
//     color;
//     constructor(petName, petColor) {
//         this.name = petName;
//         this.color = petColor;
//     }
// }

// const cat = new Animal("travis", "white");
// const dog = new Animal("tom", "black");
// console.log(dog);



// class Human {
//     name;
//     age;
//     height;
//     constructor(personName, personAge, personHeight){
//         this.name = personName;
//         this.age = personAge;
//         this.height= personHeight;
//     }
// }

// const azad = new Human('azad', 26, 6.5);
// console.log(azad.height);

class Flower {
    name;
    color;
    height;
    constructor(flowerName, flowerColor, flowerHeight) {
        this.name = flowerName;
        this.color = flowerColor;
        this.height = flowerHeight;
    }

    showInfo() {
        console.log(`flower name is ${this.name}, color of the flower is ${this.color}, height of the flower is ${this.height}`);
    }
}

const sunFlower = new Flower('sunflower', 'yellow', '68cm');
const rose = new Flower ("rose","red","70cm")
sunFlower.showInfo();
rose.showInfo();

