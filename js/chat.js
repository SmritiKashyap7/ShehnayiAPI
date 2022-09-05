// msg-popup
fetch("http://localhost:2000/api/messages/conversations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("message api done");
    });

    fetch("http://localhost:2000/api/v2/admin/user/allUsers",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        clutter = ''
        data.forEach((user) => {
            console.log( user.profilePicture);
            clutter += `
            <div class="lft-users-parent">
            <button class="btn" data-id="${user._id}" >CLICK HERE</button>
            <div class="lft-users">
            <div class="user-img">
                <img src="${user.profilePicture}" alt="">
            </div>
            <div class="user-msgs">
                <h3 id='${user._id}' >${user.firstname +  " "+ user.lastname}</h3>
                <p>Hey, there</p>
            </div>
            <div  class="time">
                <p>8.45 AM</p>
                <div class="unseen-msgs">
                    <h6>3</h6>
                </div>
            </div>
        </div>
        <div class="line"></div>
        </div>`
        })
        document.querySelector ("#lft-bottom").innerHTML = clutter
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("ALL USER api done");
    });



    setTimeout(() => {
        var allUsersbtn = document.querySelectorAll(".btn")
        
         console.log(allUsersbtn);
        allUsersbtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                console.log(e.target.dataset.id);
                var id = e.target.dataset.id
                fetch(`http://localhost:2000/api/messages/conversations/query?userId=${id}`,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("message api done");
            })
            })
        })
        
                
    }, 2000);






document.querySelector (".chat-div").addEventListener ("click", function() {
    document.querySelector ("#msg-popup").style.right = "0";
})

document.querySelector ("#msg-heading #rgt #close").addEventListener ("click", function() {
    document.querySelector ("#msg-popup").style.right = "-130%";
})

document.querySelector ("#back").style.display = "none";

document.querySelector ("#back").addEventListener ("click", function(){
    document.querySelector ("#sec-2 #sec-2-rgt").style.display = "none";
    document.querySelector ("#sec-2-rgt #rgt-top").style.display = "none";
    document.querySelector ("#sec-2 #sec-2-lft").style.display = "flex";
    document.querySelector ("#sec-2 #sec-2-lft").style.flexDirection = "column";
})

if (document.documentElement.clientWidth < 450) {
    const userss= document.querySelectorAll(".lft-users");
    userss.forEach (function (elem) {
        elem.addEventListener ("click", function () {
            document.querySelector ("#sec-2 #sec-2-rgt").style.display = "initial";
            document.querySelector ("#sec-2-rgt #rgt-top").style.display = "flex";
            document.querySelector ("#sec-2 #sec-2-lft").style.display = "none";
            document.querySelector ("#back").style.display = "initial";
        })
    })
}

