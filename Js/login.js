const primaryNav = document.querySelector(".primary-navigation");
document.querySelector("#registerbut").addEventListener("click",function(){
    window.location.href="signup.html"
});
var loader = document.querySelector("#preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})


// Login Slider Button
function loginslide(){
    const primaryNav = document.querySelector(".primary-navigation");
    var loader = document.querySelector("#preloader");
    window.addEventListener("load",function(){
        loader.style.display="none";
    })
    
    document.querySelector(" .mobile-nav-toggle>span").addEventListener("click",LoginSlider);
    document.querySelector("#loginbut").addEventListener("click",LoginSlider);
    
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
    let cred = JSON.parse(localStorage.getItem("sign-creds"))
    let x= document.querySelectorAll("#avatarname");
    x[0].innerText= cred.username;
    x[1].innerText= cred.username;
    document.querySelector("#avataremail").innerText= cred.email;
    document.querySelector("#avatargender").innerText= cred.gender;
    document.querySelector("#loginbut").innerText= "👤" +cred.username;
    if(cred.gender=="male"){
        document.querySelector("#avatar").src="CSS/Images/avatar.png"
    }else{
        document.querySelector("#avatar").src="CSS/Images/avatar1.jpg"
    }
    }
    loginslide()
// Login Slider End
document.querySelector("#yes").addEventListener("click",function(){
    document.querySelector(".problem").style.display="none";
    document.location.href="index.html"
})
document.querySelector("#no").addEventListener("click",function(){
    document.querySelector(".problem").style.display="none"
})
document.querySelector("#logoutbut").addEventListener("click",LogoutFunc)
function LogoutFunc(){
    document.querySelector(".problem").style.display="block"
}
// problem
document.querySelector("#close1").addEventListener("click",function(){
    document.querySelector(".applyjob").style.display="none"
})
document.querySelector("#Proceed").addEventListener("click",redirectToOtp)
function redirectToOtp(){
    setTimeout(function(){
        document.location.href="otp.html"
    },2000)
}
document.querySelector("#loginpageapply").addEventListener("click",ApplyjobFun)
document.querySelector("#loginpageapply2").addEventListener("click",ApplyjobFun)
function ApplyjobFun(){
    let element = {
        "date": "2090-04-03T02:25:51.127Z",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/641.jpg",
        "category": "Wiza - Weissnat",
        "city": "South Valley",
        "jobtype": "Designer",
        "rating": 7,
        "salary": 29896,
        "department": "Toys",
        "name": "Human Usability Planner",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "national": "Avon",
        "phrase": "Try to compress the COM transmitter, maybe it will synthesize the virtual capacitor!",
        "id": "8"
    }
    localStorage.setItem("AppliedJob",JSON.stringify(element))
    document.querySelector(".applyjob").style.display="block"
};
    