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
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".problem").style.display="none"
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

    // login LoginSlider function
    let form1= document.querySelector("form1");
    document.querySelector("#loginindex").addEventListener("click",logincheck)
    let logincreds = JSON.parse(localStorage.getItem("sign-creds"))
    document.querySelector("#jobspage").style.display="none"
    function logincheck(){

        let k = document.querySelector("#username").value;
        let l = document.querySelector("#Password").value;
        console.log(k,l)
        console.log(logincreds.username,logincreds.password)
        
        if(k==logincreds.username && l==logincreds.password){
            document.querySelector(".problem>img").src="CSS/Images/tick.png"
            document.querySelector(".problem>h1").innerText="Login Successful!"
            document.querySelector(".problem>h2").innerText="Welcome back ";
            let jobshref= document.querySelector("#jobspage");
            jobshref.style.display="block"
            jobshref.addEventListener("click",function(){
                document.querySelector(".problem").style.display="none" 
                jobspage()
            })
            document.querySelector("#close").style.display="none"
            document.querySelector("#signupxs").style.display="none"
            document.querySelector(".problem").style.display="block"
        }else{
            document.querySelector(".problem>img").src="CSS/Images/x.png"
            document.querySelector(".problem>h1").innerText="No Account Found"
            document.querySelector(".problem>h2").innerText="Please Signup to Proceed"
            document.querySelector("#jobspage").style.display="none"
            document.querySelector("#close").style.display="static"
            document.querySelector(".problem").style.display="block"
        }
    }
    function jobspage(){
        setTimeout(function(){
            document.location.href="login.html"
        },2000)
    }
    //  login slider function end 