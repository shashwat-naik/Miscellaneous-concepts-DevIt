// Q Find the missing element from the array.

// Mathematical approach
function findmissing(arr) {
  let n = arr.length;
  let sumArr = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }
  return sumArr - sum;
}

let arr = [1, 4, 3, 2, 6, 5, 7, 10, 9];
console.log("Missing element from the array: " + findmissing(arr));
