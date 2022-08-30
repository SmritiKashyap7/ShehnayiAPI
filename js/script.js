document.querySelector("#menu").addEventListener("click", function (event) {
  document.querySelector("#mobileview").style.left = "0";
  event.preventDefault();
});

document.querySelector("#mobileview i").addEventListener("click", function () {
  document.querySelector("#mobileview").style.left = "-100%";
});

const popup = document.querySelector(".pop-up");
document
  .querySelector(".register-popup")
  .addEventListener("click", function () {
    popup.style.display = "initial";
  });

document
  .querySelector("#form-1 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-2 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-3 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-4 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-5 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-6 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-7 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-8 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-9 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#form-10 #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#login-form #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector("#forgot-pass-form #close-popup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

document
  .querySelector(".login-pop-up #close-popup")
  .addEventListener("click", function () {
    document.querySelector(".login-pop-up").style.display = "none";
  });

document
  .querySelector(".forgot-pop-up #close-popup")
  .addEventListener("click", function () {
    document.querySelector(".forgot-pop-up").style.display = "none";
  });

// Form Slides
document
  .querySelector("#form-1 #submit-btn")
  .addEventListener("click", function (event) {
    document.querySelector("#form-1").style.display = "none";
    document.querySelector("#form-2").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-2-prev").addEventListener("click", function () {
  document.querySelector("#form-2").style.display = "none";
  document.querySelector("#form-1").style.display = "initial";
  localStorage.removeItem("profilefor");
  localStorage.removeItem("firstname");
  localStorage.removeItem("lastname");
  localStorage.removeItem("religion");
  localStorage.removeItem("community");
});

document
  .querySelector("#form-2 #next-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

// document.querySelector("#form-3-prev").addEventListener("click", function () {
//   document.querySelector("#form-3").style.display = "none";
//   document.querySelector("#form-2").style.display = "initial";
// });

document
  .querySelector("#form-3 #next-btn-2")
  .addEventListener("click", function (event) {
    document.querySelector("#form-3").style.display = "none";
    document.querySelector("#form-4").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-4-prev").addEventListener("click", function () {
  document.querySelector("#form-4").style.display = "none";
  document.querySelector("#form-3").style.display = "initial";
  localStorage.removeItem(
    "hometowncity",
    document.querySelector(".apihometowncity").value
  );
  localStorage.removeItem(
    "hometownstate",
    document.querySelector(".apihometownstate").value
  );
  localStorage.removeItem(
    "hometowncountry",
    document.querySelector(".apihometowncountry").value
  );
  localStorage.removeItem(
    "subcommunity",
    document.querySelector(".apisubcommunity").value
  );
  localStorage.removeItem(
    "apimaritalstatus",
    document.querySelector(".apimaritalstatus").value
  );
  localStorage.removeItem(
    "apimanglik",
    document.querySelector(".apimanglik").value
  );
  localStorage.removeItem(
    "apiheight",
    document.querySelector(".apiheight").value
  );
  localStorage.removeItem(
    "apiweight",
    document.querySelector(".apiweight").value
  );
  localStorage.removeItem(
    "apiskintone",
    document.querySelector(".apiskintone").value
  );
});

document
  .querySelector("#form-4 #next-btn-3")
  .addEventListener("click", function (event) {
    document.querySelector("#form-4").style.display = "none";
    document.querySelector("#form-5").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-5-prev").addEventListener("click", function () {
  document.querySelector("#form-5").style.display = "none";
  document.querySelector("#form-4").style.display = "initial";
  localStorage.removeItem(
    "apiqualification",
    document.querySelector(".apiqualification").value
  );
  localStorage.removeItem(
    "apiworksector",
    document.querySelector(".apiworksector").value
  );
  localStorage.removeItem(
    "apicompany",
    document.querySelector(".apicompany").value
  );
  localStorage.removeItem(
    "apidesignation",
    document.querySelector(".apidesignation").value
  );
  localStorage.removeItem(
    "apisalary",
    document.querySelector(".apisalary").value
  );
});

document
  .querySelector("#form-5 #next-btn-4")
  .addEventListener("click", function (event) {
    document.querySelector("#form-5").style.display = "none";
    document.querySelector("#form-6").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-6-prev").addEventListener("click", function () {
  document.querySelector("#form-6").style.display = "none";
  document.querySelector("#form-5").style.display = "initial";
  localStorage.removeItem(
    "apieatinghabits",
    document.querySelector(".apieatinghabits").value
  );
  localStorage.removeItem(
    "apidrinkinghabits",
    document.querySelector(".apidrinkinghabits").value
  );
  localStorage.removeItem(
    "apismokinghabits",
    document.querySelector(".apismokinghabits").value
  );
});

document
  .querySelector("#form-6 #next-btn-5")
  .addEventListener("click", function (event) {
    document.querySelector("#form-6").style.display = "none";
    document.querySelector("#form-7").style.display = "initial";
    event.preventDefault();
  });

// document.querySelector("#form-7-prev").addEventListener("click", function () {
//   document.querySelector("#form-7").style.display = "none";
//   document.querySelector("#form-6").style.display = "initial";
//   localStorage.removeItem(
//     "apifather",
//     document.querySelector(".apifather").value
//   );
//   localStorage.removeItem(
//     "apimother",
//     document.querySelector(".apimother").value
//   );
//   localStorage.removeItem(
//     "apibrother",
//     document.querySelector(".apibrother").value
//   );
//   localStorage.removeItem(
//     "apimarriedbrother",
//     document.querySelector(".apimarriedbrother").value
//   );
//   localStorage.removeItem(
//     "apiunmarriedbrother",
//     document.querySelector(".apiunmarriedbrother").value
//   );
//   localStorage.removeItem(
//     "apisister",
//     document.querySelector(".apisister").value
//   );
//   localStorage.removeItem(
//     "apimarriedsister",
//     document.querySelector(".apimarriedsister").value
//   );
//   localStorage.removeItem(
//     "apiunmarriedsister",
//     document.querySelector(".apiunmarriedsister").value
//   );
// });

document
  .querySelector("#form-7 #next-btn-6")
  .addEventListener("click", function (event) {
    document.querySelector("#form-7").style.display = "none";
    document.querySelector("#form-8").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-8-prev").addEventListener("click", function () {
  document.querySelector("#form-8").style.display = "none";
  document.querySelector("#form-7").style.display = "initial";

  localStorage.removeItem(
    "apifromage",
    document.querySelector(".apifromage").value
  );
  localStorage.removeItem(
    "apitoage",
    document.querySelector(".apitoage").value
  );
  localStorage.removeItem(
    "apimaritalstatuspartner",
    document.querySelector(".apimaritalstatuspartner").value
  );
  localStorage.removeItem(
    "apipartnerdiet",
    document.querySelector(".apipartnerdiet").value
  );
  localStorage.removeItem(
    "apipartnersmoking",
    document.querySelector(".apipartnersmoking").value
  );
  localStorage.removeItem(
    "apipartnerdrinking",
    document.querySelector(".apipartnerdrinking").value
  );
  localStorage.removeItem(
    "apipartnerheightfrom",
    document.querySelector(".apipartnerheightfrom").value
  );
  localStorage.removeItem(
    "apipartnerheightto",
    document.querySelector(".apipartnerheightto").value
  );
  localStorage.removeItem(
    "apipartnercommunity",
    document.querySelector(".apipartnercommunity").value
  );
  localStorage.removeItem(
    "apipartnermanglik",
    document.querySelector(".apipartnermanglik").value
  );
});

document
  .querySelector("#form-8 #next-btn-7")
  .addEventListener("click", function (event) {
    document.querySelector("#form-8").style.display = "none";
    document.querySelector("#form-9").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#form-9-prev").addEventListener("click", function () {
  document.querySelector("#form-9").style.display = "none";
  document.querySelector("#form-8").style.display = "initial";

  localStorage.removeItem(
    "apilocncity",
    document.querySelector(".apilocncity").value
  );
  localStorage.removeItem(
    "apilocnstate",
    document.querySelector(".apilocnstate").value
  );
  localStorage.removeItem(
    "apilocncountry",
    document.querySelector(".apilocncountry").value
  );
});

document
  .querySelector("#form-9 #next-btn-8")
  .addEventListener("click", function (event) {
    document.querySelector("#form-9").style.display = "none";
    document.querySelector("#form-10").style.display = "initial";
    event.preventDefault();
  });

// document.querySelector("#form-10-prev").addEventListener("click", function () {
//   document.querySelector("#form-10").style.display = "none";
//   document.querySelector("#form-9").style.display = "initial";
// });

document
  .querySelector("#mobileview #mobile-register")
  .addEventListener("click", function () {
    popup.style.display = "initial";
  });

document
  .querySelector("#form-1 #login")
  .addEventListener("click", function (event) {
    document.querySelector("#form-1").style.display = "none";
    document.querySelector("#login-form").style.display = "initial";
    event.preventDefault();
  });

document
  .querySelector("#login_form #reg")
  .addEventListener("click", function (event) {
    document.querySelector(".login-pop-up").style.display = "none";
    document.querySelector(".pop-up").style.display = "initial";
    event.preventDefault();
  });

document
  .querySelector(".input-form #begin-btn")
  .addEventListener("click", function (e) {
    popup.style.display = "initial";
    e.preventDefault();
  });

// On click join-button popup register form
document
  .querySelector(".container #join-btn")
  .addEventListener("click", function (e) {
    popup.style.display = "initial";
    e.preventDefault();
  });

document.querySelector(".navbar #user").addEventListener("click", function () {
  document.querySelector(".login-pop-up").style.display = "initial";
});

document
  .querySelector("#login-form #reg")
  .addEventListener("click", function () {
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#form-1").style.display = "initial";
  });

document
  .querySelector("#login-form #forgot")
  .addEventListener("click", function () {
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#forgot-pass-form").style.display = "initial";
  });

document
  .querySelector("#login_form #forgot")
  .addEventListener("click", function (event) {
    document.querySelector(".login-pop-up").style.display = "none";
    document.querySelector(".forgot-pop-up").style.display = "initial";
    event.preventDefault();
  });

// const login_popup = document.querySelector(".login-pop-up");
// document.querySelector ("#mobileview #mobile-login").addEventListener ("click", function() {
//     login_popup.style.display = "initial";
// })

document
  .querySelector("#main-register-btn")
  .addEventListener("click", function (e) {
    popup.style.display = "initial";
    e.preventDefault();
  });

// On window size till 1024px, the mobile navbar show, after that it disappears
// window.addEventListener('resize',(e)=>{
//     if(e.target.window.innerWidth>1024){
//         document.querySelector ("#mobileview").style.left = "-100%";
//     };
// })
