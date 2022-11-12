const primaryNav = document.querySelector(".primary-navigation");
document
  .querySelector(" .mobile-nav-toggle>span")
  .addEventListener("click", LoginSlider);
document.querySelector("#loginbut").addEventListener("click", LoginSlider);
document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
});
// ---------------------------------------------/preloader---------------------------------------------/
var loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//-------------------------------------------------/ popup-------------------------------------------------/
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".problem").style.display = "none";
});

document.querySelector("#leftapply").addEventListener("click", function () {
  document.querySelector(".problem>img").src = "CSS/Images/x.png";
  document.querySelector(".problem>h1").innerText = "No Account Found";
  document.querySelector(".problem>h2").innerText =
    "Please Signup before Proceed";
  document.querySelector("#jobspage").style.display = "none";
  document.querySelector("#close").style.display = "static";
  document.querySelector(".problem").style.display = "block";
});

// -----------------------------------------/login LoginSlider function-----------------------------------------/
function LoginSlider() {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    document.querySelector(" .mobile-nav-toggle>span").innerText = "✖️";
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    document.querySelector(" .mobile-nav-toggle>span").innerText = "💠";
  }
}

let form1 = document.querySelector("form1");
document.querySelector("#loginindex").addEventListener("click", logincheck);
let logincreds = JSON.parse(localStorage.getItem("sign-creds"));
document.querySelector("#jobspage").style.display = "none";
function logincheck() {
  let k = document.querySelector("#username").value;
  let l = document.querySelector("#Password").value;
  console.log(k, l);
  console.log(logincreds.username, logincreds.password);

  if (k == logincreds.username && l == logincreds.password) {
    document.querySelector(".problem>img").src = "CSS/Images/tick.png";
    document.querySelector(".problem>h1").innerText = "Login Successful!";
    document.querySelector(".problem>h2").innerText = "Welcome back ";
    let jobshref = document.querySelector("#jobspage");
    jobshref.style.display = "block";
    jobshref.addEventListener("click", function () {
      document.querySelector(".problem").style.display = "none";
      jobspage();
    });
    document.querySelector("#close").style.display = "none";
    document.querySelector("#signupxs").style.display = "none";
    document.querySelector(".problem").style.display = "block";
  } else if (logincreds.username == "" || logincreds.password == "") {
    document.querySelector(".problem>img").src = "CSS/Images/x.png";
    document.querySelector(".problem>h1").innerText = "No Account Found";
    document.querySelector(".problem>h2").innerText =
      "Please Signup to Proceed";
    document.querySelector("#jobspage").style.display = "none";
    document.querySelector("#close").style.display = "static";
    document.querySelector(".problem").style.display = "block";
  } else {
    document.querySelector(".problem>img").src = "CSS/Images/x.png";
    document.querySelector(".problem>h1").innerText = "No Account Found";
    document.querySelector(".problem>h2").innerText =
      "Please Signup to Proceed";
    document.querySelector("#jobspage").style.display = "none";
    document.querySelector("#close").style.display = "static";
    document.querySelector(".problem").style.display = "block";
  }
}
function jobspage() {
  setTimeout(function () {
    document.location.href = "login.html";
  }, 2000);
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
    .setAttribute("class", "compslidtranslatePRE");
});
nxtbtn3.addEventListener("click", () => {
  document
    .querySelector("#Slider3")
    .setAttribute("class", "compslidtranslateNXT");
});
