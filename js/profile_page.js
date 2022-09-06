



//smriti
var profilePic = document.querySelector(".profile-pic");
var fullName = document.querySelector(".full-name");
fetch("https://server.shehnayi.in/api/v2/home", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((ravi) => {
    return ravi.json();
  })
  .then((data) => {
    console.log(data.foundUser);
    // Abhishek
// document.querySelector(".apifirstname-am").setAttribute('value', data.foundUser.firstname);
// document.querySelector(".apilastname-am").setAttribute('value', data.foundUser.lastname);
// document.querySelector(".apidays-am").setAttribute('value', data.foundUser.birthday.day);
// document.querySelector(".apimonth-am").setAttribute('value', data.foundUser.birthday.month);
// document.querySelector(".apiyear-am").setAttribute('value', data.foundUser.birthday.year);
// document.querySelector(".apiheight-am").value = data.foundUser.height;
// document.querySelector(".apimarital-am").value = data.foundUser.maritalStatus;
// document.querySelector(".apioccupation-am").value = data.foundUser.designation;
// document.querySelector(".apicity-am").setAttribute('value', data.foundUser.city);
// document.querySelector(".apistate-am").setAttribute('value', data.foundUser.state);

// document.querySelector(".apiemail-am").setAttribute('value', data.foundUser.email);
// document.querySelector(".apiphone-am").setAttribute('value', data.foundUser.phone);

// document.querySelector(".apireligion-am").setAttribute('value', data.foundUser.religion);
// document.querySelector(".apisubcaste-am").setAttribute('value', data.foundUser.caste);
// document.querySelector(".apimanglik-am").value = data.foundUser.manglik;

// document.querySelector(".apiqualification-am").value = data.foundUser.heighestQualification;
// document.querySelector(".apicompany-am").setAttribute('value', data.foundUser.company);
// document.querySelector(".apiannualincome-am").value = data.foundUser.AnnualIncome;

// document.querySelector(".apieating-am").value = data.foundUser.eating;
// document.querySelector(".apidrinking-am").value = data.foundUser.drinking;
// document.querySelector(".apismoking-am").value = data.foundUser.smoking;

// document.querySelector(".apifatherstatus-am").value = data.foundUser.fatherStatus;
// document.querySelector(".apimotherstatus-am").value = data.foundUser.motherStatus;
// document.querySelector(".apinoofbrothers-am").setAttribute('value', data.foundUser.brothers);
// document.querySelector(".apinoofsisters-am").setAttribute('value', data.foundUser.sisters);

// document.querySelector(".apifromage-am").setAttribute('value', data.foundUser.userPreference.fromAge);
// document.querySelector(".apitoage-am").setAttribute('value', data.foundUser.userPreference.toAge);
// document.querySelector(".apifromheight-am").setAttribute('value', data.foundUser.userPreference.fromHeight);
// document.querySelector(".apitoheight-am").setAttribute('value', data.foundUser.userPreference.toHeight);
// document.querySelector(".apiparmarital-am").value = data.foundUser.userPreference.maritalStatus;
// document.querySelector(".apiparreligion-am").setAttribute('value', data.foundUser.userPreference.religion);
// document.querySelector(".apiparcommunity-am").setAttribute('value', data.foundUser.userPreference.maritalStatus);

// document.querySelector(".apiparcity-am").setAttribute('value', data.foundUser.userPreference.city);
// document.querySelector(".apiparstate-am").setAttribute('value', data.foundUser.userPreference.state);
// document.querySelector(".apiparcountry-am").setAttribute('value', data.foundUser.userPreference.country);

// document.querySelector(".apiparqualification").setAttribute('value', data.foundUser.userPreference.heighestQualification);
// document.querySelector(".apiparcompany-am").setAttribute('value', data.foundUser.userPreference.company);
// document.querySelector(".apiparannualincome-am").value = data.foundUser.userPreference.AnnualIncome;


// localStorage.setItem("am" , document.querySelector(".apiheight-am").value);

    profilePic.innerHTML = `<img id="myImg" src="https://server.shehnayi.in/${data.foundUser.profilePicture}" alt="" />
            <i id="add" class="ri-add-circle-line"></i>`;

    fullName.textContent = `${data.foundUser.firstname} ${data.foundUser.lastname}`;
    document.querySelector(".apippage").innerHTML = `${data.foundUser.age} yrs,${data.foundUser.height}`;
    document.querySelector(".apippcaste").innerHTML = `${data.foundUser.caste}`;
    document.querySelector(".apippsubcaste").innerHTML = `${data.foundUser.subCaste}`;
    document.querySelector(".apippmaritalstatus").innerHTML = `${data.foundUser.maritalStatus}`;
    document.querySelector(".apippplace").innerHTML = `Lives in ${data.foundUser.city}, ${data.foundUser.state}`;
    document.querySelector(".apippdesignation").innerHTML = `${data.foundUser.designation}`;
    document.querySelector(".apippdesc").innerHTML = `${data.foundUser.profileSummary}`;
    document.querySelector(".apippusername").innerHTML = `${data.foundUser.firstname} ${data.foundUser.lastname}`;
    document.querySelector(".apippbday").innerHTML = `${data.foundUser.birthday.day}/${data.foundUser.birthday.month}/${data.foundUser.birthday.year}`;
    document.querySelector(".apipph").innerHTML = `${data.foundUser.height}`;
    document.querySelector(".apippms").innerHTML = `${data.foundUser.maritalStatus}`;
    document.querySelector(".apippdsg").innerHTML = `${data.foundUser.designation}`;
    document.querySelector(".apippp").innerHTML = `${data.foundUser.city}, ${data.foundUser.state}`;
    document.querySelector(".apippemail").innerHTML = `${data.foundUser.email}`;
    document.querySelector(".apipphone").innerHTML = `${data.foundUser.phone}`;
    document.querySelector(".apipprg").innerHTML = `${data.foundUser.religion}`;
    document.querySelector(".apippcs").innerHTML = `${data.foundUser.caste}`;
    document.querySelector(".apippmangliks").innerHTML = `${data.foundUser.manglik}`;
    document.querySelector(".apippuhq").innerHTML = `${data.foundUser.heighestQualification}`;
    document.querySelector(".apippucompany").innerHTML = `${data.foundUser.company}`;
    document.querySelector(".apippuannum").innerHTML = `${data.foundUser.AnnualIncome}`;
    document.querySelector(".apippeat").innerHTML = `${data.foundUser.eating}`;
    document.querySelector(".apippdrink").innerHTML = `${data.foundUser.drinking}`;
    document.querySelector(".apippsmoke").innerHTML = `${data.foundUser.smoking}`;
    document.querySelector(".apippfr").innerHTML = `${data.foundUser.fatherStatus}`;
    document.querySelector(".apippmr").innerHTML = `${data.foundUser.motherStatus}`;
    document.querySelector(".apippnbr").innerHTML = `${data.foundUser.brothers}`;
    document.querySelector(".apippns").innerHTML = `${data.foundUser.sisters}`;
    document.querySelector(".apipppage").innerHTML = `${data.foundUser.userPreference.fromAge} to ${data.foundUser.userPreference.toAge} yrs`;
    document.querySelector(".apippph").innerHTML = `${data.foundUser.userPreference.fromHeight} to ${data.foundUser.userPreference.toHeight}`;
    document.querySelector(".apipppms").innerHTML = `${data.foundUser.userPreference.maritalStatus}`;
    document.querySelector(".apippprg").innerHTML = `${data.foundUser.userPreference.religion}`;
    document.querySelector(".apipppcs").innerHTML = `${data.foundUser.userPreference.caste}`;
    // document.querySelector(".apipppsc").innerHTML = `${data.foundUser.userPreference.subCaste}`;
    document.querySelector(".apipppcity").innerHTML = `${data.foundUser.userPreference.city}`;
    document.querySelector(".apipppstate").innerHTML = `${data.foundUser.userPreference.state}`;
    document.querySelector(".apipppcountry").innerHTML = `${data.foundUser.userPreference.country}`;
    document.querySelector(".apippphq").innerHTML = `${data.foundUser.userPreference.heighestQualification}`;
    document.querySelector(".apipppcompany").innerHTML = `${data.foundUser.userPreference.company}`;
    document.querySelector(".apipppannum").innerHTML = `${data.foundUser.userPreference.AnnualIncome}`;
  })
  .catch((err) => {
    console.log(err);
  });


// const add = document.querySelector("#add");
// const addimages = document.querySelector("#addimages");
// add.addEventListener("click", function (e) {
//   addimages.click();
// });

// User Image model
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};


