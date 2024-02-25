
//forEach, Map, Find, Filter, reduce

// for (let item of numbers) {
//     console.log(item);
// }

// numbers.forEach(item => console.log(item));

// numbers.map(item => console.log(item)); 



// const a = numbers.forEach(item => item)
// console.log(a);

// const b = numbers.map(item => item + 1)
// console.log(numbers);
// console.log(b);



// const a = numbers.find(item => item === 50);
// console.log(a);


// const a = numbers.filter(item => item % 2 === 1);
// console.log(a);


const numbers = [10, 20, 30, 40, 50];

const x = numbers.reduce((a, b) => a + b, 0);
console.log(x);