
document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
})
//-------------------------------------------------/ popup-------------------------------------------------/

document.querySelector("#leftapply").addEventListener("click", function () {
  swal({
    title: "Login Please!",
    text: "You need to login before applying for Jobs!",
    icon: "info",
    buttons: true,
    dangerMode: true,
  })
    .then((signAsk) => {
      if (signAsk) {
        swal("Redirecting To Signup Page", {
          icon: "info",
        });
        setTimeout(function () {
          document.location.href = "signup.html";
        }, 2000);
      }
    });

});


let logincreds = JSON.parse(localStorage.getItem("sign-creds")) || [];
let form1 = document.getElementById("LoginForm");
form1.addEventListener("submit", (e) => {
  e.preventDefault()
  logincheck()
})

// document.querySelector("#jobspage").style.display = "none";
function logincheck() {
  let k = document.querySelector("#username").value;
  let l = document.querySelector("#Password").value;
  console.log(k, l);//todo remove

  if (logincreds == []) {
    swal("No Account Found!", "Please Signup to Proceed!", "error");

  } else if (k == logincreds.username && l == logincreds.password) {
    swal("Login Successful!", "Redirecting To Dashboard...", "success");
    setTimeout(function () {
      document.location.href = "login.html";
    }, 2000);
  } else {
    swal("No Account Found!", "Please Signup to Proceed!", "error");
  }
}
// -----------------------------------------/ login slider function end-----------------------------------------/

// ----------------------------------------------------------Sliders --------------------------------------
// slider buttons--------:----
const nxtbtn = document.querySelector("#nxt-but");
const prebtn = document.querySelector("#pre-but");
const nxtbtn2 = document.querySelector("#nxt-but2");
const prebtn2 = document.querySelector("#pre-but2");
const nxtbtn3 = document.querySelector("#nxt-but3");
const prebtn3 = document.querySelector("#pre-but3");
// -------------------------------------------slider1 -------------------------------------------//
prebtn.addEventListener("click", () => {
  document
    .querySelector("#Slider")
    .setAttribute("class", "compslidtranslatePRE");
});
nxtbtn.addEventListener("click", () => {
  document
    .querySelector("#Slider")
    .setAttribute("class", "compslidtranslateNXT");
});
// -------------------------------------------slider2-------------------------------------------//
prebtn2.addEventListener("click", () => {
  document
    .querySelector("#Slider2")
    .setAttribute("class", "compslidtranslatePRE");
});
nxtbtn2.addEventListener("click", () => {
  document
    .querySelector("#Slider2")
    .setAttribute("class", "compslidtranslateNXT");
});
// -------------------------------------------slider 3-------------------------------------------//
prebtn3.addEventListener("click", () => {
  document
    .querySelector("#Slider3")
    .setAttribute("class", "compslidtranslatePRE2");
});
nxtbtn3.addEventListener("click", () => {
  document
    .querySelector("#Slider3")
    .setAttribute("class", "compslidtranslateNXT2");
})
