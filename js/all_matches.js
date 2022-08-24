var knowbtn = document.querySelector ("#first");
var flag = true;
knowbtn.addEventListener ("click", function () {
    if (flag === true) {
        document.querySelector ("#sec-1 .full-dets").style.display = "initial";
        knowbtn.textContent = 'Hide details..';
        flag = false;
    }
    else {
        document.querySelector ("#sec-1 .full-dets").style.display = "none";
        knowbtn.textContent = 'Know more..';
        flag = true;
    }
})

var dropdown_icon = document.querySelector(".drop-down #open-dropdown");
var dropdown = document.querySelector("#dropss")
var on = true;

dropdown_icon.addEventListener ("click", function () {
    if(on){
        dropdown.style.display = "flex";
        on = false;
    }
    else {
        dropdown.style.display = "none";
        on = true;
    }
})

// Click outside the div matchespopup displays none
document.addEventListener('mouseup', function(e) {
    if (!dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
  