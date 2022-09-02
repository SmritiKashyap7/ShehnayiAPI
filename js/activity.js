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
      data.foundUser.interests.forEach(function (elem, index) {
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
                            <button class="accpt-btn dbacceptbtn" id="btn${index}" data-id= ${elem._id}>Withdraw Interest</button>
                        </div>
                    </div>
                </div>`;
      });
    }
    // console.log(clutter);
    document.querySelector(".apiactivitysentinterest").innerHTML = clutter;
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  document.querySelectorAll(".dbacceptbtn").forEach((element) => {
    element.addEventListener("click", function (dets) {
      dets.preventDefault();
      var userId = dets.target.dataset.id;
      console.log("userid", userId);
      var btnId = dets.target.id;
      console.log("btnid", btnId);
      fetch(`http://localhost:2000/api/v2/user/withdrawInterest/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("withdraw your req", data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("finally");
        });
    });
  });
}, 1000);

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
      data.pendingRequests.forEach(function (elem, index) {
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
                            <button class="accpt-btn apiapendingreqacceptbtn" id="apiapendingreqacceptbtn${index}" data-id= ${elem._id}>Accept</button>
                            <button class="decline-btn apiapendingreqdeclinetbtn" id="apiapendingreqdeclinetbtn${index}" data-id= ${elem._id}>Decline</button>
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

setTimeout(() => {
  document.querySelectorAll(".apiapendingreqacceptbtn").forEach((element) => {
    element.addEventListener("click", function (dets) {
      dets.preventDefault();
      var userId = dets.target.dataset.id;
      console.log("userid", userId);
      var btnId = dets.target.id;
      console.log("btnid", btnId);
      fetch(`http://localhost:2000/api/v2/connections/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("accpet req", data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("finally");
        });
    });
  });
}, 1000);

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

const viewProfiles = "http://localhost:2000/api/v2/user/viewedProfiles";
fetch(viewProfiles, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("viewProfiles", data.viewedProfiles);
    viewedProfilesClutter = "";
    if (data.viewedProfiles.length > 0) {
      data.viewedProfiles.forEach(function (elem) {
        viewedProfilesClutter += `<div class="slick-cards">
                    <div class="top">
                        <a href="./user_page.html"><img src="${elem.profilePicture}" alt=""></a>
                    </div>
                    <div class="bottom">
                        <h3>${elem.firstname}</h3>
                        <p>${elem.age} Yrs</p>
                        <p>${elem.caste}-${elem.subCaste}</p>
                        <p>${elem.city}, ${elem.state}</p>
                        <div class="btn-flex">
                            <button class="accpt-btn">View Profile</button>
                        </div>
                    </div>
                </div>`;
      });

      document.querySelector(".apiactivityallviewedProfiles").innerHTML =
        viewedProfilesClutter;
    }
  })
  .catch((err) => {
    console.log(err);
  });

const blockedUsersApi = "http://localhost:2000/api/v2/getAllBlockedUsers";
fetch(blockedUsersApi, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("blockedUsers", data);
    blockedUsersClutter = "";
    if (data.blockedUsers.length > 0) {
      data.blockedUsers.forEach(function (elem) {
        blockedUsersClutter += `  <div class="slick-cards">
                    <div class="top">
                        <a href="./user_page.html"><img src="${elem.profilePicture}" alt=""></a>
                    </div>
                    <div class="bottom">
                        <h3>${elem.firstname}</h3>
                        <p>${elem.age} Yrs</p>
                        <p>${elem.caste}-${elem.subCaste}</p>
                        <p>${elem.city}, ${elem.state}</p>
                        <div class="btn-flex">
                            <button class="accpt-btn">Unblock User</button>
                        </div>
                    </div>
                </div>`;
      });
    }
    document.querySelector(".apiactivityblockedUsers").innerHTML =
      blockedUsersClutter;
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
}, 2000);

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
