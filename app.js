const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true, // Enable smooth scroll on mobile as well
    getDirection: true,
    getSpeed: true
});

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}


function imagePage3() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    let a = document.querySelectorAll(".elem");
    a.forEach((e) => {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

menuAnimation();
imagePage3();
swiperAnimation();
loaderAnimation();

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
},false) 