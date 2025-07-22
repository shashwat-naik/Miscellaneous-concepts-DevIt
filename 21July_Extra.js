// Q1 putting elements from 7 index in an existing array
array1 = [1, 2, 3, 4];
console.log(array1);
array1[7] = 7;
console.log(array1);
console.log(array1.length);
console.log(array1[5]);

// Q2 Null cases
let a = null;
console.log(a == 0);
console.log(a == undefined);
console.log(a === 0);
console.log(a > 0);
console.log(a >= 0);
console.log(a <= 0);


// Q3
console.log("a");

setTimeout(() => {
  console.log("b");
}, 15000); 

setTimeout(() => {
  console.log("c");
}, 0); 

console.log("d");

new Promise(() => {
  console.log("e");
});

let interval = setTimeout(() => {
  console.log("f");
}, 2000);
