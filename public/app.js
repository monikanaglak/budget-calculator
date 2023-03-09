"use strict";
//getting DOM Elements
const days_left_to_go = document.querySelector(".days-left");
const form = document.querySelector(".new-item-form");
const data_dom = document.querySelector(".actual-date");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const thirty_one = ["January", "March", "May", "July", "August", "October", "December"];
const thirty = ["April", "June", "September", "November"];
const data = new Date();
let month = months[data.getMonth()];
let day = data.getDate();
let year = data.getFullYear();
//getting know how many days in this month
if (thirty_one.find((x) => x === month)) {
    const days_left = 31 - day;
    console.log(days_left);
    days_left_to_go.innerHTML = days_left.toString();
}
else {
    console.log(30);
}
data_dom.innerHTML = day + " " + month + " " + year;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(details.value);
    console.log(amount.value);
});
