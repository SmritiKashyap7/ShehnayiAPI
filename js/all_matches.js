var knowbtn = document.querySelectorAll(".know-more-btn");
var fullDetail = document.querySelectorAll(".full-dets");
var slideBtn = document.querySelectorAll(".slide-btn");

let flag = true;
for (let i = 0; i < knowbtn.length; i++) {
  knowbtn[i].addEventListener("click", function () {
    if (flag) {
      fullDetail[i].style.display = "initial";
      knowbtn[i].textContent = "Hide details..";
      flag = false;
    } else {
      fullDetail[i].style.display = "none";
      knowbtn[i].textContent = "Know more..";
      flag = true;
    }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  knowmore(false);
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
  slides[slideIndex - 1].style.display = "block";
}

var dropdownbtn = document.querySelectorAll(".drop-down .onlinebtn");
var dropdown = document.querySelectorAll("#dropss");
var on = true;

for (let i = 0; i < dropdownbtn.length; i++) {
  dropdownbtn[i].addEventListener("click", function () {
    if (on) {
      dropdown[i].style.display = "flex";
      on = false;
    } else {
      dropdown[i].style.display = "none";
      on = true;
    }
  });
  document.addEventListener("mouseup", function (e) {
    if (!dropdown[i].contains(e.target)) {
      dropdown[i].style.display = "none";
    }
  });
}

// Click outside the div matchespopup displays none
document.addEventListener("mouseup", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.style.display = "none";
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
