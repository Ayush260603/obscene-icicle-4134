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
    document.querySelector(".problem").style.display="none"
    document.location.href="index.html"
})
document.querySelector("#no").addEventListener("click",function(){
    document.querySelector(".problem").style.display="none"
})
document.querySelector("#logoutbut").addEventListener("click",LogoutFunc)
function LogoutFunc(){
    document.querySelector(".problem").style.display="block"
}
    