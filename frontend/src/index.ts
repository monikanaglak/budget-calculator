import { InvoicePayment } from "./classes/Invocie";
import { invoice_operation,payment_operation } from "./box";
import { sendBills,getBills,displayData } from "./fetch";

//getting DOM Elements
const days_left_to_go = document.querySelector(".days-left") as HTMLElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const data_dom = document.querySelector(".actual-date") as HTMLElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const client = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const place = document.querySelector(".item-list") as HTMLElement;
const counter_sold = document.querySelector(".money-left") as HTMLElement;

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const thirty_one: string[] = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
const thirty: string[] = ["April", "June", "September", "November"];

const data = new Date();
let month: string = months[data.getMonth()];
let day = data.getDate();
//in the first day of the month, clean everything in the database? 
let year = data.getFullYear();
getBills();
/*****************************how many days are in this month**************************************/
if (thirty_one.find((x) => x === month)) {
  const days_left: number = 31 - day;
  days_left_to_go.innerHTML = days_left.toString();
} else if (thirty.find((x) => x === month)) {
  const days_left_thirty: number = 30 - day;
  days_left_to_go.innerHTML = days_left_thirty.toString();
}else{
    const days_left_twenty:number = 28-day;
    days_left_to_go.innerHTML = days_left_twenty.toString();
}
data_dom.innerHTML = day + " " + month + " " + year;
/*********************************formulaire********************************************************/
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //saldo before any operation
  let bank_value:number= parseInt(counter_sold.innerHTML);
  if(type.value === "payment"){
    //value of the payment
    let reduce_value:number= parseInt(amount.value);
    //new bank value
    let bank_value_update:number = bank_value-reduce_value;
    //push to DOM new bank value
    counter_sold.innerText = bank_value_update.toString();
    const payement_operation = new InvoicePayment(client.value, details.value, parseInt(amount.value), type.value,bank_value_update)
    displayData([payement_operation])
    sendBills(payement_operation)
  }else{
    //value of the income
    let increase_value = parseInt(amount.value);
    //wartosc obecna konta
    let plus:any= counter_sold.textContent;
    console.log(bank_value)
    /*let counter_upadte:number = parseInt(plus) + increase_value*/
    let counter_upadte:number = bank_value + increase_value;
    const money_operation = new InvoicePayment(client.value, details.value, parseInt(amount.value),type.value as "invoice", counter_upadte);
    sendBills(money_operation)
    displayData([money_operation])
    counter_sold.innerText = counter_upadte.toString();
  }
});
