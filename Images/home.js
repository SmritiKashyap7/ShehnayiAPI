let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {    
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "flex";  
}

document.querySelector ("#menu").addEventListener ("click", function (event) {
    document.querySelector ("#mobileview").style.left = "0";
    event.preventDefault();
})

document.querySelector ("#mobileview i").addEventListener ("click", function () {
    document.querySelector ("#mobileview").style.left = "-100%";
})

