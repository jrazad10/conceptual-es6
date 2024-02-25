//destructuring array

// const nums = [3, 5, 7, 9, 8];

// const [a, b, c, ...d] = nums;

// console.log(a, b, c, ...d);


// =--------------------------------------------
// destructing object 


const person = {
    name: 'hero', age: 34, phone: '018899776655', p: [1, 2, 3, 4],
    address:{
        zilla: 'ctg',
        village: 'garduara'
    }
}

const {address:{zilla:thikana}} = person;
console.log(thikana);

// const {name,...rest}= person;
// console.log(name);


// const { name, phone: mobile, address, age } = person;
// console.log(mobile);


// const person1 = {...person};
// person1.email = 'hero@gmail.com'
// console.log(person1);





