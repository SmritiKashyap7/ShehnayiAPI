const add = document.querySelector("#add");
const addimages = document.querySelector("#addimages");
  add.addEventListener("click", function (e) {
  addimages.click();
})


// User Image model
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


// Edit button form
var editbtn = document.querySelector(".edit-txt");
var close_icon = document.querySelectorAll("#close-icon");
var editformpopup = document.querySelector(".edit-form-popup");
// var editform = document.querySelector(".inner-form")
var editoverlay = document.querySelector(".edit-overlay");


editbtn.addEventListener("click", function(){
    editoverlay.style.display = "initial";
    editformpopup.style.display = "initial";
    // editform.style.display = "initial";
}); 

function popup() {
    editoverlay.style.display = "none";
    editformpopup.style.display = "none";
}
    

editoverlay.addEventListener("click", function(){
    popup();
});


// Close buttons
document.querySelector("#inner-form-1 #close-icon-1").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-2 #close-icon-2").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-3 #close-icon-3").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-4 #close-icon-4").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-5 #close-icon-5").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-6 #close-icon-6").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-7 #close-icon-7").addEventListener ("click", function() {
    popup();
});

document.querySelector("#inner-form-8 #close-icon-8").addEventListener ("click", function() {
    popup();
});



// Form slides
document.querySelector("#inner-form-1 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-1").style.display = "none";
    document.querySelector("#inner-form-2").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-2 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-2").style.display = "none";
    document.querySelector("#inner-form-1").style.display = "initial";
});

document.querySelector("#inner-form-2 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-2").style.display = "none";
    document.querySelector("#inner-form-3").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-3 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-3").style.display = "none";
    document.querySelector("#inner-form-2").style.display = "initial";
});

document.querySelector("#inner-form-3 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-3").style.display = "none";
    document.querySelector("#inner-form-4").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-4 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-4").style.display = "none";
    document.querySelector("#inner-form-3").style.display = "initial";
});

document.querySelector("#inner-form-4 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-4").style.display = "none";
    document.querySelector("#inner-form-5").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-5 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-5").style.display = "none";
    document.querySelector("#inner-form-4").style.display = "initial";
});

document.querySelector("#inner-form-5 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-5").style.display = "none";
    document.querySelector("#inner-form-6").style.display = "initial";
    event.preventDefault();
});


document.querySelector("#inner-form-6 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-6").style.display = "none";
    document.querySelector("#inner-form-5").style.display = "initial";
});

document.querySelector("#inner-form-6 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-6").style.display = "none";
    document.querySelector("#inner-form-7").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-7 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-7").style.display = "none";
    document.querySelector("#inner-form-6").style.display = "initial";
});

document.querySelector("#inner-form-7 .nexti-btn").addEventListener("click", function(event){
    document.querySelector("#inner-form-7").style.display = "none";
    document.querySelector("#inner-form-8").style.display = "initial";
    event.preventDefault();
});

document.querySelector("#inner-form-8 .previ-btn").addEventListener("click", function(){
    document.querySelector("#inner-form-8").style.display = "none";
    document.querySelector("#inner-form-7").style.display = "initial";
});

