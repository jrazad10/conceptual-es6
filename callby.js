// function show(name, age) {
//     console.log('my name is :', name, 'age is', age);
// }

// function fun1(name, age, callback) {
//     console.log("hell0");
//     setTimeout(() => {
//         callback(name, age);
//     }, 2000)
// }

// fun1('md azad', 26, show)

// function a(){
//     console.log("hello from comeback");
// }

// function main(callback){
//     callback()
// }

// main(a);


// function a(){
//     console.log("azad code shiktese");
// }

// function main2(callback){
//     callback()
// }

// main2(a);


// function show(name, age) {
//     console.log("my name is :", name, "age is :", age);
// }

// function details(name, age, callback) {
//     callback(name, age)
// };

// details('md azad', 26, show);


function show(name, age) {
    console.log('name:', name, 'age:', age);
}

function id(name, id, callback) {
    callback(name, id)
}


id('azad', '01', show)

