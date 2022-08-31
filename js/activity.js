var sentInterestApi = "http://localhost:2000/api/v2/user/interests";
fetch(sentInterestApi, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    clutter = "";
    console.log("sentInterest", data);
    console.log(data.foundUser.interests);
    if (data.foundUser.interests.length > 0) {
      data.foundUser.interests.forEach(function (elem) {
        clutter += ` <div class="slick-cards">
                    <div class="top">
                        <a href="./user_page.html"><img src="${elem.profilePicture}" alt=""></a>
                    </div>
                    <div class="bottom">
                        <h3>${elem.firstname}</h3>
                        <p>${elem.age} Yrs</p>
                        <p>${elem.caste}-${elem.subCaste}</p>
                        <p>${elem.city}, ${elem.state}</p>
                        <div class="btn-flex">
                            <button class="accpt-btn">Withdraw Interest</button>
                        </div>
                    </div>
                </div>`;
      });
    }
    console.log(clutter);
    document.querySelector(".apiactivitysentinterest").innerHTML = clutter;
  })
  .catch((err) => {
    console.log(err);
  });
var pendingRequestApi = "http://localhost:2000/api/v2/user/pendingRequests";
fetch(pendingRequestApi, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    pendingRequestClutter = "";
    console.log("pendingRequest", data);
    console.log(data.pendingRequests);
    if (data.pendingRequests.length > 0) {
      data.pendingRequests.forEach(function (elem) {
        pendingRequestClutter += ` <div class="slick-cards">
                    <div class="top">
                        <a href="./user_page.html"><img src="${elem.profilePicture}" alt=""></a>
                    </div>
                    <div class="bottom">
                        <h3>${elem.firstname}</h3>
                        <p>${elem.age} Yrs</p>
                        <p>${elem.caste}-${elem.subCaste}</p>
                        <p>${elem.city}, ${elem.state}</p>
                        <div class="btn-flex">
                            <button class="accpt-btn">Accept</button>
                            <button class="decline-btn">Decline</button>
                        </div>
                    </div>
                </div>`;
      });
    }
    document.querySelector(".apiactivitypendingrequests").innerHTML =
      pendingRequestClutter;
  })
  .catch((err) => {
    console.log(err);
  });

var allLikedProfilesApi = "http://localhost:2000/api/v2/user/likedprofiles";
fetch(allLikedProfilesApi, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    allLikedProfilesClutter = "";
    console.log("allLikedProfiles", data);
    console.log(data.likedProfiles);
    if (data.likedProfiles.length > 0) {
      data.likedProfiles.forEach(function (elem) {
        allLikedProfilesClutter += ` <div class="slick-cards">
                <div class="top">
                    <a href="./user_page.html"><img src="${elem.profilePicture}" alt=""></a>
                </div>
                <div class="bottom">
                    <h3>${elem.firstname}</h3>
                    <p>${elem.age} Yrs</p>
                    <p>${elem.caste}-${elem.subCaste}</p>
                    <p>${elem.city}, ${elem.state}</p>
                    <div class="btn-flex">
                        <button class="accpt-btn">Accept</button>
                        <button class="decline-btn">Decline</button>
                    </div>
                </div>
            </div>`;
      });
    }
    document.querySelector(".apiactivityalllikedprofiles").innerHTML =
      allLikedProfilesClutter;
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  $(".slick-div").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    dots: true,
    // autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}, 1000);

document.querySelector("#intrst-drop").addEventListener("click", function () {
  document.querySelector("#drop-1").style.display = "flex";
  document.querySelector("#drop-2").style.display = "none";
});

document.querySelector("#drop-1 i").addEventListener("click", function () {
  document.querySelector("#drop-1").style.display = "none";
});

var atags1 = document.querySelectorAll("#drop-1 a");

atags1.forEach(function (val) {
  val.addEventListener("click", function () {
    document.querySelector("#drop-1").style.display = "none";
  });
});

document.querySelector("#profile-drop").addEventListener("click", function () {
  document.querySelector("#drop-2").style.display = "flex";
  document.querySelector("#drop-1").style.display = "none";
});

document.querySelector("#drop-2 i").addEventListener("click", function () {
  document.querySelector("#drop-2").style.display = "none";
});

var atags2 = document.querySelectorAll("#drop-2 a");

atags2.forEach(function (val) {
  val.addEventListener("click", function () {
    document.querySelector("#drop-2").style.display = "none";
  });
});
