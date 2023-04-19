const primaryNav = document.querySelector(".primary-navigation");
document
    .querySelector(" .mobile-nav-toggle>span")?.addEventListener("click", LoginSlider);
document.querySelector("#loginbut").addEventListener("click", LoginSlider);

function LoginSlider() {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        document.querySelector(" .mobile-nav-toggle>span").innerText = "✖️";
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        document.querySelector(" .mobile-nav-toggle>span").innerHTML = `  <img src="./CSS/Images/hamburger.png" width="21px" alt="=">`;
    }
}

window.addEventListener("scroll", () => {
    let header = document.getElementsByTagName("header")[0];
    let TOOGLER = document.getElementsByClassName("mobile-nav-toggle")[0];
    if (document.documentElement.scrollTop > 10) {
        header.classList.add("stickky")
        if (TOOGLER) TOOGLER.style.top = "17px";
    } else {
        header.classList.remove("stickky")
        if (TOOGLER) TOOGLER.style.top = "37px";
    }
})