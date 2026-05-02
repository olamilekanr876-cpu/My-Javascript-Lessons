//  const heading = document.getElementById('heading')
//          const colorBtn = document.getElementById('colorBtn')

//          colorBtn.addEventListener('click', ()=>{
//             heading.style.color = 'green'
//             heading.innerText = 'Dataslid Javascript Tutorial' 
//          })

         const nyName = "This is Ayo0la's laptop"
         console.log(nyName)

        //  alert('Hello Ridwan')
        

         console.log('My name is Ridwan')

         let fruits = 'orange';
         fruits = 'pawpaw'
         console.log(fruits)
         fruits = 'mango'

         console.log(fruits)


         const a = 5
         const b = 10
         const z = a+b
         console.log(z)
         console.log(a-b)
         console.log(a+b)
         console.log(a*b)
         console.log(a/b)
         console.log(b%3 + 6 - a)

         const meta = 0

         const Meta = 1

         const _meta = 3

         const name= 10

         const stringExample =  'MTH101'
         const myGender = '0.5'

         console.log(typeof(myGender))

         const bigIntExample = 2023232525585225252525622n
         console.log(typeof(bigIntExample))

         const check = 7 > 5
         console.log(check)

         const hasPVC =  false
         console.log(typeof(hasPVC))


         const myName = ''
          console.log(typeof(myName))


         let myAge;
         console.log(typeof(myAge))
         myAge = 10
           console.log(typeof(myAge))



           const Ridwan = {
             location: 'Ota-Efun',
             gender: 'male',
             age:  10,
             isSingle : false,

           }


           const car = {
             make: 'toyota',
             model : 'camry',
             year: 2016,
             color: 'blue',
             transmission: 'manual'
           }
         //We can acess elements of an object via dot notation or bracket notation

           console.log(Ridwan.location)
           console.log(Ridwan.gender)
           console.log(Ridwan['age'])



           const vegetables = ['ewedu','cucumber','carrot','tete']

           console.log(vegetables)

           console.log(vegetables[2])


           const vehicles = ['mazda','nissan', 'honda', 'bmw', 'volvo','lexus']

           console.log(vehicles[2])



// Assignment 
// create a new javascript file and attach it to html 
 // create a  variable and store your name inside it
 //print your name in the console. 
 //check the data type of your variable.

 // list the Javascript data types you know with examples

 // create an object of a dog with name, age, breed

 //log the breed to the console.


 // create an array of fruits. log the second item in the array to the console.





let $myName =  'Ayoola'


// == or ===

console.log(3=='2')

console.log(6+8)

console.log($myName + ' Ojo')

const _myNumber =  8
const favNumber = 3

const multiply = _myNumber * favNumber
console.log(multiply)

const division = _myNumber / favNumber
console.log(division)

const subtract = favNumber - _myNumber
console.log(subtract)

const modulus = _myNumber%favNumber
console.log(modulus)

const checkBigger = favNumber < _myNumber
console.log(checkBigger)

console.log(favNumber >= _myNumber)

const century = 10**2
console.log(century)

let num = 10
num--

console.log(num)

const firstname = 'AAyoola'
const lastName =  'Ojo'

const fullName = firstname + ' '+ lastName

console.log(fullName)


let hisName =  'Ridwan'

hisName += ' Raji'

console.log(hisName)

let coef =  10
coef -= 5
console.log(coef)

const price = 400
console.log( price != 300)


Assignment
6️⃣ Check Largest Number
let a = 10;
let b = 15;

// Print the larger number
🟠 Level 3: Using else if
7️⃣ Grading System
let score = 85;

// 90+ → "A"
// 70–89 → "B"
// 50–69 → "C"
// Below 50 → "Fail"
8️⃣ Temperature Check
let temp = 30;

// > 35 → "Too hot"
// 25–35 → "Warm"
// < 25 → "Cold"
9️⃣ Number Check
let num = 0;

// Positive → "Positive"
// Negative → "Negative"
// 0 → "Zero"
🔵 Level 4: Real-Life Style
🔟 Login System
let username = "admin";
let password = "1234";

// If username === "admin" AND password === "1234"
// → "Login successful"
// Else → "Invalid credentials"


const word1 = 'zebra'
const word2 = "banana"
const word3 =  'house'

console.log(word2 > word3)

const age =  17
const _hasPVC = !false


if(age >= 18 || _hasPVC) {
  console.log("You're eligible to vote")
} else {
  console.log('Sorry! youre not eligible to vote')
}

// STRINGS 

const randomWords =  `he's a boy. His name is "Jay"`
console.log(randomWords)

const bio =  `My name is ${fullName} , I'm ${age} years old`

console.log(bio)

const lorem = `lorem ipsum
                 hskjshsks jhsjss
                 shshshshhs sjsjsjsjsj
                 shshshshshs sjssjsjsjsj`

console.log(lorem)



// string Methods

console.log(lorem.length)

const anotherWord =  'Dataslid'
console.log(anotherWord.length)

//charAt()

const firstLetter =  anotherWord.charAt(3)
console.log(firstLetter)

//at()
const aka =  'EGBA'
console.log(aka.at(-1))

const food='rice,beans'
console.log(food.length)
console.log(food.indexOf(food))


// Assignment
// list at least 10 string Methods and use them.
//continue with the figma project
// watch youtube videos about javascript string methods - link will be sent 


assignment - use Switch.
const grade = "B";

👉 Output:

A → Excellent
B → Good
C → Average
D → Poor
F → Fail

*********************************************************************************************
*********************************************************************************************

1. Simple Function

Write a function that returns "Hello, World!"

2. Add Two Numbers

Create a function that takes two numbers and returns their sum.

👉 Example:

add(2, 3) // 5
3. Even or Odd

Write a function that checks if a number is even or odd.

👉 Example:

checkEvenOdd(4) // "Even"
4. Find Largest Number

Write a function that takes two numbers and returns the larger one.

5. Convert Minutes to Seconds

Write a function that converts minutes into seconds.

🟡 Beginner → Intermediate
6. Reverse a String

Write a function that reverses a string.

👉 Example:

reverseString("hello") // "olleh"
7. Count Vowels

Create a function that counts the number of vowels in a string.


new assignment
1. Change Text on Click

👉 When a button is clicked, change a heading text.

HTML idea:

<h1 id="title">Hello</h1>
<button id="btn">Click Me</button>

Task:

Change "Hello" → "You clicked the button"
2. Change Background Color

👉 Click a button to change page background

Task:

Button click → background becomes "lightblue"
3. Counter App (like what you're doing 👀)

👉 Increase number on button click

Task:

Display starts at 0
Click → increase by 1
4. Decrease Counter

👉 Add a decrease button

Task:

Prevent it from going below 0
5. Show Input Value

👉 User types something → click button → display it

HTML idea:

<input id="input" />
<button id="show">Show</button>
<p id="output"></p>


