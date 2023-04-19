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

for (let i = 2; i< favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}
favHolidayDestinations.push("Thailand, Cambodia", "Maldives, India")
console.log(favHolidayDestinations)

// Activity 2
let evenNumbers = []
for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}

let evenNumbers = []
for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}


console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)
console.log(`The even numbers between 0 and 20 in reverse order are; ${evenNumbers.reverse()}`)

// Activity 3

let oddNumbers = []
for (let n = 0; n < 30; n++){
    if (n % 2 == 1) {
        (oddNumbers.push(n))
    }
}

console.log(`The odd numbers between 1 and 30 are ${oddNumbers}`)


let currentAge = [Math.floor(Math.random()*100)]
while (currentAge <18){
    console.log("You're a child!")
    currentAge = Math.floor(Math.random()*100)
  
}
while (currentAge >=18){
    console.log("You're an adult!")
    currentAge = Math.floor(Math.random()*100)
}



// Acitivity 4

// Activity 4
let numbers = []
while (numbers.length <6){
randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)
numbers.push(randomNumber)
}
console.log(numbers)

// Activity 5

let films = ["filmA", "filmB", "filmC", "filmD"]
for (filmNumber = 0; filmNumber < films.length; filmNumber ++){
    if(filmNumber == 2 && films[2] == "Ghostbusters"){
        console.log("Yay, it's Ghostbusters")
    }
    else if (filmNumber == 2 && films[2] != "Ghostbusters"){
        console.log("Boo! We want Ghostbusters!")
    }
}



// Activity 6

for (i = 0; i < 6; i++){
    randomNumber = Math.floor((Math.random()*29)+1)
    // console.log(randomNumber)

    if (randomNumber % 7 == 0){
    console.log(`${randomNumber} is divisible by 7`)
    }
    else{
    console.log(`${randomNumber} is not divisible by 7`)
    }
    }

    // Activity 7

let bobsFollowers = ["Name1", "Name2", "Name3", "Name4"]
let hannahsFollowers = ["Name3", "Name4", "Name5", "Name6"]

const findingMatch = ()=>{
for(let i = 0; i < bobsFollowers.length; i++){
    // console.log(bobsFollowers[i])
    for(let j = 0; j < hannahsFollowers.length; j++){
        // console.log(hannahsFollowers[j])
        if(bobsFollowers[i] == hannahsFollowers[j]){
            console.log(bobsFollowers[i], "Follows both Bob & Hannah")
        }
    }
}
}
findingMatch()





// IfElse
// Activity 1

let music = "classical"

if (music == "classical"){
    console.log("Oh, how relaxing")
}
else if (music == "disco"){
    console.log("Where are my dancing shoes?")
}
else{
    console.log("Turn it down")
}

// Activity 2/3

let age = 8
let country = "UK"

if (age >17 && country == "UK"){
    console.log("Yes I can serve you")
}
else {
    console.log("You aren't old enough")
}


// Activity 4
let day = "Wednesday"

if (day == "Saturday " || day == "Sunday"){
    console.log("Yay it's the weekend!")
}
else {
    console.log("Oh no, work again!")
}

// Activity 4

let pizzaTopping = "pineapple"

switch(pizzaTopping){
    case "vegetables":
        case "extra mozzarella":
            console.log("These are important ingredients for my pizza!")
            break
            case "pineapple":
                case "ham":
                    console.log (`Pineapple? Blasphemy! ${pizzaTopping} should not be on pizza!`)
                    break
                    default:
                        console.log ("Go on then, I'll have a slice...")
}

// Activity 5

let password = "password123"
let len = password.length
if (password.len <8){
console.log("The password is too short..")
}
else{
    console.log(password)
}

// Activity 6

let num = Math.floor(Math.random()*100)

if (num % 3 == 0){
    console.log("fizz")
}
if (num % 5 == 0){
    console.log("buzz")
}
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizz buzz")
}
else{
    console.log(num)
}

// Activity 7

time = Math.floor(Math.random()*25)
console.log(time, "this is the time")

if (time >=7 && time <=9){
    console.log("I'm commuting to work")
}
else if (time >10 && time <=17){
    console.log("I'm at work")
}
else if (time >18 && time <=19){
    console.log("I'm commuting home")
}
else{
    console.log("I'm at home")
}

// Activity 8

let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

const newText = text.split("")
console.log(newText)
// const newText1 = newText.reverse()
// console.log(newText1)
let vowel = ["a" || "e" || "i" || "o" || "u"]
const result = newText.indexOf(vowel)
console.log(result, "This is the position")

// Activity 9
let word = "Ganster"
let lowerWord = word.toLowerCase()
   let firstLetter = lowerWord[0]
   
   let lastLetter = lowerWord[lowerWord.length - 1]

   if(firstLetter == lastLetter){
    console.log(true)

   }
   else{
    console.log(false)
   }


//   Activity 10

const num1 = Math.floor(Math.random()*100)
const num2 = Math.floor(Math.random()*100)
let totalSum = (num1 + num2)
let multiplyNum = (num1 * num2)

if(totalSum % 2 == 0){
    console.log(totalSum)
}
else{
    console.log(multiplyNum)
}

// Activity 11

const num = Math.floor(Math.random() * 1000);
let numToString = num.toString();
let reversedNum = numToString.split("").reverse().join("");

if (num == reversedNum) {
  console.log(`${num} is a palindrome.`);
} else {
  console.log(`${num} is not a palindrome.`);
}


// Functions

// Activity 1/2

const sayHello = (myName, drink) => {
    console.log(`Hi there I am ${myName} how are you? Would you like a ${drink}?`)
}
sayHello("Sophie", "Cup of Tea")

// Object Orientated Programming
