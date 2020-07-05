// Task 1 - Examples during the class

let userIsHappy = true;
let number = 0;
do {
     userIsHappy = confirm('Are you happy that the number is ' + ++number + '?');
} while (userIsHappy)

for (let number = 1, isUserHappy = true; isUserHappy; number++) {
     isUserHappy = confirm('Are you happy that the number is ' + number + '?');
}


// Task 2.1 - Guessing a number (do-while)

let randomNum = Math.round(Math.random() * 10);
let userNumber;

do {
    userNumber = prompt('Enter a number up to 10', '');
} while (+userNumber !== randomNum && userNumber !== null);

// Another way to do the same
// do {
    // userNumber = prompt('Enter a number up to 10', '');
    // if (userNumber === null) break;
// } while (+userNumber !== randomNum);


// Task 2.2 - Guessing a number (while)

let randomNum = Math.round(Math.random() * 10);
let userNumber;

while (+userNumber !== randomNum && userNumber !== null) {
    userNumber = prompt('Enter a number up to 10', '');
};


// Task 3.1: the easier one

let userNum = +prompt('Enter a number from 1 to ten', '');

for (let i = 1; i < 100; i++) {
    if (i % userNum) continue;
    console.log(i);
 }
 
//  Task 3.2: the harder one

let userNum = +prompt('Enter a number from 1 to ten', '');
let interNum = +prompt('How many numbers do you want to get?', '');

for (let i = 1; i <= (userNum * interNum); i++) {
    if (i % userNum) continue;
    console.log(i);
 }