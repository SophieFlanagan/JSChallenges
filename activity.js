// Variables
// Activity 1

let firstName = "John"
let age = 26
let universityStudent = true

console.log(firstName, age, universityStudent)

firstName = "sophie"
age = 35
universityStudent = false

console.log(firstName, age, universityStudent)

// Cannot change let to const & change the variable 'Assignment to const variable'



// Activity 2

let firstName1 = "Sophie"
let currentAge = 35
let favouriteColour = "green"
console.log(`My name is ${firstName1} and I am ${currentAge} years old. My favourite colour is ${favouriteColour}.`)

// Activity 3

let breakfast = "fruit with yoghurt"
let lunch = "cup of tea"
let dinner = "miso and honey glazed aubergines"
 console.log(`For breakfast today I had ${breakfast}. At lunch I wasn't feeling hungry so stuck with a ${lunch} and just enjoyed the break. For dinner this evening I'll prepare ${dinner}.`)

 breakfast = "cereal with cashew milk"
 lunch = "fruit bowl"
 dinner = "red thai chickpea curry"
 console.log(`For breakfast today I had ${breakfast}. At lunch I decided to stick with something light and so chose a ${lunch}. For dinner this evening I've had a tasty ${dinner}.`)

//  Activity 4

// Days between todays date and my next birthday 
let todaysDate = new Date()
let birthday = new Date ("2023-05-15")
let timeDifference = birthday.getTime() - todaysDate.getTime()
let daysDifference = Math.floor(timeDifference / (1000*60*60*24))

console.log(`The number of days between ${todaysDate} and my next ${birthday} are ${daysDifference}`)

// Days since my birthdate

let birthdate = new Date ("1987-05-15")
let timeDifference1 = todaysDate.getTime() - birthdate.getTime()  
let daysDifference1 = Math.floor(timeDifference1 / (1000*60*60*24))

console.log(`The number of days since my ${birthdate} and ${todaysDate} are ${daysDifference1}`)

// Arrays
// Activity 1

let favFilms = ["Pulp Fiction", "Rain Man", "Schindler's List"]
console.log(favFilms[2])

// Activity 2
console.log(favFilms[0])

// Acitvity 3
favFilms[1] = "whiplash"
console.log(favFilms)

// Activity 4
// .shift() removes & returns first element out of array 
// .slice() removes & returns defined portion of array (between two defined points, if only one point given, removes all before it)
// .splice() allows you to remove elements of an array, and return it in a new array eg .splice(2,2, "Goodfellas", "The Godfather") first 2 = at position 2: second 2 = remove 2 items, add Goodfellas & The Godfather
// .unshift() adds new elements to the beginning of an array and returns the new length of array
// .map() creates a new array by calling a function against each element in the orginal array (eg, for numbers you can .map(Math.sqrt) which will return a new array with the square root of each element, or you can add elements together to create coherency, see example below)

//  console.log(favFilms.shift(), "this is shift")


// console.log(favFilms.slice(2,3), "this is slice")

// let numberOneFilm = favFilms.splice(0,1)
// console.log(favFilms, "this is faves list")
// console.log(numberOneFilm, "this is best over all")

// console.log(favFilms.unshift("Goodfellas", "The Godfather"), "this is unshift")
// console.log(favFilms)





// persons [ 
// 3 objects 
// ]


// persons = array of objects 


// array can have many data type
//  { key : value } Object
// const array = ["hello", 3, {object}] - 3 elements, 1 of which is an object
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ]
  
  persons.map(getFullName)
  
  function getFullName(item) {
    let fullName = [item.firstname, item.lastname].join(" ")
    // return [item.firstname,item.lastname].join(" ")
    return console.log(fullName)
  }

  // OR

  persons.map( (item) => {
    return console.log([item.firstname, item.lastname].join(" "))
  }
  )






const arrNums = [1,2,3,4,5,6,7,8,9,10];

// .map() takes a call back function
arrNums.map(
(item) => {
  return console.log()
  })







 





 
//   Activity 5

favSongs = ["You're all I need by Method Man & Mary J", "The Message by Grandmaster Flash & The Furious 5", "Best Friend by Eminem", ]
console.log(favSongs)
console.log(favSongs.unshift("I don't wanna miss a thing by Aerosmith", "Baby Love by The Supremes"))
console.log(favSongs)
console.log(favSongs.pop())
console.log(favSongs)



// Loops
// Activity 1

let favHolidayDestinations = ["Venice, Italy", "Paris, France", "Barcelona, Spain"]
console.log(favHolidayDestinations)

for (let i = 0; i< favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}
