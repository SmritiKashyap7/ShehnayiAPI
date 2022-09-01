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
