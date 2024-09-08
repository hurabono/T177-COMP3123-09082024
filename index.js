
// T177 HEESU CHO 101083889


// prompt package
const prompt = require('prompt-sync')();

//Exercise 1: 
// Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirstStr(inputStr){
    
    // strings separated by spaces.
    const words = inputStr.split(' ');

    // capitalized letter using for loop
    for( let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');

}

// test string
const testStr = "This is the test sentence";
const TestString = capitalizeFirstStr(testStr);

// input string
const exampleStr = prompt("input your words: ");
const capitalizeString = capitalizeFirstStr(exampleStr);

// node results
console.log(TestString);
console.log(capitalizeString);



//Exercise 2 : 
// Write a JavaScript program to find the largest of three given integers.

function largestInt (a, b, c) {

    // start to compare a first with b and c
    if (a >= b && a >= c ){
        return a;

    } 
    // start to compare b second with a and c
    else if ( b >=a && b >=c ){
        return b;
    }
    // if there is no a or b, C must be the largest int
    else {
        return c;
    }
}

// test
console.log("The largest number is: ", largestInt(5,75,52));

// input
// ** I forgot to convert integration lol ** 
const num1 = parseInt(prompt("Input your number 1: "), 10);
const num2 = parseInt(prompt("Input your number 2: "), 10);
const num3 = parseInt(prompt("Input your number 3: "), 10);

console.log("The largest number is: ", largestInt(num1,num2,num3));




//Exercise 3 : 
// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three.

function moveLastThreetoFirst(str){
    
    
    const lastThree = str.slice(-3);

    const remainedChar = str.slice(0, -3);

    return lastThree + remainedChar;

}


//test
const inputString = "python";
const result = moveLastThreetoFirst(inputString);
console.log(result);

// input
const inputStr = prompt("input your words to move : ");
const inputResult = moveLastThreetoFirst(inputStr);
console.log(inputResult);



//Exercise 4 : 
// Write a JavaScript program to find the types of a given angle.

function findAngle (angle){
    if(angle < 0 || angle > 180){
        return console.log("invalid angle");
    }

    if(angle < 90){
        return 'Acute angle';
    } else if (angle === 90){
        return 'right angle';
    } else if ( angle > 90 && angle < 180 ){
        return 'obtuse angle'
    } else{
        return 'straight angle'
    }
}

//test
const angleInt = 54;
console.log(findAngle(angleInt));

//input
const inputInt = parseInt(prompt("input the angle : "), 10);
const angleResult = findAngle(inputInt);
console.log(angleResult);
