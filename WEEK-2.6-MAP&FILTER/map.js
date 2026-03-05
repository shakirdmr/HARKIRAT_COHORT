const squares = [1,2,3];

const x = squares.map((value) => {
  return value * value;
});

console.log(squares); // [1,2,3] (original untouched)
console.log(x);       // [1,4,9] -->new ARRAY




// ✅ If you want to MODIFY the same array
// Then use forEach() instead

squares.forEach((value, index, arr) => {
  arr[index] = value * value;
});

console.log(squares); // [1,4,9]