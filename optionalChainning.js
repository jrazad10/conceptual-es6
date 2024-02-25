const petOwner = {
    name: 'hero',
    contact: {
        phone: '0987656789',
        email: 'hero@gmail.com'
    },
    pet: {
        name:'lofie',
        info: {
            color: 'black',
            weight: '1.2kg',
            // food:{
            //     price: 20,
            // }
        },
    },
};

console.log(petOwner.pet.info?.food?.price);
 

