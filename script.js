// Part 1: JavaScript Basics

let name = "Dukrov Musk"; 
let age = 25; 
let isStudent = true;
let hobbies = ["reading", "coding", "hiking"];
let user = { name: "MrRobot", age: 25 };

// Log values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User Object: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators - Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}



// Functions - Greeting User
function greetUser() {
    let name = prompt("Enter your name");
    document.getElementById('greeting').innerHTML = "";
    document.getElementById('greeting').innerHTML += `Hello, ${name}! Welcome to the JavaScript assignment!`;
}



// Part 2: JavaScript Control Structures

// Check Voting Eligibility
function vote(){
    let userAge = parseInt(prompt("What is your age?"));
    if (userAge >= 18) {
        document.getElementById('vote-content').innerHTML="";
        document.getElementById('vote-content').innerHTML += `<p style="color:green">You are eligible to vote.</p>`;
    } else {
        document.getElementById('vote-content').innerHTML = "";
        document.getElementById('vote-content').innerHTML += `<p style="color:red">You are not eligible to vote.</p>`;
    }
}


// Loops - Display Numbers from 1 to 10
let numberList = "<ol>";
for (let i = 1; i <= 10; i++) {
    numberList += `<li>${i}</li>`;
}
numberList += "</ol>";
document.getElementById('numbers').innerHTML += numberList;

// Part 3: Introduction to the DOM
document.querySelector('h1').textContent = "JavaScript in Action!";

document.getElementById('dynamic-content').innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
