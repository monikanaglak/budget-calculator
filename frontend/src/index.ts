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

const data: any = new Date();
let month: string = months[data.getMonth()];
let day: any = data.getDate();
//in the first day of the month, clean everything in the database? 
let year: any = data.getFullYear();
//function start as soon the page is load, window onload? or like this is ok?
getBills();
/*****************************how many days are in this month$+**************************************/
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
  let bank_value:any= counter_sold.textContent;
  if(type.value === "payment"){
    //wartosc wyplaty
    let reduce_value = parseInt(amount.value);
    let roznica:any = bank_value-reduce_value;
    counter_sold.innerText = roznica;
    const payement_operation = new InvoicePayment(client.value, details.value, parseInt(amount.value), type.value,roznica)
    /*payment_operation(payement_operation);*/
    displayData([payement_operation])
    sendBills(payement_operation)
  }else{
    //wartosc wplaty
    let increase_value = parseInt(amount.value);
    console.log("to jest bank " +bank_value)
    //wartosc obecna konta
    let plus:any= counter_sold.textContent;
    console.log(plus)
    let counter_upadte:number = parseInt(plus) + increase_value
    const money_operation = new InvoicePayment(client.value, details.value, parseInt(amount.value),type.value as "invoice", counter_upadte);
    sendBills(money_operation)
    invoice_operation(money_operation)
    counter_sold.innerText = counter_upadte.toString();
  }
});
