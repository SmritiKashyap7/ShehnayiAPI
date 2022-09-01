var dropdownbtn = document.querySelector(".drop-down .onlinebtn");
var dropdown = document.querySelector("#dropss")
var on = true;

dropdownbtn.addEventListener ("click", function() {
    if(on){
        dropdown.style.display = "flex";
        on = false;
    }
    else {
        dropdown.style.display = "none";
        on = true;
    }
})


document.addEventListener('mouseup', function(e) {
  if (!dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
  }
});