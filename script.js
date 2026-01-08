const imgs = document.querySelectorAll(".header-slider ul img");
const nextBtn = document.querySelector(".control-next");
const prevBtn = document.querySelector(".control-prev");


let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"
    }
    imgs[n].style.display = "block"
}


function previousSlide(event) {
    event.preventDefault();
    if(n > 0) {
        n--
    }
    else {
        n = imgs.length - 1
    }
    changeSlide()
}

function nextSlide(event) {
    event.preventDefault();
    if(n < 5) {
        n++
    }
    else {
        n = 0
    }
    changeSlide()
}

changeSlide()

const scrollContainer = document.querySelectorAll()

// Add slide animation

