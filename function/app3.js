const array = [];
array[0] = prompt("Enter your name: ");
while (true) {
  array[1] = prompt("Enter your gender ");
  if (array[1] == "male" || array[1] == "Male") {
    alert(`Welcome Mr: ${array[0]}`);
    break;
  } else if (array[1] == "female" || array[1] == "Female") {
    alert(`Welcome Ms: ${array[1]}`);
    break;
  }
}
array[2] = prompt("Type your order shawarma / zinger / burger :");
alert("Your order is being prepared");
console.log(`Name: ${array[0]} order: ${array[2]}`);
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}