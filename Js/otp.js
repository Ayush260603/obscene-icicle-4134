document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
});
let cred = JSON.parse(localStorage.getItem("sign-creds"));
if (!cred) {
  // "warning","success","error","info"
  swal("Please Login First", "Redirecting..", "info");
  setTimeout(() => {
    window.location.href = "index.html"
  }, 1000);
}


// Login Slider Button
function loginslide() {

  let cred = JSON.parse(localStorage.getItem("sign-creds"));
  document.querySelector("#avatarname").innerText = cred.username;
  document.querySelector("#avataremail").innerText = cred.email;
  document.querySelector("#avatargender").innerText = cred.gender;
  let df = cred.username.trim().split(" ");
  document.querySelector("#loginbut").innerText = "👤" + df[0];
  if (cred.gender == "female") {
    document.querySelector("#avatar").src = "CSS/Images/avatar1.jpg";
  } else {
    document.querySelector("#avatar").src = "CSS/Images/avatar.png";
  }
}
loginslide();
// Login Slider End

// displayCards
let arrx = [];
let Apply = JSON.parse(localStorage.getItem("AppliedJob"));
arrx.push(Apply);
displayCards(arrx);

function displayCards(array) {
  document.querySelector(".JobScontainer").innerText = "";

  array.forEach(function (element, index) {
    let divout = document.createElement("div");
    divout.setAttribute("class", "JobCard");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "JobcardFirstDiv");
    let div2 = document.createElement("div");
    // divs creation end

    let name = document.createElement("h1");
    name.setAttribute("id", "Jobname");
    name.innerText = "💠 " + element.name;

    let date = document.createElement("h3");
    date.setAttribute("id", "JobDate");
    date.innerHTML = "Date :" + element.date;

    let type = document.createElement("p");
    type.setAttribute("id", "Jobcategory");
    type.innerHTML = "<b>Job Type : :</b>" + element.jobtype;

    let phrase = document.createElement("p");
    phrase.setAttribute("id", "JobLine");
    phrase.innerHTML = "<b>Tagline :</b>" + element.phrase;

    let rating = document.createElement("h3");
    rating.setAttribute("id", "JobRating");
    let y = element.rating / 10;
    rating.innerHTML = "<b>Rating :</b>" + y + "⭐⭐⭐⭐⭐";

    let salary = document.createElement("h4");
    salary.setAttribute("id", "Salary");
    salary.innerHTML = "<b>Salary :</b>" + element.salary;

    let button = document.createElement("button");
    button.setAttribute("id", "viewButton");
    button.innerHTML = "View Details";

    let view = document.createElement("button");
    view.setAttribute("id", "favButton");
    view.innerHTML = "Change Job";
    view.addEventListener("click", () => {
      swal({
        title: "Cancel Job Booking?",
        text: "You will be redirected to All Jobs Page..",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            window.location.href = "jobs.html"
          } else {
            null
          }
        });
    });

    let desc = document.createElement("h4");
    desc.setAttribute("id", "description");
    desc.innerHTML = "<b>Context :</b>" + element.description;

    let city = document.createElement("h4");
    city.innerHTML = "<b>City :</b>" + element.city;

    let department = document.createElement("h4");
    department.innerHTML = " <b>Department :</b>" + element.department;

    let jobtype = document.createElement("h4");
    jobtype.innerHTML = " <b>Job Type :</b>" + element.name;
    // city,country,category,department,jobtype
    let country = document.createElement("h4");
    country.innerHTML = "<b>Country :</b>" + element.national;

    let category = document.createElement("h4");
    category.innerHTML = " <b>Category :</b>" + element.category;

    let hr = document.createElement("hr");

    // image

    let image = document.createElement("img");
    image.src = element.image;
    image.setAttribute("class", "cardimage");
    image.innerText = element.image;
    // the things that will go inside divs are created

    div1.append(
      name,
      date,
      hr,
      type,
      phrase,
      rating,
      salary,
      city,
      country,
      category,
      department,
      jobtype,
      desc,
      hr,
      button,
      view
    );
    div2.append(image);
    divout.append(div1, div2);
    document.querySelector(".JobScontainer").append(divout);
  });
}

// otp timer functioning
function OTP() {
  let count = 59;
  let x = setInterval(function () {
    count--;
    document.querySelector("#time-counter").innerText = count;
    if (count <= 0) {
      clearInterval(x);
      startOTPagain();
    }
  }, 1000);
}
OTP();
function startOTPagain() {
  OTP();
}
// otp functioning

let form1 = document.querySelector("form");
form1.addEventListener("submit", otpcheck);

function otpcheck(event) {
  event.preventDefault();
  let k = form1.OtpInput.value;
  if (k == 1234) {
    swal("Applying For Job Successful", "You will recieve notifications in future regarding this job", "success");
    jobspage()
  } else {
    swal("Wron OTP", "Please Enter Correct OTP", "error");
  }
}
function jobspage() {
  setTimeout(function () {
    document.location.href = "login.html";
  }, 2000);
}
// otpfunction end
