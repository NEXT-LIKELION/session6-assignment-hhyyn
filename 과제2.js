const person = {
    name: "David",
    city: "London",
    age: 30,
};

for (key in person) {
    if (typeof person[key] === "string") {
        person[key] = person[key] + " (확인됨)";
    } 
}

console.log(person);


const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
let newWords = [];
for (word of words) {
    if (word.length >= 5) {
        newWords.push(word);
    }
}

console.log(newWords);