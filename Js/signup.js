document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
});


let sform = document.querySelector("#form1");
sform.addEventListener("submit", SigninFunction);

let lform = document.querySelector("#form2");
lform.addEventListener("submit", LoginFuntion);

function SigninFunction(e) {
  e.preventDefault();
  let obj1 = {
    username: sform.signname.value.trim(),
    password: sform.signpassword.value.trim(),
    email: sform.email.value,
    gender: sform.gender.value,
    status: "Not Working",
  };
  localStorage.setItem("sign-creds", JSON.stringify(obj1));

  swal("Signup Successful", "", "success");

  document.querySelector("#logIN").style.display = "flex";
  document.querySelector("#signIN").style.display = "none";
}
function LoginFuntion(event) {
  event.preventDefault();
  let obj2 = {
    username: lform.loginname.value.trim(),
    password: lform.loginpassword.value.trim(),
  };
  let creds = JSON.parse(localStorage.getItem("sign-creds"));
  if (obj2.username == creds.username && obj2.password == creds.password) {

    swal("Login Successful", "Redirecting To Dashboard...", "success");

    setTimeout(function () {
      window.location.href = "login.html";
    }, 3000);
  } else {
    swal("Wrong Credentials", "Please check username and password", "error");
  }
}