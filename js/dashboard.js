var flag = 0;
var dashboardApiUrl = "http://localhost:2000/api/v2/home";

fetch(dashboardApiUrl, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector("#apidbpendinginterest").innerHTML =
      data.foundUser.pendingRequests.length;
    document.querySelector("#apidbconnections").innerHTML =
      data.foundUser.connections.length;
    document.querySelector("#apidbvisitors").innerHTML =
      data.foundUser.viewProfilers.length;
    document.querySelector("#apidbusername").innerHTML =
      data.foundUser.firstname + " " + data.foundUser.lastname;
    document
      .querySelector("#apidbuserprofilepic")
      .setAttribute(
        "src",
        `http://localhost:2000/${data.foundUser.profilePicture}`
      );
    document.querySelector("#apidbuserid").innerHTML =
      data.foundUser._id.substring(4, 13);

    if (data.matches.length > 0) {
      var clutter1 = "";
      data.matches.forEach((element, index) => {
        clutter1 += `<div class="slick-card">
                    <div class="slick-card-img">
                        <a href="./user_page.html"><img id="userImg" src="/${element.profilePicture}" alt="Profile"></a>
                    </div>
                    <div class="slick-card-dets">
                        <h1>${element.firstname}</h1>
                        <h5>Age -${element.age}</h5>
                        <h5>${element.cast}-${element.subCaste}</h5>
                        <h5>${element.city}, ${element.state}</h5>
                    </div>
                    <a class="slick-card-a" >
                        <button type="submit" id="btn${index}" data-id= ${element._id} >Send Interest</button>
                    </a>
                </div>`;
      });
      document.querySelector("#apidbmatches").innerHTML = clutter1;
    } else {
      document.querySelector(
        "#apidbmatches"
      ).innerHTML = `<h1>No Matches Found</h1>`;
    }   

    fetch("http://localhost:2000/api/v2/allUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var clutter2 = "";
        data.forEach((element, index) => {
          clutter2 += `<div class="slick-card">
                    <div class="slick-card-img">
                        <a href="./user_page.html"><img id="userImg" src="http://localhost:2000/${element.profilePicture}" alt="Profile"></a>
                    </div>
                    <div class="slick-card-dets">
                        <h1>${element.firstname}</h1>
                        <h5>Age - ${element.age}</h5>
                        <h5>${element.cast}-${element.subCaste}</h5>
                        <h5>${element.city},${element.state}</h5>
                    </div>
                    <a  class="slick-card-a">
                        <button id="btn${index}" data-id= ${element._id} >Send Interest</button>
                    </a>
                </div>`;
        });
        document.querySelector("#apidbrecommendedmatches").innerHTML = clutter2;
      });
  })
  .catch((err) => {
    return err;
  })
  .finally(() => {
    console.log("finally");
  });

document
  .querySelector("#apidbrecommendedmatches")
  .addEventListener("click", function (dets) {
    dets.preventDefault();
    var userId = dets.target.dataset.id;
    console.log(dets.target.id);
    var btnId = dets.target.id;
    console.log(dets.target.dataset.id);
    var loggedinUser = localStorage.getItem("loggedinUserdashboard");

    console.log(loggedinUser);
    console.log(sessionStorage.getItem("loggedinUserdashboard"));
    fetch(`http://localhost:2000/api/v2/user/interest/${userId}`, {
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
        console.log(data);

        if (data.message == "Interest Sent") {
          document.querySelector(`#${btnId}`).style.display = "none";
        } else {
          // alert("Interest Already Sent");
          document.querySelector(`#${btnId}`).style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  });

setTimeout(() => {
  $(".slick-js").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
}, "1000");

// Mobileview navbar
document.querySelector("#menu").addEventListener("click", function (event) {
  document.querySelector("#mobileview").style.left = "0";
  event.preventDefault();
});

document.querySelector("#mobileview i").addEventListener("click", function () {
  document.querySelector("#mobileview").style.left = "-100%";
});

// msg-popup
// document.querySelector ("#right-js .chat-div").addEventListener ("click", function() {
//     document.querySelector ("#msg-popup").style.right = "0";
// })

// document.querySelector ("#msg-heading #rgt #close").addEventListener ("click", function() {
//     document.querySelector ("#msg-popup").style.right = "-130%";
// })

// document.querySelector ("#back").style.display = "none";

// document.querySelector ("#back").addEventListener ("click", function(){
//     document.querySelector ("#sec-2 #sec-2-rgt").style.display = "none";
//     document.querySelector ("#sec-2-rgt #rgt-top").style.display = "none";
//     document.querySelector ("#sec-2 #sec-2-lft").style.display = "flex";
//     document.querySelector ("#sec-2 #sec-2-lft").style.flexDirection = "column";
// })

// if (document.documentElement.clientWidth < 450) {
//     const userss= document.querySelectorAll(".lft-users");
//     userss.forEach (function (elem) {
//         elem.addEventListener ("click", function () {
//             document.querySelector ("#sec-2 #sec-2-rgt").style.display = "initial";
//             document.querySelector ("#sec-2-rgt #rgt-top").style.display = "flex";
//             document.querySelector ("#sec-2 #sec-2-lft").style.display = "none";
//             document.querySelector ("#back").style.display = "initial";
//         })
//     })
// }
