// Q1 From a string any word having more than 4 characters reverse them and print the whole string.

function reverseStr(str) {
  let result = str
    .split(" ")
    .map((char) => (char.length >= 4 ? char.split("").reverse().join("") : char))
    .join(" ");
  return result;
}
console.log(reverseStr("Hello my name is Shashwat Naik ."))
console.log(reverseStr("Hello my name is Dhruv Patel ."))

// Q2 if((x==1) && (x==2) && (x==3))console.log("true"); Now choose a number x in such a way that it satisfies the if condition and prints true.


// Q3
let arr=[1,2,[3,4,[5,6,[7,8,[9,10,11]]]]];
let arr1=arr.join();
console.log(arr1.split(","));

// Q4 
let  num=(1+"1")-1;
console.log(num);

// Q5 Write a logic to find 



