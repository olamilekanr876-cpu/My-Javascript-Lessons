const myName = 'Raji Ridwan Olalekan'
console.log(myName)
console.log(typeof (myName))

const datatypes = ['boolean', 'numbers', 'string', 'bigints', 'object']

const boolean = [true, false]
console.log(boolean)

const numbers = [2, 20, 200]
console.log(numbers)

const string = 'strings refer to texts in Javascript'
console.log(string)

const bigints = [5895255555587955789, 359878564685n]
console.log(bigints)

const dog = {
    name: 'jaguar ',
    age: '5years',
    breed: 'german shepherd',
}
console.log(dog)


const fruits = ['mango', 'apple', 'orange',]

console.log(fruits[1])


//     ASSIGNMENT //

const food = 'rice,beans,yam'
console.log(food)

console.log(food.at(1))
console.log(food.charAt(4))
console.log(food.repeat(4))
console.log(food.toUpperCase(food))
console.log(food.toLowerCase(food))
console.log(food.startsWith('rice'))
console.log(food.indexOf('food'))
console.log(food.includes('hello'))
console.log(food.includes('beans'))
console.log(food.replace(',', '-',))
console.log(food.padEnd(20, '$'))
console.log(food.padStart(20, '*'))
console.log(food.isWellFormed(food))
console.log(food.split(food))






const market = 'igbona , owode, ota-efun'

const newMarket = market.substring(9, 14)


console.log(newMarket)


const locations = ['ogo-Oluwa', 'Aregbe', 'Igbona', 'Owode', 'Ota Efun', 'Ayekale']

console.log(locations)
console.log(locations.length)

console.log(locations.at(-1))


const newLocations = locations.toString()

console.log(newLocations)



const animals = 'lion, tiger, dog, hyena, wolf'
console.log(animals)
const splitAnimals = animals.split(',')
console.log(splitAnimals)

const convertedLocation = locations.join(',')

console.log(convertedLocation)

const laptops = ['hp', 'toshiba', 'lenovo', 'Dell', 'Samsung']
console.log(laptops)

laptops.pop()

console.log(laptops)

laptops.push('mcBook Pro')

console.log(laptops)

laptops.shift()
console.log(laptops)

laptops.unshift('Acer')
console.log(laptops)


const emptyArray = []
emptyArray.push('Dataslid')

console.log(emptyArray)

console.log(typeof (emptyArray))

const person = {
    firstName: 'Ayoola'
}


console.log(typeof (person))

console.log(Array.isArray(emptyArray))
console.log(Array.isArray(person))

const multipleArrays = laptops.concat(emptyArray, locations)
console.log(multipleArrays)

console.log(laptops)

// laptops.copyWithin(3,1)
// console.log(laptops)


const numero = [[0, 12, 5], [0.5, 9.7,], [1000, 577, 896]]

console.log(numero.at(1))

const flatArray = numero.flat()

console.log(flatArray)



console.log(laptops)
const slicedLaptops = laptops.slice(1, 3)

console.log(slicedLaptops)

console.log(laptops)

laptops.splice(1, 2)
console.log(laptops)

const alphabets = ['a', 'e', 'j', 'k', 'o', 'p']

alphabets.splice(1, 0)

console.log(alphabets)

alphabets.splice(1, 0, 'z', 'ogo Oluwa')
console.log(alphabets)

alphabets.splice(2, 1, 'Onward')
console.log(alphabets)

const $cars = ['mazda', 'toyota', 'benz', 'bmw']
console.log($cars)
$cars.splice(2, 2, 'peugeot', 'volkswagen')

console.log($cars)

const splicedCars = $cars.toSpliced(1, 2)

console.log(splicedCars)


// let age = prompt('enter your age');

const age = 16;

if (age <= 5) {
    console.log(`You're a toddler`)
} else if (age >= 13 && age < 18) {
    console.log("You're a teenager")
} else {
    console.log(`You're an adult`)
};


const num = 1
// if (num < 0) {
//     console.log('number is Negative')
// } else {
//      console.log('number is Positive')
// }

if (num.toString().includes('-')) {
    console.log('number is NEGATIVE')
} else {
    console.log('number is POSIIVE')
}



let password = "12345hdjkjhjklkjhjk";
if (password.length < 6) {
    console.log('password is weak')

} else {
    console.log('strong password')
}

const Age = 17.9
if (Age >= 18) {
    console.log(`you're eligible to vote`)
} else {
    console.log(`you're not eligible`)
}

const newNum = 41
// if (newNum % 2 === 0){
//     console.log('even number')
// }else{
//     console.log('odd number')
// }



// Ternary operator.
newNum % 2 === 0 ? console.log(`${newNum} is even number`) : console.log(`${newNum} is odd number`)

