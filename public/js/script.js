const state_btn = document.getElementById('inputState');
let submit_btn = document.querySelector('#submit-btn');
const firstname = document.getElementsByName('firstname');
const lastname = document.getElementsByName('lastname');
const email = document.getElementsByName('email');
const password = document.getElementsByName('password');
const address = document.getElementsByName('address');
const phoneno = document.getElementsByName('phoneno');
const city = document.getElementsByName('city');
const stateinput = document.getElementsByName('state ');
const zipcode = document.getElementsByName('zipcode');
const termsandconditions = document.getElementsByName('termsandconditions');
const confirmpassword = document.getElementsByName('confirmpassword');
let state = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]


let counter = 1;
state.forEach((val) => {
    var option = document.createElement("option");
    option.text = val;
    state_btn.add(option, state_btn[counter]);
    counter++
})