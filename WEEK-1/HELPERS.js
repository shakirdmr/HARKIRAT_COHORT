const users = [
    {
        name: "shakoir",
        age:21
    },
    {
        name:"ali",
        age:22
    },
    {
        name:"shaw"
    }
]

console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))


console.log("\n\n")
console.log(users[0])

console.log("\n\n___")
console.log(JSON.stringify(users))

const userss = '{"shakir":12}';

console.log("\n\n\n\n");

JSON.parse(userss);

console.log(userss);