const userForm = document.getElementById("userForm");
const output = document.getElementById("output");

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const age = parseInt(document.getElementById("age").value);

  const gender = document.querySelector('input[name="gender"]:checked').value;

  const order = document.querySelector('input[name="order"]:checked').value;

  const preferences = Array.from(
    document.querySelectorAll('input[name="preference"]:checked')
  ).map((checkbox) => checkbox.value);

  output.textContent = `Username: ${username}, 
Age: ${age}, 
Gender: ${gender}, 
Order: ${order}, 
Preferences: ${preferences.join(", ")}`;
});
