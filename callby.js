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

function a(){
    console.log("hello from comeback");
}

function main(callback){
    callback()
}

main(a);