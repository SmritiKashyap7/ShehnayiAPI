var logoutbtnuserpage = document.querySelector("#userpagelogout");
logoutbtnuserpage.addEventListener("click", function () {
  localStorage.removeItem("token");
  localStorage.clear();
  window.location.href = "index.html";
});
