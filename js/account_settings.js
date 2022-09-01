const firstName = document.querySelector(".user-first-name");
const lastName = document.querySelector(".user-last-name");
const phoneNumber = document.querySelector(".phone-number");
const birthDay = document.querySelector(".day");
const birthMonth = document.querySelector(".month");
const birthYear = document.querySelector(".year");

fetch("http://localhost:2000/api/v2/home", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((res) => {
    return res;
  })
  .then((data) => {
    if (data.token == localStorage.getItem("token")) {
      firstName.placeholder = data.firstname;
      lastName.placeholder = data.lastname;
      phoneNumber.placeholder = data.phone;
      birthDay.placeholder = data.birthday.day;
      birthMonth.placeholder = data.birthday.month;
      birthYear.placeholder = data.birthday.year;
    }
  })
  .catch((err) => {
    console.log(err);
  });

const submitBtn = document.querySelector(".submit-details");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:2000/api/v2/user/register/update", {
    method: "PATCH",
    body: JSON.stringify({
      firstname: firstName.value,
      lastname: lastName.value,
      phone: phoneNumber.value,
      birthday: {
        day: birthDay.value,
        month: birthMonth.value,
        year: birthYear.value,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const changePass = document.querySelector(".change-pass");
const newPass = document.querySelector(".new-pass");
const oldPass = document.querySelector(".old-pass");
const retypePass = document.querySelector(".retype-pass");

changePass.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:2000/api/v2/user/changepass", {
    method: "PATCH",
    body: JSON.stringify({
      oldpassword: oldPass.value,
      password: newPass.value,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      alert(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
