// const arr = [1,2,3,4,5,88];


// for(let i=0; i<arr.length; i++)
//     console.log(arr[i]);

const allUsers = [
    {
        name: 'John',
        age: 30,
        class: 'A'
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Doe',
        age: 35
    }
]

console.log("\n\n\n")
for(let i=0; i<allUsers.length; i++)
{
    // if(allUsers[i]["name"] === 'Jane')
    if(allUsers[i].name === 'Jane')
    console.log(allUsers[i])
}