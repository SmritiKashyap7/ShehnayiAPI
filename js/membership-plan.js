function add() {
  var element = document.getElementById("first-container");
  element.classList.add("container1");
  var element = document.getElementById("second-container");
  element.classList.remove("container1");
}

function remove() {
  var element = document.getElementById("second-container");
  element.classList.add("container1");
  var element = document.getElementById("first-container");
  element.classList.remove("container1");
}

function add1() {
  var element = document.getElementById("third-container");
  element.classList.add("container1");
  var element = document.getElementById("second-container");
  element.classList.remove("container1");
}

function remove1() {
  var element = document.getElementById("second-container");
  element.classList.add("container1");
  var element = document.getElementById("third-container");
  element.classList.remove("container1");
}

window.onload = function () {
  document.getElementById("first-container").onmouseover = add;
  document.getElementById("first-container").onmouseleave = remove;
  document.getElementById("third-container").onmouseover = add1;
  document.getElementById("third-container").onmouseleave = remove1;
};

