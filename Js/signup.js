document.querySelector("#registerbut").addEventListener("click",function(){
    window.location.href="signup.html"
});
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".problem").style.display="none"
})
var loader = document.querySelector("#preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})
let sform = document.querySelector("#form1")
sform.addEventListener("submit",SigninFunction)

let lform = document.querySelector("#form2")
lform.addEventListener("submit",LoginFuntion)

function SigninFunction(e){
e.preventDefault() 
let obj1 = {
        username: sform.signname.value,
        password: sform.signpassword.value,
        email:    sform.email.value,
        gender:   sform.gender.value,
        status :"Not Working",
    }
    localStorage.setItem("sign-creds",JSON.stringify(obj1))
    document.querySelector(".problem").style.display="block"
    document.querySelector("#logIN").style.display="flex"
    document.querySelector("#signIN").style.display="none"
    
}
function LoginFuntion(event){
    event.preventDefault() 
    let obj2={
        username: lform.loginname.value,
        password: lform.loginpassword.value,
    }
    let creds= JSON.parse(localStorage.getItem("sign-creds"))
    if(obj2.username==creds.username && obj2.password== creds.password){
        console.log("Hello")
        document.querySelector(".problem>h1").innerText="Login Successful!";
        document.querySelector(".problem>img").src="CSS/Images/tick.png";
        document.querySelector(".problem>h2").innerText="You can now look for jobs!";
        document.querySelector(".problem").style.display="block"
        loginpage()
    }else{
        document.querySelector(".problem>h1").innerText="Login Unsuccessful!";
        document.querySelector(".problem>img").src="CSS/Images/x.png";
        document.querySelector(".problem>h2").innerText="You entered wrong username or password";
        document.querySelector(".problem").style.display="block"
    }
}
function loginpage(){
   setTimeout(function(){
    window.location.href="login.html"
   },3000) 
}