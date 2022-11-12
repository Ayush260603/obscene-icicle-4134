const primaryNav = document.querySelector(".primary-navigation");
document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
});
var loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Login Slider Button
function loginslide() {
  const primaryNav = document.querySelector(".primary-navigation");
  var loader = document.querySelector("#preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
  document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".problem").style.display = "none";
  });

  document
    .querySelector(" .mobile-nav-toggle>span")
    .addEventListener("click", LoginSlider);
  document.querySelector("#loginbut").addEventListener("click", LoginSlider);

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
  let cred = JSON.parse(localStorage.getItem("sign-creds"));
  document.querySelector("#avatarname").innerText = cred.username;
  document.querySelector("#avataremail").innerText = cred.email;
  document.querySelector("#avatargender").innerText = cred.gender;
  let df = cred.username.trim().split(" ");
  console.log(df);
  document.querySelector("#loginbut").innerText = "👤" + df[0];
  if (cred.gender == "male") {
    document.querySelector("#avatar").src = "CSS/Images/avatar.png";
  } else {
    document.querySelector("#avatar").src = "CSS/Images/avatar1.jpg";
  }
  if (cred.gender == "male") {
    document.querySelector("#avatar").src = "CSS/Images/avatar.png";
  } else {
    document.querySelector("#avatar").src = "CSS/Images/avatar1.jpg";
  }
}
loginslide();
// Login Slider End

let OneJobData = JSON.parse(localStorage.getItem("OneJob"));
displayCards(OneJobData);

function displayCards(array) {
  document.querySelector(".JobScontainer").innerText = "";

  let count = 1;
  array.forEach(function (element, index) {
    let divout = document.createElement("div");
    divout.setAttribute("class", "JobCard");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "JobcardFirstDiv");
    let div2 = document.createElement("div");
    // divs creation end

    let name = document.createElement("h1");
    name.setAttribute("id", "Jobname");
    name.innerText = element.name;
    count++;

    let date = document.createElement("h3");
    date.setAttribute("id", "JobDate");
    date.innerText = "Date :" + element.date;

    let type = document.createElement("p");
    type.setAttribute("id", "Jobcategory");
    type.innerText = "Job Type :" + element.jobtype;

    let phrase = document.createElement("p");
    phrase.setAttribute("id", "JobLine");
    phrase.innerText = "Tagline :" + element.phrase;

    let rating = document.createElement("h3");
    rating.setAttribute("id", "JobRating");
    let y = element.rating / 10;
    rating.innerText = "Rating:-" + y + "⭐⭐⭐⭐⭐";

    let salary = document.createElement("h4");
    salary.setAttribute("id", "Salary");
    salary.innerText = "Salary :" + element.salary;

    let button = document.createElement("button");
    button.setAttribute("id", "favButton");
    button.innerText = "Apply Now";

    let view = document.createElement("button");
    view.setAttribute("id", "viewButton");
    view.innerText = "Save Job 🔖";

    let desc = document.createElement("h4");
    desc.setAttribute("id", "description");
    desc.innerText = "Context :" + element.description;

    let city = document.createElement("h4");
    city.innerText = " City :" + element.city;

    let department = document.createElement("h4");
    department.innerText = " Department  :" + element.department;

    let jobtype = document.createElement("h4");
    jobtype.innerText = " Job Type :" + element.title;
    // city,country,category,department,jobtype
    let country = document.createElement("h4");
    country.innerText = " Country :" + element.national;

    let category = document.createElement("h4");
    category.innerText = " Category =>  :" + element.category;

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
      type,
      phrase,
      hr,
      rating,
      salary,
      hr,
      city,
      country,
      category,
      department,
      jobtype,
      desc,
      button,
      view
    );
    div2.append(image);
    divout.append(div1, div2);
    document.querySelector(".JobScontainer").append(divout);
  });
}
