// Q1

let name = prompt("Enter your name ");
let gender = prompt("Enter your gender ");
if (gender == "male" || gender == "Male") {
  alert(`Welcome Mr: ${name}`);
} else if (gender == "female" || gender == "Female") {
  alert(`Welcome Ms: ${name}`);
} else {
  alert(`Welcome ${name}`);
}
let order = prompt("Type your order shawarma / zinger / burger :");
alert("Your order is being prepared");
console.log(`Name: ${name} order: ${order}`);

// Q2

let number= Math.floor(Math.random() * 10) + 1;
if(number == 1){
   console.log('ONE');
}
 else if(number == 2){
    console.log('TWO');
}
else if(number == 3){
    console.log('THREE');
}
else if(number == 4){
    console.log('FOUR');
}
else if(number == 5){
    console.log('FIVE');
}
else if(number == 6){
    console.log('SIX');
}
else if(number == 7){
    console.log('SEVEN');
}
else if(number == 8){
    console.log('EIGHT');
}
else if(number == 9){
    console.log('NINE');
} else{
    console.log('PLEASE TRY AGAIN!');
}