//assignment-solutions//
let a = 10
let b = 15
if (a > b) {
    console.log('10 is the smaller number')
} else {
    console.log('15 is the larger number')
}

let score = 85
if (score >= 90) {
    console.log('A')
} else if (score = 70 && score <= 89) {
    console.log('B');
} else if (score = 50 && score <= 69) {
    console.log('C')
} else if (score < 50) {
    console.log('fail')
}

let temp = 30;
if (temp > 35) {
    console.log('Too hot')
} else if (temp = 25 && temp <= 35) {
    console.log('warm')
} else if (temp < 25) {
    console.log('Cold')
}

let numb = 0
if (numb > 0) {
    console.log('Positive')
} else if (numb < 0) {
    console.log('Negative');
} else {
    console.log('Zero')
}

let username = 'admin'
let Password = '1234'

if (username === 'admin' && Password === '1234') {
    console.log(`Login successful`)
} else {
    console.log(`Invalid credentials`)
}



const color = 'green'

// if(color=='green'){
//     console.log('Hurray!')
// } else {
//     console.log('Try again!')
// }

color == 'green' ? console.log('Hurray') : console.log('Try again later')


// write if statement to excuse citizens below 18 and above 65 from paying taxes.

const newAge = 19;
const hasPvC = true


if (newAge < 18 || newAge > 65) {
    console.log(`You are exempted from paying tax - You're ${newAge} years old`)

} else {
    console.log(`Ensure to pay your tax - You're ${newAge} years old`)
}


newAge >= 18 && hasPvC ? console.log('eligible to vote') : console.log('not eligible to vote')


const day = new Date().getDay()
 console.log(day)


switch (day) {

    case 0:
        console.log('Day is Sunday')
        break;
    case 1:
        console.log('day is Monday');
        break;

    case 2:
        console.log('day is Tuesday');
        break;

    case 3:
        console.log('day is Wednesday');
        break;

    case 4:
        console.log('Day is Thursday');

        break;

    case 5:
        console.log('Day is Friday');
        break;

    case 6:
        console.log('day is Saturday');
        break;

    

    default : 

        console.log('day doesnt exist')

}


function add (x,y) {
    console.log(x + y)
}


add(100,50)
add(200,50)

//assignment-solutions//


const grade = 'B'

switch (grade) {
    case 'A':
        console.log('excellent')
        break;
    case 'B':
        console.log('Good')
        break;
    case 'C':
        console.log('Average')
        break;
    case 'D':
        console.log('Poor')
        break;
    case 'F':
        console.log('Fail')
        break;
}

const month = 3

  switch(month){
    case 12:
    case 1:
    case 2: 
        console.log('Winter')
        break;
    case 3 :
    case 4:
    case 5:
        console.log('Spring')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer')
        break;
    case  9:
    case 10:
    case 11:
        console.log('Autumn')
        break;
         default :
         console.log('Not Recognized')
    }

const role = 'Editor'
   switch(role){
    case 'Admin':
        console.log('Full access')
        break;
    case 'Editor':
        console.log('Edit content')
        break;
    case 'Viewer':
        console.log('View only')
        break;
    default:
        console.log('No access')
   }


   const seeds = ['amala', 'eba','rice', 'beans', 'spag']

   seeds.push('asaro')

   console.log()

   for( let i = 0 ; i < seeds.length; i++){
       console.log(seeds[i])
   }


   const nickName = 'Obafemi Martins'
   for(i = 0; i < nickName.length; i++) {
    console.log(nickName[i])
   }


   const manyNumbers = [2,4,200,54,87,85,41,42,23,]

   for(i = 0; i < manyNumbers.length; i++) {
    console.log(manyNumbers[i])
   }




let name = 'RIDWAN'   

function CapitalizeName (name) {
   console.log(name.at(0).toUpperCase() + name.slice(1).toLowerCase())
}



CapitalizeName('ayoola')
CapitalizeName('rEMI')
CapitalizeName('DATASLID')
CapitalizeName('aLoWoNlextxixyx9ixhgxiktyhauyatsy')


const continents = ['Africa', 'Asia','Europe', 'North America', 'South-America', 'Oceania', 'Australia']


// for ( let continent of continents ) {
//     console.log(continent)
// }

// continents.map((a)=>{
//     console.log(a)
// })

continents.forEach((c)=>{
    console.log(c)
})


for(i = 1; i <= 10; i++){
    console.log(i)
}


for (i = 1; i <= 1000; i++){
    if(i % 2 === 0) {
        console.log(i)
        
    } 
     
    
}

const nameS=['Ayo','John','Mary']

for( i = 0; i < nameS.length;i++){
    console.log(nameS[i])

}


// CapitalizeName(shsjslkshd)



function Print (string) {
    console.log(string)
}



