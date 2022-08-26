var knowbtn = document.querySelectorAll(".know-more-btn");
var fullDetail = document.querySelectorAll (".full-dets");
var slideBtn = document.querySelectorAll(".slide-btn") 
// var btnon = true;

function knowmore (value){
   let flag = value
for(let i=0; i<knowbtn.length; i++){
        knowbtn[i].addEventListener ("click", function () {
            if (flag) {
                fullDetail[i].style.display = "initial";
                knowbtn[i].textContent = 'Hide details..';
                flag = false;
            }
            else {
                fullDetail[i].style.display = "none";
                knowbtn[i].textContent = 'Know more..';
                flag = true;
            }
        });
    }
}
knowmore()

// for(let i=0; i<slideBtn.length; i++){ 
//     slideBtn[i].addEventListener("click", function(){
//         if (flag){
    //             // slideBtn[i].forEach(myFunction);

//         }
//     });
// }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    knowmore(false)

}

var on = true;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


var dropdown_icon = document.querySelector(".drop-down #open-dropdown");
var dropdown = document.querySelector("#dropss")
var on = true;

dropdown_icon.addEventListener ("click", function () {
    if(on){
        dropdown.style.display = "flex";
        on = false;
    }
    else {
        dropdown.style.display = "none";
        on = true;
    }
})


// Click outside the div matchespopup displays none
document.addEventListener('mouseup', function(e) {
    if (!dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});


// Slide btn 

// for(let i=0; i<fullDetail.length; i++){
//     slideBtn.addEventListener("click", function(){
    
//         if(slides[i].style.display = "none") {
    //             fullDetail[i].style.display = "none";
    //             knowbtn[i].textContent = 'Know more..';
    //         }
    //         else {
        //             knowbtn[i].textContent = 'Hide details.';
//         }
//     }); 
// }
