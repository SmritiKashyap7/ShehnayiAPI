// Matches section
var  button = document.querySelector('#matches');
var div =  document.querySelector("#matches-dropdown");

button.addEventListener('mouseover' , function(e){
  button.style.cursor = "pointer";
  div.style.display = "initial";
})
button.addEventListener('mouseout' ,function(e){
  div.style.display = 'none';
})
div.addEventListener('mouseover',function(e){
  div.style.display = "initial";
})
div.addEventListener('mouseout',function(e){
  div.style.display = "none";
})



// Notification popup
var notife = document.querySelector("#notife"); 
var popupnot = document.querySelector("#not-popup");

notife.addEventListener('mouseover' , function(e){
  notife.style.cursor = "pointer";
  popupnot.style.display = "initial";
})
notife.addEventListener('mouseout' ,function(e){
  popupnot.style.display = 'none';
})
popupnot.addEventListener('mouseover',function(e){
  popupnot.style.display = "initial";
})
popupnot.addEventListener('mouseout',function(e){
  popupnot.style.display = "none";
})


//search section 
var searche = document.querySelector("#searche"); 
var popupsrch = document.querySelector("#nav-srch");

searche.addEventListener('mouseover' , function(e){
  searche.style.cursor = "pointer"
  popupsrch.style.display = "initial"
} )
searche.addEventListener('mouseout' ,function(e){
  popupsrch.style.display = 'none'
})
popupsrch.addEventListener('mouseover',function(e){
  popupsrch.style.display = "initial"
})
popupsrch.addEventListener('mouseout',function(e){
  popupsrch.style.display = "none"
})


// Settings popup
var settinge = document.querySelector("#settinge"); 
var popupsetting = document.querySelector(".setting-popup");

settinge.addEventListener('mouseover' , function(e){
  settinge.style.cursor = "pointer"
  popupsetting.style.display = "initial"
} )
settinge.addEventListener('mouseout' ,function(e){
  popupsetting.style.display = 'none';
})
popupsetting.addEventListener('mouseover',function(e){
  popupsetting.style.display = "initial";
})
popupsetting.addEventListener('mouseout',function(e){
  popupsetting.style.display = "none";
})
