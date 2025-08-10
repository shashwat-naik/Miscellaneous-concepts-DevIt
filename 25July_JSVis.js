// 1)Generate Random Numbers 1 to 100.

console.log(Math.floor(Math.random() * 100) + 1);

// 2)Remove Duplicate From Array ex. const arr = [1,2,2,3,3,3,4,5,7,7,7] without using Newset() method.

function duplicateRemove(arr) {
  let size = arr.length;
  let ptrIndex = 1;
  for (let i = 1; i < size; i++) {
    if (arr[i] !== arr[i - 1]) arr[ptrIndex++] = arr[i];
  }
  return ptrIndex;
}

let arr = [1, 2, 2, 3, 3, 3, 4, 5, 7, 7, 7];
let newLength = duplicateRemove(arr);

for (var i = 0; i < newLength; i++) {
  process.stdout.write(arr[i] + " ");
}
console.log();

// 3)Count Number of Vowels in string eg. const name = 'Javascript'.

let name = "Javascript";
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
for (var i = 0; i < name.length; i++) {
  if (vowels.includes(name[i].toLowerCase())) count++;
}
console.log(count);

// OR

let name1 = "Javascript";
let matching = name.match(/[aeiou]/gi);
console.log(matching ? matching.length : 0);

// 4)Swapping two variable Without Using Third Variable.

function swap(digit1, digit2) {
  digit1 = digit1 + digit2;
  digit2 = digit1 - digit2;
  digit1 = digit1 - digit2;

  return { digit1, digit2 };
}

let { digit1, digit2 } = swap(5, 10);
console.log(`digit 1 is ${digit1} and digit 2 is ${digit2}`);

// 5)Debounce function.
// 6)Write a Program Check if an object is Empty.

function blank(obj) {
  if (Object.keys(obj).length === 0) {
    return "Empty";
  } else {
    return "Not Empty";
  }
}

console.log(blank({}));
console.log(blank({ name: "JS" }));

// 7)Convert an Object to a queryString.

function Obj_QueryString(obj) {
  return Object.keys(obj)
    .map(
      (key) => `${encodeURIComponent(key)} = ${encodeURIComponent(obj[key])}`
    )
    .join(" & ");
}
let String = Obj_QueryString({ name: "Shashwat", age: 25 });
console.log(String);

// 8)Find the Factorial.

function factorial(num) {
  let ans = 1;
  for (let i = num; i >= 1; i--) {
    ans *= i;
  }
  return ans;
}
let number = 5;
console.log(factorial(number));

// 9)Check if two arrays are Equal.

function checkArr(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}
let arr1 = [1, 9, 3, 5];
let arr2 = [9, 3, 5, 1];
console.log("Both Arrays are " + checkArr(arr1, arr2) + " to be equal.");

// 10)Get All Unique values from Nested Array eg.[[1,2],[2,3],[3,4],[4,3],[5,5]].

let a = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 3],
  [5, 5],
];

let flatArr = [];
for (let sub of a) {
  for (let num of sub) {
    if (!flatArr.includes(num)) {
      flatArr.push(num);
    }
  }
}

console.log(flatArr);

// 11) Convert String to CamalCase.(Your Full Name).

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(toCamelCase("Shashwat Naik"));

// 12)Make a TextArea And write a Paraghraph in it and also make a button and when user Click btn the whole Paragraph Will Cpoied.

// 13)Check If String Has all unique Char.

function uniqueChar(str) {
  let store = new Set();
  for (let char of str) store.add(char);
  return store.size == str.length;
}

console.log(uniqueChar("Shashwat"));
console.log(uniqueChar("Naik"));

// 14)Find The First Non Repeating Char In String.

function nonRepeatChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] == 1) return char;
  }
  return null;
}

console.log(nonRepeatChar("DEVIT"));
console.log(nonRepeatChar("aabb"));
console.log(nonRepeatChar("aabbccdde"));

// 15)Find The Intersection of Two Arrays ex. [[1,2,3],[2,3,4]] / O.P [2,3].

let arrays = [
  [1, 2, 3],
  [2, 3, 4],
];

let a1 = new Set(arrays[0]);
let a2 = arrays[1];

let intersection = a2.filter((num) => a1.has(num));

console.log(intersection);

// 16)Find a Group of Elements by Frequancy (Write Your Own FullName).

function groupByFrequency(str) {
  str = str.replace(/\s/g, "");

  let count = {};

  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  let groups = {};

  for (let letter in count) {
    let freq = count[letter];
    if (!groups[freq]) {
      groups[freq] = [];
    }
    groups[freq].push(letter);
  }
  return groups;
}
console.log(groupByFrequency("shashwat naik"));

// 17)Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] ...

function Pairs(arr, target) {
  let nArr = new Set();
  let pair = [];

  for (let num of arr) {
    let reqAns = target - num;
    if (nArr.has(reqAns)) pair.push([reqAns, num]);
    nArr.add(num);
  }
  return pair;
}

console.log(Pairs([-1, 2, 3, 3, 4, 7], 6));