Print('Hello World')


function Multiply(a,b){
    console.log(a*b)
}

Multiply(10,5) 

Multiply(-8,4) 


function squareNumber (num) {
   console.log(num * num)
}

squareNumber(50)


const Subtraction = (x,y) => {
    console.log(x-y)
}


Subtraction(10,50)


function Greetings (name) {
    console.log(`Hello! You're Welcome  ` + name)
   
}




Greetings('Ridwan')
Greetings('Ayoola')
Greetings('Dataslid')


//*********************************************************
            // assignment-solutions
//**********************************************************//
    function Welcome (text){
        console.log(`Hello world`)
    }

Welcome()

function add(x , y){
    console.log(x + y)
}

add(5,8)

function checkeven(x ){
    console.log(x % 2 === 0)
}

function checkodd(x){
    console.log(x % 2 === 1)
}

checkeven(100)

checkodd(13) 

function biggernum (x , y){
    if (x > y){
        console.log(x)
    }else{
        console.log(y)
    }


}

biggernum ( 30 ,80)






function minstosecs (num){
    console.log(num*60  + 'secs.')

}

minstosecs(4)

function reverseString(string){
    console.log(string.split('').reverse().join(''))
}

reverseString('welcome')

function countvowels(string){
    let i=0;
    const vowels='aeiouAEIOU';

    for(let char of string){
        if(vowels.includes(char)){
            i++
        }
    }
    console.log([i])

}





countvowels('yellow')



const myString =  "Baggi"

function reverseStr (string) {
    console.log(string.split('').reverse().join(''))
}



reverseStr(myString)
reverseStr('Tunde')



// write a function to capitalize the first letter of every given name 
const fName = 'ayoola Ojo joHNSON Tekoro'

function formatName (fullName) {
 return fullName.split(' ')
 .map((n)=>n[0].toUpperCase() +
  n.slice(1).toLowerCase())
  .join(' ')



}

console.log(formatName(fName))


// document.body.style.backgroundColor = 'yellow'


//  const heading = document.getElementById('heading')
//  heading.innerHTML = 'green'

 const myButton = document.getElementById('btn')

 let result = document.getElementById('result')
 const decreaseBtn =  document.getElementById('decreaseBtn')
 const addBtn =  document.getElementById('addBtn')
 const resetBtn =  document.getElementById('resetBtn')


  addBtn.addEventListener('click', ()=>{
     let currentValue = Number(result.textContent)
     currentValue = currentValue + 1;
     result.textContent = currentValue

     if(currentValue >= 0){
        result.style.color = 'black'
     }
  })


  decreaseBtn.addEventListener('click', ()=>{
     let value = Number(result.innerText);
     value --;
     result.innerText = value;

     if(value < 0) {
        result.style.color = 'red'
     } 
    
  })

  resetBtn.addEventListener('click', ()=>{
    result.innerText = '0'
  })

//  click
//  dblcick
//  mouseover etc




myButton.addEventListener('dblclick',()=> {
    heading.textContent = 'I changed my Color';
    headerr.style.color =  'red'
}) 

const otherbtn = document.getElementById('otherBtn')
const headerr = document.getElementById('headerr')
// headerr.innerText = 'This is Raji Ridwan Olalekan '
headerr.style.color = 'skyblue'
otherbtn.addEventListener('click',()=>{
    headerr.textContent= 'This is Raji Ridwan Olalekan'
    headerr.style.color ='red'
    
})

const backgroundColor = document.getElementById('btn2')

backgroundColor.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'lightblue'
})

let Result= document.getElementById('Result')
const anotherAddBtn = document.getElementById('anotherAddBtn')
const reset =document.getElementById('reset')

  anotherAddBtn.addEventListener('click', ()=>{
     let currentValue = Number(Result.textContent)
     currentValue = currentValue + 1;
     Result.textContent = currentValue

     if(currentValue >= 0){
        Result.style.color = 'black'
     }
  })
  reset.addEventListener('click',()=>{
    Result.innerText = '0'
  })

  const DecreaseBtn = document.getElementById('Decreasebtn')

  DecreaseBtn.addEventListener('click',()=>{
  currentValue = Number(Result.innerText);
   currentValue --;
    Result.innerText = currentValue
    
    if(currentValue < 0){
        Result.innerText= 0

    }
  })

   const input = document.getElementById("input");
    const button = document.getElementById("show");
    const output = document.getElementById("output");

    // Step 2: Add click event to button
    button.addEventListener("click", function () {
      
      // Step 3: Get value from input
      const value = input.value;

      // Step 4: Display it
      output.textContent = value;
    });


//   function showvalue(){
//     let input = document.getElementById('myinput').value;

//     document.getElementById('output').textContent = input;

//   }




  

















