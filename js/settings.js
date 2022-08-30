document.querySelector ("#account-setting").addEventListener ("click", function () {
    document.querySelector ("#extra-popup").style.display = "initial";
    document.querySelector ("#form-2").style.display = "none";
    document.querySelector ("#form-1").style.display = "flex";
    document.querySelector ("#chng-pass").style.display = "none";
    document.querySelector ("#form-4").style.display = "none";
})

var closeIc = document.querySelectorAll(".forms #close-ic")

closeIc.forEach (function (val) {
    val.addEventListener ("click", function () {
        document.querySelector ("#extra-popup").style.display = "none";
    })
});

document.querySelector ("#privacy").addEventListener ("click", function () {
    document.querySelector ("#extra-popup").style.display = "initial";
    document.querySelector ("#form-2").style.display = "flex";
    document.querySelector ("#form-1").style.display = "none";
    document.querySelector ("#chng-pass").style.display = "none";
    document.querySelector ("#form-4").style.display = "none";
})

document.querySelector ("#links #help").addEventListener ("click", function () {
    document.querySelector ("#extra-popup").style.display = "initial";
    document.querySelector ("#form-2").style.display = "none";
    document.querySelector ("#form-1").style.display = "none";
    document.querySelector ("#chng-pass").style.display = "none";
    document.querySelector ("#form-4").style.display = "flex";
})

document.querySelector ("#pass-chng").addEventListener ("click", function() {
    document.querySelector ("#form-2").style.display = "none";
    document.querySelector ("#form-1").style.display = "none";
    document.querySelector ("#chng-pass").style.display = "flex";
})

