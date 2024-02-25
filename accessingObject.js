const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '0998877665',
        email: 'abul@gmail.com'
    },
    education: {
        schoolName: 'crsc',
        subjects: [
            {name:'bangla',mark: 45},
            {name:'english', mark: 64},
            {name:'math', mark: 74}
        ]
    }
}

console.log(person.education.subjects[1]);