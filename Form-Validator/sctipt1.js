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

// Show success outline
function showSuccess(input) {
  const formControl = input.parentNode;
  formControl.className = "form-control success";
}
// Check Email is Valid or not

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not vaid");
  }
}

// Check Password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords Do Not Match");
  }
}

// Check Length of the inputs

function checkLength(input2, min, max) {
  if (input2.value.length < min) {
    showError(
      input2,
      `${getFieldName(input2)} must be at least ${min} character`
    );
  } else if (input2.value.length > max) {
    showError(
      input2,
      `${getFieldName(input2)} must be less than ${max} character`
    );
  } else {
    showSuccess(input2);
  }
}

// Check Inputs if it is Blank
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
      console.log(input.id);
    } else {
      showSuccess(input);
    }
  });
}

// Get Field name and Capitalize first letter
function getFieldName(input1) {
  return input1.id.charAt(0).toUpperCase() + input1.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
