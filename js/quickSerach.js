var quickSerachApi = "http://localhost:2000/api/v2/user/search";
fetch(quickSerachApi, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })