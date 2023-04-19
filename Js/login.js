
document.querySelector("#registerbut").addEventListener("click", function () {
  window.location.href = "signup.html";
});


// Login Slider Button
function loginslide() {

  let cred = JSON.parse(localStorage.getItem("sign-creds"));
  let x = document.querySelectorAll("#avatarname");
  x[0].innerText = cred.username;
  x[1].innerText = cred.username;
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


document
  .querySelector("#loginpageapply")
  .addEventListener("click", ApplyjobFun);
document
  .querySelector("#loginpageapply2")
  .addEventListener("click", ApplyjobFun);
function ApplyjobFun() {
  let element = {
    date: "2090-04-03T02:25:51.127Z",
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/641.jpg",
    category: "Wiza - Weissnat",
    city: "South Valley",
    jobtype: "Designer",
    rating: 7,
    salary: 29896,
    department: "Toys",
    name: "Human Usability Planner",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    national: "Avon",
    phrase:
      "Try to compress the COM transmitter, maybe it will synthesize the virtual capacitor!",
    id: "8",
  };
  localStorage.setItem("AppliedJob", JSON.stringify(element));
  document.querySelector(".applyjob").style.display = "block";
}
let searchinput = document.getElementById("searchbox-inner")

searchinput.addEventListener("click", () => {
  window.location.href = "jobs.html"
})
