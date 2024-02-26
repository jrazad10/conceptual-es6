/*
function default parameter 
which will be used in react
*/

// const add = (x = 0, y = 0) => {
//     console.log(x + y);
// }

// add();

const person = {
    name: 'mehedy',
    age: 26
}

const showInfo = ({ name, age }) => console.log(name, age);


showInfo(person)