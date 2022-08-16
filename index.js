// EX 1


const arrayOfDoubles = []
function doubleValues(arr) {
  arr.forEach((item) => arrayOfDoubles.push(item * 2))
  return arrayOfDoubles
}

console.log(doubleValues([1, 2, 3]));