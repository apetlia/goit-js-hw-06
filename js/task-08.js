const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormsubmit);

function onFormsubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Fill all cell");
    return;
  }

  const credentials = {
    email: email.value,
    password: password.value,
  };

  console.log(credentials);
  formRef.reset();
}
