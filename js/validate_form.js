// function validateForm()
// {
//   var fields = ["name, phone", "compname", "mail", "compphone", "adres", "zip"]

//   var i, l = fields.length;
//   var fieldname;
//   for (i = 0; i < l; i++) {
//     fieldname = fields[i];
//     if (document.forms["register"][fieldname].value === "") {
//       alert(fieldname + " can not be empty");
//       return false;
//     }
//   }
//   return true;
// }


// Register form-1
var profilefor = document.querySelector("#profilefor");
var firstname = document.querySelector("#firstname");
var lastname = document.querySelector("#lastname");
var religion = document.querySelector("#religion");
var community = document.querySelector("#community");

function validateform1(){
    if(profilefor.value == ""){
        alert("Please select profile for");
        return false;
    }
    else if(firstname.value == "" || firstname.value == null){
        alert("Please enter your first name");
        return false;
    }
    else if(lastname.value == "" || lastname.value == null){
        alert("Please enter your last name");
        return false;
    }
    else if(religion.value == ""){
        alert("Please enter your religion");
        return false;
    }
    else if(community.value == ""){
        alert("Please enter your community");
        return false;
    }
    else {
        // document.querySelector("#form-1 #submit-btn").addEventListener("click", function (event) {
        document.querySelector("#form-1").style.display = "none";
        document.querySelector("#form-2").style.display = "initial";
        // event.preventDefault();
        return true;
    }
}

// Register form-2 
var useremail = document.querySelector("#email");
var phoneno = document.querySelector("#phonenumber");
var dobdate = document.querySelector("#dob-date");
var dobmonth = document.querySelector("#dob-month");
var dobyear = document.querySelector("#dob-year");
var gender = document.querySelector("#gender");
var password = document.querySelector("#password");
var city = document.querySelector("#city");
var state = document.querySelector("#state");
var country = document.querySelector("#country");


function validateform2(){
    if(useremail.value == "" || useremail.value == null){
        alert("Please enter email ");
        return false;
    }
    else if(phoneno.value == "" || phoneno.value == null){
        alert("Please enter your phone");
        return false;
    }
    else if(dobdate.value == "" || dobdate.value == null){
        alert("Please enter date of birth");
        return false;
    }
    else if(dobmonth.value == "" || dobdate.value == null){
        alert("Please enter date of birth");
        return false;
    }
    else if(dobyear.value == "" || dobyear.value == null){
        alert("Please enter date of birth");
        return false;
    }
    else if(gender.value == ""){
        alert("Please enter your gender");
        return false;
    }
    else if(password.value == "" || password.value == null){
        alert("Please enter your password");
        return false;
    }
    else if(city.value == ""){
        alert("Please enter your city");
        return false;
    }
    else if(state.value == ""){
        alert("Please enter your state");
        return false;
    }
    else if(country.value == ""){
        alert("Please enter your country");
        return false;
    }

    else {
        // document.querySelector("#form-1 #submit-btn").addEventListener("click", function (event) {
        document.querySelector("#form-2").style.display = "none";
        document.querySelector("#form-3").style.display = "initial";
        // event.preventDefault();
        return true;
    }
}

// Register form-3
// var usercity = document.querySelector("#user-city");
// var pstate = document.querySelector("#user-state");
// var partnercountry = document.querySelector("#user-country");
// var subcommunity = document.querySelector("#subcommunity");
// var maritalStatus = document.querySelector("#maritalstatus");
// var manglik = document.querySelector("#manglik");
// var height = document.querySelector("#partner-country");
// var weight = document.querySelector("#partner-country");
// var  = document.querySelector("#partner-country");