// Edit button form
var editbtn = document.querySelector(".edit-txt");
var close_icon = document.querySelectorAll("#close-icon");
var editformpopup = document.querySelector(".edit-form-popup");
// var editform = document.querySelector(".inner-form")
var editoverlay = document.querySelector(".edit-overlay");

editbtn.addEventListener("click", function () {
  editoverlay.style.display = "initial";
  editformpopup.style.display = "initial";
  // editform.style.display = "initial";
});

function popup() {
  editoverlay.style.display = "none";
  editformpopup.style.display = "none";
}

editoverlay.addEventListener("click", function () {
  popup();
});

// Close buttons
document.querySelector("#inner-form-1 #close-icon-1").addEventListener("click", function () {
  popup();
});

document.querySelector("#inner-form-2 #close-icon-2").addEventListener("click", function () {
    popup();
});

document.querySelector("#inner-form-3 #close-icon-3").addEventListener("click", function () {
    popup();
});

document.querySelector("#inner-form-4 #close-icon-4").addEventListener("click", function () {
    popup();
});

document.querySelector("#inner-form-5 #close-icon-5").addEventListener("click", function () {
    popup();
  });

document.querySelector("#inner-form-6 #close-icon-6").addEventListener("click", function () {
    popup();
  });

document.querySelector("#inner-form-7 #close-icon-7").addEventListener("click", function () {
    popup();
  });

