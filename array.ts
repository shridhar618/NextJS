let numbers: number[] = [1, 2, 3, 4, 5];
let total: number = 0;

for(let num of numbers) {
    total += num;
}

console.log(`Total sum of array elements is: ${total}`);



//Array indexing
let fruits: string[] = ["Apple", "Banana", "Cherry", "Date"];
console.log(`First fruit: ${fruits[0]}`);
console.log(`Second fruit: ${fruits[1]}`);
console.log(`Third fruit: ${fruits[2]}`);
console.log(`Fourth fruit: ${fruits[3]}`);


//functions in typescript
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20)); // Output: 30



//Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
}

console.log(multiply(5, 4)); // Output: 20
