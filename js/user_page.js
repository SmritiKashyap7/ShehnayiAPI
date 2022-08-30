// document.querySelector("#first").addEventListener("click", function () {
//   document.querySelector("#sec-1 .full-dets").style.display = "initial";
// });

// document
//   .querySelector(".drop-down #open-dropdown")
//   .addEventListener("click", function () {
//     document.querySelector("#dropss").style.display = "flex";
//   });

// document
//   .querySelector("#dropss #close-drop-list")
//   .addEventListener("click", function () {
//     document.querySelector("#dropss").style.display = "none";
//   });




const add = document.querySelector("#add");
const addimages = document.querySelector("#addimages");
add.addEventListener("click", function (e) {
addimages.click();
})



var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
