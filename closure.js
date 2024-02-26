const comapany = () => {
    let employee = 120;

    const employeeRecruit = () => {
        employee = employee + 5;
        console.log("total employee after recruit", employee);
    }
    return employeeRecruit;
}


const x12 = comapany();
x12();
x12();
x12();