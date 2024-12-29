let name = prompt("Enter your name: ");
while (true) {
  let gender = prompt("Enter your gender ");
  if (gender == "male" || gender == "Male") {
    alert(`Welcome Mr: ${name}`);
    break;
  } else if (gender == "female" || gender == "Female") {
    alert(`Welcome Ms: ${name}`);
    break;
  }
}
let order = prompt("Type your order shawarma / zinger / burger :");
alert("Your order is being prepared");
console.log(`Name: ${name} order: ${order}`);

// Q1

let i = 0;
while (i <= 5) {
 alert(i);
 i++;
}

// Q2

let text = "";
for (i = 0; i <= 5; i++) {
  text += " " + i;
}
alert(text);

// Q3

let text2 = "";
for (i = 0; i < 20; i++) {
  if (i % 3 == 0) {
    text2 += " " + i;
  }
}
alert(text2);

// Q4

let num2;
let condition = true;
while (condition) {
  num2 = parseInt(prompt("Enter A number Between 1 - 100"));
  if (num2 <= 0 || num2 >= 100) {
    alert("Error please try again ");
  } else {
    condition = false;
  }
}

// Q5

let num3;
let sum = 0;
let text3 = "";
num3 = parseInt(prompt("Enter an integer"));
for (i = 0; i <= num3; i++) {
  sum += i;
  text3 += i + "  +  ";
}
alert(` The sum of  ${text3} =  ${sum} `);
