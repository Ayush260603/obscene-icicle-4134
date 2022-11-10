

document.querySelector("#registerbut").addEventListener("click",function(){
    window.location.href="jobs.html"
});
// Login Slider Button
function loginslide(){
    const primaryNav = document.querySelector(".primary-navigation");
    var loader = document.querySelector("#preloader");
    window.addEventListener("load",function(){
        loader.style.display="none";
    })
    document.querySelector("#close").addEventListener("click",function(){
        document.querySelector(".problem").style.display="none"
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
    document.querySelector("#avatarname").innerText= cred.username;
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
    


    let favData = JSON.parse(localStorage.getItem("fav-jobs"))||[];
    displayCards(favData)

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
            button.innerText= "Delete";
            button.addEventListener("click",function(){
                deleteFunc(favData,index)
            })
    
            let view = document.createElement("button");
            view.setAttribute("id","viewButton")
            view.innerText= "Apply Now";
            view.addEventListener("click",function(){
                localStorage.setItem("AppliedJob",JSON.stringify(element))
                document.querySelector(".problem").style.display="block"
            })
    
    // image 
            let image = document.createElement("img");
            image.src=element.image
            image.setAttribute("class","cardimage")
            image.innerText= element.image;
            
    // the things that will go inside divs are created
    
            div1.append(name,date,type,phrase,rating,salary,image)
            div2.append(button,view)
            div2.setAttribute("class","flexalign")
            div1.addEventListener("click",function(){
                let arr=[]
                arr.push(element)
                localStorage.setItem("OneJob",JSON.stringify(arr))
                document.location.href = 'view.html';
            })
            divout.append(div1,div2)
            document.querySelector(".JobScontainer").append(divout)
        });
        favor()
    }
    function deleteFunc(favData,index){
        favor()
        favData.splice(index,1)
        localStorage.setItem("fav-jobs",JSON.stringify(favData))
        displayCards(favData)
    }

    document.querySelector("#Proceed").addEventListener("click",redirectToOtp)
    function redirectToOtp(){
        setTimeout(function(){
            document.location.href="otp.html"
        },2000)
    }

    function favor(){
        let tex=document.querySelector(".JobScontainer").innerHTML;
        if(tex==""){
            console.log("fuck")
            document.querySelector("footer").style.display="none"
            document.querySelector(".emptycart").style.display="block"
        }
    }