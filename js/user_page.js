var otherUser = JSON.parse(localStorage.getItem("otherUser"));
console.log(otherUser);
document
  .querySelector("#apiuserpageprofilepicture")
  .setAttribute("src", `http://localhost:2000/${otherUser.profilePicture}`);

var usernameuserpage = document.querySelectorAll(".apiuserpagename");
usernameuserpage.forEach((element) => {
  element.innerHTML = otherUser.firstname + " " + otherUser.lastname;
});

document.querySelector(".apiuserpageage").innerHTML = otherUser.age;
document.querySelector(".apiuserpagesubcaste").innerHTML = otherUser.subCaste;
document.querySelector(".apiuserpagecaste").innerHTML = otherUser.caste;
var maritalStatus = document.querySelectorAll(".apiuserpagemaritalstatus");
maritalStatus.forEach((element) => {
  element.innerHTML = otherUser.maritalStatus;
});
document.querySelector(
  ".apiuserpageplace"
).innerHTML = `Lives in ${otherUser.city}, ${otherUser.country}`;
document.querySelector(".apiuserpageeducation").innerHTML =
  otherUser.heighestQualification;

var picturesApi = `http://localhost:2000/api/v2/getalluploads/${otherUser._id}`;
fetch(picturesApi, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
})
  .then((response) => {
    return response.json();
  })
  .then(async (data) => {
    console.log(data);
    var PicturesClutter = "";
    await data.forEach((element, index) => {
      PicturesClutter += ` <div class="card-img-js">
          <a href="#"><img src="${element.image}" alt=""></a>
          <div class="overlay"></div>
          <i class="ri-lock-2-line"></i>
      </div>`;
    });
    document.querySelector(".apiuserpageuseruploads").innerHTML =
      PicturesClutter;
  });
document.querySelector(".apiuserpageuserabout").innerHTML =
  otherUser.profileSummary;
document.querySelector(".apiuserpagebday").innerHTML =
  otherUser.birthday.day +
  "/" +
  otherUser.birthday.month +
  "/" +
  otherUser.birthday.year;
document.querySelector(".apiuserpageheight").innerHTML = otherUser.height;
document.querySelector(".apiuserpageoccupation").innerHTML =
  otherUser.designation;
document.querySelector(".apiuserpagelocation").innerHTML =
  otherUser.city + "," + otherUser.state;
document.querySelector(".apiuserpagereligion").innerHTML = otherUser.religion;
document.querySelector(".apiuserpagecaste").innerHTML = otherUser.caste;
document.querySelector(".apiuserpagemanglik").innerHTML = otherUser.manglik;
document.querySelector(".apiuserpagehq").innerHTML =
  otherUser.heighestQualification;
document.querySelector(".apiuserpagecomapny").innerHTML = otherUser.company;
document.querySelector(".apiuserpageincome").innerHTML = otherUser.AnnualIncome;
document.querySelector(".apiuserpageeating").innerHTML = otherUser.eating;
document.querySelector(".apiuserpagedrink").innerHTML = otherUser.drinking;
document.querySelector(".apiuserpagesmoke").innerHTML = otherUser.smoking;
document.querySelector(".apiupfather").innerHTML = otherUser.fatherStatus;
document.querySelector(".apiupmother").innerHTML = otherUser.motherStatus;
document.querySelector(".apiupbrother").innerHTML = otherUser.brothers;
document.querySelector(".apiupsister").innerHTML = otherUser.sisters;
document.querySelector(".apiupfta").innerHTML =
  otherUser.userPreference.fromAge + " to " + otherUser.userPreference.toAge;
document.querySelector(".apiupfth").innerHTML =
  otherUser.userPreference.fromHeight +
  " to " +
  otherUser.userPreference.toHeight;
document.querySelector(".apiuppms").innerHTML =
  otherUser.userPreference.maritalStatus;
document.querySelector(".apiuppr").innerHTML =
  otherUser.userPreference.religion;
document.querySelector(".apiuppc").innerHTML = otherUser.userPreference.caste;
document.querySelector(".apiuppsc").innerHTML =
  otherUser.userPreference.subCaste;
document.querySelector(".apiuppcity").innerHTML = otherUser.userPreference.city;
document.querySelector(".apiuppstate").innerHTML =
  otherUser.userPreference.state;
document.querySelector(".apiuppcountry").innerHTML =
  otherUser.userPreference.country;
document.querySelector(".apiupphq").innerHTML =
  otherUser.userPreference.heighestQualification;
document.querySelector(".apiuppcompany").innerHTML =
  otherUser.userPreference.designation;
document.querySelector(".apiuppannum").innerHTML =
  otherUser.userPreference.AnnualIncome;
var dropdownbtn = document.querySelector(".drop-down .onlinebtn");
var dropdown = document.querySelector("#dropss");
var on = true;

dropdownbtn.addEventListener("click", function () {
  if (on) {
    dropdown.style.display = "flex";
    on = false;
  } else {
    dropdown.style.display = "none";
    on = true;
  }
});

document.addEventListener("mouseup", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
