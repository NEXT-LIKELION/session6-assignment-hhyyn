const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

// 1. filter
const evenNumbers = numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

// 2. map
const squaredNumbers = evenNumbers.map(num => num*num);
console.log(squaredNumbers);

// 3. reduce
const sum = squaredNumbers.reduce((total, num) => total+num, 0);
console.log(`${squaredNumbers.join(' + ')} = ${sum}`);