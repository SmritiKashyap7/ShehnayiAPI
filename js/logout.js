const activitylogOutBtn = document.querySelectorAll("#userlogout");
activitylogOutBtn.forEach(function (elem) {
  elem.addEventListener("click", () => {
    fetch("https://server.shehnayi.in/api/v2/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.token) {
          window.location.href = "./index.html";
          localStorage.removeItem("token");
          localStorage.clear();
        }
      })
      .catch((err) => {
        alert(err);
      });
  });
});
