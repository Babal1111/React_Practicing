const user = {
    name: 'John Doe',
    age: 30,
}

console.log(user);


const user1 ={
    name: 'John Doe',
    age: 30,
    pata:{
        city:"jal",
        country:"india",
        moreDetails:{
            population:10000
        },
    },
    age:20,
    isStudent:true,
}
// its dexlared as const ? can we change it?yes

user.name = "boba";
console.log(user.name);