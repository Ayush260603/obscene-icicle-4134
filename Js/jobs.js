const primaryNav = document.querySelector(".primary-navigation");
document.querySelector(" .mobile-nav-toggle>span").addEventListener("click",LoginSlider);
document.querySelector("#loginbut").addEventListener("click",LoginSlider);
document.querySelector("#registerbut").addEventListener("click",function(){
    window.location.href="signup.html"
});
var loader = document.querySelector("#preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})
function LoginSlider(){
     const visibility = primaryNav.getAttribute("data-visible");
     if(visibility=== "false"){
        primaryNav.setAttribute("data-visible",true);
        document.querySelector(" .mobile-nav-toggle>span").innerText="✖️"
     }else if(visibility=== "true"){
        primaryNav.setAttribute("data-visible",false)
        document.querySelector(" .mobile-nav-toggle>span").innerText="💠"
     }
}

let JobData = []
getData()
async function getData(){
    let url="https://636a3dd2c07d8f936d97766d.mockapi.io/placeme/JobData"
    try{
        let res = await fetch(url);
        let out = await res.json()
        JobData=out;
        displayCards(out)
    }
    catch(err){

    }
}
function displayCards(array){
    document.querySelector(".JobScontainer").innerText=""


    let count=1;
    array.forEach(function(element,index) {

        let divout= document.createElement("div");
        divout.setAttribute("class","JobCard");

        let div1 = document.createElement("div");
        div1.setAttribute("class","JobcardFirstDiv");
        let div2 = document.createElement("div");
// divs creation end 

        let name = document.createElement("h1");
        name.setAttribute("id","Jobname")
        name.innerText= "("+count+")"+ element.name;
        count++

        let date = document.createElement("h5");
        date.setAttribute("id","JobDate")
        date.innerText= "Date :"+element.date;

        let type = document.createElement("p");
        type.setAttribute("id","Jobcategory")
        type.innerText= "Job Type :"+ element.jobtype;

        let phrase = document.createElement("p");
        phrase.setAttribute("id","JobLine")
        phrase.innerText= "Tagline :"+element.phrase;

        let rating = document.createElement("h4");
        rating.setAttribute("id","JobRating")
        let y = (element.rating/10)
        rating.innerText="Rating:-" + y +"⭐⭐⭐⭐⭐";

        let salary = document.createElement("h5");
        salary.setAttribute("id","Salary")
        salary.innerText="Salary :"+element.salary;

        let button = document.createElement("button");
        button.setAttribute("id","favButton")
        button.innerText= "Add to Favorites";

        let image = document.createElement("img");
        image.src=element.image
        image.setAttribute("class","cardimage")
        image.innerText= element.image;
// the things that will go inside divs are created

        div1.append(name,date,type,phrase,rating,salary,button)
        div2.append(image)
        divout.append(div1,div2)
        document.querySelector(".JobScontainer").append(divout)
    });

}