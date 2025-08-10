let arr = ['b', 'A', 'D', 'c', 'e'];

arr.sort((a, b) => {
  let lowerA = a.toLowerCase();
  let lowerB = b.toLowerCase();

  if (lowerA === lowerB) {
    return 0;
  }

  return lowerA < lowerB ? -1 : 1;
});

console.log(arr);
