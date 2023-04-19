
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


let OneJobData = JSON.parse(localStorage.getItem("OneJob"));
displayCards(OneJobData);
let favData = JSON.parse(localStorage.getItem("fav-jobs")) || [];
// Login Slider Button
function loginslide() {

  let cred = JSON.parse(localStorage.getItem("sign-creds"));
  document.querySelector("#avatarname").innerText = cred.username;
  document.querySelector("#avataremail").innerText = cred.email;
  document.querySelector("#avatargender").innerText = cred.gender;
  let df = cred.username.trim().split(" ");
  console.log(df);
  document.querySelector("#loginbut").innerText = "👤" + df[0];

  if (cred.gender == "female") {
    document.querySelector("#avatar").src = "CSS/Images/avatar1.jpg";
  } else {
    document.querySelector("#avatar").src = "CSS/Images/avatar.png";
  }
}
loginslide();
// Login Slider End



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

    let apply = document.createElement("button");
    apply.setAttribute("id", "favButton");
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

    let addtofav = document.createElement("button");
    addtofav.setAttribute("id", "viewButton");
    addtofav.innerText = "Save Job 🔖";
    addtofav.addEventListener("click", function () {
      for (let i = 0; i < favData.length; i++) {
        if (favData[i].id == element.id) {
          swal("Already in Favorites", "Job is already added in your favorites", "info");
          return
        }
      }

      addtofav.innerText = "Added to Favorites";
      addtofav.style.backgroundColor = "grey";
      addtofav.style.color = "white";
      favData.push(element);
      localStorage.setItem("fav-jobs", JSON.stringify(favData));

    });

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
      apply,
      addtofav
    );
    div2.append(image);
    divout.append(div1, div2);
    document.querySelector(".JobScontainer").append(divout);
  });
}


function redirectToOtp() {
  setTimeout(function () {
    document.location.href = "otp.html";
  }, 2000);
}
