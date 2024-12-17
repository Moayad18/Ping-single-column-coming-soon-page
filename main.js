let btn = document.querySelector("main input[type='submit']");

btn.onclick = function () {
  let email = document.querySelector("input[name='email']");
  if (!isValid(email)) {
    addError("Please provide a valid email address");
  }
};

function addError(message) {
  let input = document.querySelector("input[name='email']").parentNode;
  input.classList.add("error");
  let textError = document.querySelector("main small");
  textError.textContent = message;
}

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
