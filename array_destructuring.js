// extracting values from an array using the destructuring syntax
let [element1, element2, element3] = ['🍅', '🍄', '🥕']
//console.log(element1, element2, element3) // 🍅 🍄 🥕

// assign a default value to a variable
let [tomato, mushroom = '🍄'] = ['🍅']
//console.log(tomato, mushroom) // 🍅 🍄

// skip a value in an array
let [brocoli, , avocado] = ['🥦', '🌽', '🥑']
//console.log(brocoli, avocado) // 🥦 🥑

// nested array destructuring
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🌽']]
const veg = fruits[4] // ['🍅', '🍄', '🌽']
const corn = veg[2] // 🌽

const alt_corn = fruits[4][2] // 🌽

let [,,,,[,,another_corn]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🌽']]
// console.log(another_corn) // 🌽

// using rest parameter
const [veg1, veg2, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
// console.log(veg1); // 🍅
// console.log(veg2); // 🍄
// console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]

// cloning/copying an existing array using spread operator
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
const saladCloned = [...salad] 
saladCloned // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
salad === saladCloned // false

// swap values with destructuring syntax
let first = '😔'
let second = '🙂';
[first, second] = [second, first]
first // '🙂'
second // '😔'

// merging arrays using the destructuring syntax
const emotions = ['🙂', '😔']
const veggies = ['🥦', '🥒', '🌽', '🥕']
const emotionalVeggies = [...emotions, ...veggies]
emotionalVeggies // [ '🙂', '😔', '🥦', '🥒', '🌽', '🥕' ]
