const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input error message
function showError(input, message) {
  const formControl = input.parentNode;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentNode;
  formControl.className = "form-control success";
}

// Check Email is Valid or not

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// This is also valid function for email to Validate Email

// function isValidEmail(email) {
//   const re =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   return re.test(String(email).toLowerCase());
// }

// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is Required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is Required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Email Not Valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is Required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, " Confirm Password");
  } else {
    showSuccess(password2);
  }
});
