document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "favorites.html";
});
let cred = JSON.parse(localStorage.getItem("sign-creds"));
if (!cred) {
  // "warning","success","error","info"
  swal("Please Login First", "", "info");
  setTimeout(() => {
    window.location.href = "index.html"
  }, 1000);
}

// Login Slider Button
function loginslide() {

  document
    .querySelector(" .mobile-nav-toggle>span")
    .addEventListener("click", LoginSlider);
  document.querySelector("#loginbut").addEventListener("click", LoginSlider);


  if (cred) {
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


}
loginslide();
// Login Slider End

let JobData = [];
let favData = JSON.parse(localStorage.getItem("fav-jobs")) || [];
getData();
async function getData() {
  let url = "https://636a3dd2c07d8f936d97766d.mockapi.io/placeme/JobData";
  try {
    let res = await fetch(url);
    let out = await res.json();
    JobData = out;
    displayCards(out);
  } catch (err) {
    console.log(err);
  }
}
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
    name.innerText = "(" + count + ")" + element.name;
    count++;

    let date = document.createElement("h5");
    date.setAttribute("id", "JobDate");
    date.innerText = "Date :" + element.date;

    let type = document.createElement("p");
    type.setAttribute("id", "Jobcategory");
    type.innerText = "Job Type :" + element.jobtype;

    let phrase = document.createElement("p");
    phrase.setAttribute("id", "JobLine");
    phrase.innerText = "Tagline :" + element.phrase;

    let rating = document.createElement("h4");
    rating.setAttribute("id", "JobRating");
    let y = element.rating / 10;
    let starq = "";
    if ((y >= 1 && y < 2) || y < 1) {
      starq = "⭐";
    }
    if (y >= 2 && y < 3) {
      starq = "⭐";
    }
    if (y >= 3 && y < 4) {
      starq = "⭐⭐";
    }
    if (y >= 4 && y < 5) {
      starq = "⭐⭐";
    }
    if (y >= 5 && y < 6) {
      starq = "⭐⭐⭐";
    }
    if (y >= 6 && y < 7) {
      starq = "⭐⭐⭐";
    }
    if (y >= 7 && y < 8) {
      starq = "⭐⭐⭐⭐";
    }
    if (y >= 8 && y < 9) {
      starq = "⭐⭐⭐⭐";
    }
    if (y >= 9 && y <= 10) {
      starq = "⭐⭐⭐⭐⭐";
    }
    rating.innerText = "Rating:-" + y + starq;

    let salary = document.createElement("h5");
    salary.setAttribute("id", "Salary");
    salary.innerText = "Salary :" + element.salary;

    let apply = document.createElement("button");
    apply.setAttribute("class", "fgradbutton");
    apply.innerText = "Apply Now";
    apply.addEventListener("click", function () {
      localStorage.setItem("AppliedJob", JSON.stringify(element));
      swal({
        title: "Apply For this Job?",
        text: "You will be redirected to apply job page",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            redirectToOtp()
          } else {
            null
          }
        });

    });

    let button = document.createElement("button");
    button.setAttribute("id", "favButton");
    button.innerText = "Add to Favorites";
    button.addEventListener("click", function () {

      for (let i = 0; i < favData.length; i++) {
        if (favData[i].id == element.id) {
          swal("Already in Favorites", "Job is already added in your favorites", "info");
          return
        }
      }
      button.style.backgroundColor = "maroon";
      button.innerText = "Added to Favorites";
      favData.push(element);
      localStorage.setItem("fav-jobs", JSON.stringify(favData));

    });

    let view = document.createElement("button");
    view.setAttribute("id", "viewButton");
    view.innerText = "View Job Details";
    view.addEventListener("click", function () {
      let arr = [];
      arr.push(element);
      localStorage.setItem("OneJob", JSON.stringify(arr));
      document.location.href = "view.html";
    });

    // image
    let image = document.createElement("img");
    image.src = element.image;
    image.setAttribute("class", "cardimage");
    image.innerText = element.image;
    // the things that will go inside divs are created

    div1.append(name, date, type, phrase, rating, salary, apply, view, button);
    div2.append(image);
    divout.append(div1, div2);
    document.querySelector(".JobScontainer").append(divout);
  });
}


// Rating Slider Function
var slider = document.getElementById("myRange");
var output = document.getElementById("displayslider");
let star = document.getElementById("stars");
output.innerHTML = slider.value;

slider.addEventListener("input", function () {
  output.innerHTML = this.value;
  let ratingData = JobData.filter(function (element) {
    return element.rating / 10 >= output.innerHTML;
  });
  ratingData.sort((a, b) => a.rating - b.rating);
  document.querySelector(".JobScontainer").innerHTML = "";
  displayCards(ratingData);
  if (output.innerHTML > 1 && output.innerHTML < 2) {
    star.innerHTML = "⭐";
  }
  if (output.innerHTML > 3 && output.innerHTML < 4) {
    star.innerHTML = "⭐⭐";
  }
  if (output.innerHTML > 5 && output.innerHTML < 6) {
    star.innerHTML = "⭐⭐⭐";
  }
  if (output.innerHTML > 7 && output.innerHTML < 8) {
    star.innerHTML = "⭐⭐⭐⭐";
  }
  if (output.innerHTML > 9 && output.innerHTML < 10) {
    star.innerHTML = "⭐⭐⭐⭐⭐";
  }
});

// Higher to lower salary functionality
let htl = document.querySelector("#HTL");
let lth = document.querySelector("#LTH");
lth.style.background = "#e9f0e7";
htl.style.background = "#e9f0e7";
htl.addEventListener("click", SortHTL);
lth.addEventListener("click", SortLTH);
function SortHTL() {
  lth.style.background = "#e9f0e7";
  htl.style.background = "var(--themcolor)";

  let HTLData = JobData.sort((a, b) => b.salary - a.salary);
  document.querySelector(".JobScontainer").innerHTML = "";
  displayCards(HTLData);
}
function SortLTH() {
  htl.style.background = "#e9f0e7";
  lth.style.background = "var(--themcolor)";
  let LTHData = JobData.sort((a, b) => a.salary - b.salary);
  document.querySelector(".JobScontainer").innerHTML = "";
  displayCards(LTHData);
}

//  Jobtype Filter Function

let selected = document.querySelector("#filter");
selected.addEventListener("change", FilterFunc);

function FilterFunc() {
  document.querySelector(".JobScontainer").innerHTML = "";
  if (selected.value == "") {
    displayCards(JobData);
  } else {
    let JobTypeData = JobData.filter((element) => {
      return element.jobtype.toLowerCase() == selected.value.toLowerCase();
    });

    displayCards(JobTypeData);
  }
}
// Search filter function

let search = document.querySelector(".searchinput");
search.addEventListener("input", SearchFunction);

function SearchFunction() {
  document.querySelector(".JobScontainer").innerHTML = "";
  let searchData = JobData.filter((element) => {
    return element.name.toLowerCase().includes(search.value.toLowerCase());
  });
  if (searchData == "") {
    document.querySelector(".JobScontainer").innerHTML = `<center>
    <h1>No Jobs Found</h1> </center>`;
  } else {
    displayCards(searchData);
  }
}
function redirectToOtp() {
  setTimeout(function () {
    document.location.href = "otp.html";
  }, 2000);
}
