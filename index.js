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

// EX 3

function showFirstAndLast(arr) {
  const arrayOfTheTwo = []
  arrayOfTheTwo.push(arr[0])
  arrayOfTheTwo.push((arr[arr.length - 1]))
  return arrayOfTheTwo
}
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

// EX 4

// function arrayOfObjects(arr, add, value) {
//   const newArray = arr.map(obj => {
//     { obj, obj.add = value }
//   } return newArray)

// }

// console.log(arrayOfObjects([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

// Ex 5

function vowelCount(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let obj = {}
  let newString = string.toLowerCase()
  let countThem = vowels.length
  for (let i = 0; i < countThem; i++) {
    counter = 0
    for (let j = 0; j < newString.length; j++) {
      if (vowels[i] === (newString[j])) {
        counter++
      }
    }

    if (counter > 0) { obj[vowels[i]] = counter }
  }
  return obj
}

console.log(vowelCount("Elie"));