document.querySelector("#inner-form-8 #close-icon-8").addEventListener("click", function () {
    popup();
  });

var textinput = document.querySelectorAll(".text-input");


// Form slides
document.querySelector("#inner-form-1 .nexti-btn").addEventListener("click", function (event) {
      document.querySelector("#inner-form-1").style.display = "none";
      document.querySelector("#inner-form-2").style.display = "initial";
      event.preventDefault();
  });

document.querySelector("#inner-form-2 .flex-div .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-2").style.display = "none";
    document.querySelector("#inner-form-1").style.display = "initial";
  });

document.querySelector("#inner-form-2 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-2").style.display = "none";
    document.querySelector("#inner-form-3").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-3 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-3").style.display = "none";
    document.querySelector("#inner-form-2").style.display = "initial";
  });

document.querySelector("#inner-form-3 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-3").style.display = "none";
    document.querySelector("#inner-form-4").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-4 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-4").style.display = "none";
    document.querySelector("#inner-form-3").style.display = "initial";
  });

document.querySelector("#inner-form-4 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-4").style.display = "none";
    document.querySelector("#inner-form-5").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-5 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-5").style.display = "none";
    document.querySelector("#inner-form-4").style.display = "initial";
  });

document.querySelector("#inner-form-5 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-5").style.display = "none";
    document.querySelector("#inner-form-6").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-6 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-6").style.display = "none";
    document.querySelector("#inner-form-5").style.display = "initial";
  });

document.querySelector("#inner-form-6 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-6").style.display = "none";
    document.querySelector("#inner-form-7").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-7 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-7").style.display = "none";
    document.querySelector("#inner-form-6").style.display = "initial";
  });

document.querySelector("#inner-form-7 .nexti-btn").addEventListener("click", function (event) {
    document.querySelector("#inner-form-7").style.display = "none";
    document.querySelector("#inner-form-8").style.display = "initial";
    event.preventDefault();
  });

document.querySelector("#inner-form-8 .previ-btn").addEventListener("click", function () {
    document.querySelector("#inner-form-8").style.display = "none";
    document.querySelector("#inner-form-7").style.display = "initial";
  });


