// EX 1


const arrayOfDoubles = []
function doubleValues(arr) {
  arr.forEach((item) => arrayOfDoubles.push(item * 2))
  return arrayOfDoubles
}

console.log(doubleValues([1, 2, 3]));

// Ex 2

function onlyEvenValues(arr) {
  const arrayOfEven = []
  arr.forEach((item) => { if (item % 2 == 0) { arrayOfEven.push(item) } })
  return arrayOfEven
}
console.log(onlyEvenValues([5, 1, 2, 3, 10]));