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