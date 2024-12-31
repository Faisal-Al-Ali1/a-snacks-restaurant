const array = [];
array[0] = prompt("Enter your name: ");
gender();
array[2] = prompt("Type your order shawarma / zinger / burger :");
alert("Your order is being prepared");
console.log(`Name: ${array[0]} order: ${array[2]}`);
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
function gender() {
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
}

function list() {
  let para = document.createElement("p");
  para.textContent = "This is the user input:";

  let ol = document.createElement("ol");

  let container = document.getElementById("container");

  container.appendChild(para);

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent = array[i];
    ol.appendChild(li);
  }

  container.appendChild(ol);
}
list();
