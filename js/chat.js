
// msg-popup
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

// document.querySelector("#msg-popup").addEventListener {

// }