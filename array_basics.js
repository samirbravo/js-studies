// initializing arrays
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const salad2 = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

// get elements from an array
const element = salad[0] // 🍅
salad[0] // 🍅
salad[2] // 🥦
salad[4] // 🌽

// using array length to access elements backwards
const len = salad.length; // 7
salad[len - 1] // 🥑
salad[len - 4] // 🥒

// iterating through an array
for(let i=0; i<salad.length; i++){
//    console.log(`Element at index ${i} is ${salad[i]}`)
} 
salad.forEach((element, index) => {
//    console.log(`Element at index ${index} is ${element} `)
});

// adding elements to an array
salad.push('🥜') // add element to the end of the array -> ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"]
salad2.unshift('🥜') // add element to the beginning of the array -> ["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

// removing elements from an array
salad.pop() // returns the last element of the array and remove it from the array -> 🥜
salad // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

salad2.shift() // returns the first element of the array and remove it from the array -> 🥜
salad2 // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

// copying and cloning arrays
const saladCopy = salad.slice() // doesn't change original array
saladCopy // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

// determining if a value is an array
Array.isArray(salad) // true
Array.isArray(salad[1]) // false
Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']) // true
Array.isArray('🍅') // false
Array.isArray({ 'tomato': '🍅' }) // false
Array.isArray([]) // true

// creating a new array using any number of elements of any type
Array.of(2, false, 'test', {'name': 'Alex'}) // [ 2, false, 'test', { name: 'Alex' } ]
