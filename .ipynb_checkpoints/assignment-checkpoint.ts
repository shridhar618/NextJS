// // Area of rectangle
// let length: number = 10;
// let breadth: number = 5;
// let area: number = length * breadth;
// console.log("Area =", area);

// // Swap values
// let a: number = 10;
// let b: number = 20;
// let temp: number = a;
// a = b;
// b = temp;
// console.log("After swap:", a, b);

// Grade calculation
// let marks: number = 85;

// if (marks >= 90) {
//     console.log("Grade A+");
// } else if (marks >= 80) {
//     console.log("Grade A");
// } else if (marks >= 70) {
//     console.log("Grade B");
// } else if (marks >= 60) {
//     console.log("Grade C");
// } else if (marks >= 50) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }




// let num: number = -5;
// if (num > 0)
//     console.log("Positive");
// else if (num < 0)
//     console.log("Negative");
// else
//     console.log("Zero");


// function square(n: number): number {
//     return n * n;
//     }
// console.log(square(6));



// function isPrime(n: number): boolean {
//     if (n <= 1) return false;   
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0)
//             return false;
//    }   
//    return true;
//    }
// console.log(isPrime(17));


// function reverseString(str: string): string {
//        return str.split("").reverse().join("");
//     }
// console.log(reverseString("Shridhar"));


// let arr: number[] = [10, 4, 8, 2, 15];
// console.log(Math.min(...arr));


// let arr: number[] = [10, 20, 30, 40, 50];
// let sum = arr.reduce((a, b) => a + b, 0);
// let average = sum / arr.length;
// console.log("Sum =", sum);
// console.log("Average =", average);



let arr: number[] = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
