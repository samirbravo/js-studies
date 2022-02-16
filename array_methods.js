// the concat() method
const first = [1, 2, 3]
const second = [4, 5, 6]
const merged = first.concat(second) // it doesn't change (mutate) existing arrays
merged // [1, 2, 3, 4, 5, 6]
// console.log(`first: ${first}`); // [1, 2, 3]
// console.log(`second: ${second}`); // [4, 5, 6]
const third = [7, 8, 9]
const merged2 = first.concat(second,third) // it can merge more than two arrays
merged2 // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// the join() method
const emotions = ['🙂', '😍', '🙄', '😟']
const joined = emotions.join() // it joins all the elements using a separator and returns a string
joined // 🙂,😍,🙄,😟 as string
const altJoined = emotions.join('*****'); // any separator could be passed 
// console.log(altJoined); // 🙂*****😍*****🙄*****😟
[].join() // returns ""

// the fill() method
const colors = ['red', 'blue', 'green']
colors.fill('pink') // fills the entire array with a static value and change the original array
colors // [ 'pink', 'pink', 'pink' ]
colors.fill('purple',1,colors.length) // chance specific elements 
colors // [ 'pink', 'purple', 'purple' ]

// the includes() method
const names = ['tom', 'alex', 'bob', 'john','tom']
names.includes('tom') // returns true
names.includes('july') // returns false

// the indexOf() and lastIndexOf() methods
names.indexOf('alex') // returns 1
names.indexOf('rob') // returns -1
names.indexOf('tom') // returns 0
names.lastIndexOf('tom') // returns 4

// the reverse() method
const foo = ['pencil', 'coin', 'pen']
foo.reverse() // [ 'pen', 'coin', 'pencil' ] -> it modifies the original array

// the sort() method
foo.sort() // [ 'coin', 'pen', 'pencil' ]

const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
numbers.sort() // [ 1, 10, 100, 13, 23, 37, 5, 56, 9] -> it converts the numbers to strings

function ascendindCoparator(a, b){
    return (a-b)
}

numbers.sort(ascendindCoparator) // returns [1, 5, 9, 10, 13, 23, 37, 56, 100]
numbers.sort((a, b) => (b - a)) // descending comparator but with arrow function

// the splice() method
const foo2 = ['tom', 'alex', 'bob']
foo2.splice(1,0,'zack') // add element in the position 
foo2 // ["tom", "zack", "alex", "bob"]

const foo3 = ['tom', 'alex', 'bob']
const deleted = foo3.splice(2, 1, 'zack')  // remove an element and replace with a new element
deleted // ['bob']
foo3 // [ 'tom', 'alex', 'zack' ]
