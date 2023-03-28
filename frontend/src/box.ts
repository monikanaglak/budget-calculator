import { appendFile } from "fs";
import { InvoicePayment } from "./classes/Invocie";

export function invoice_operation(x:InvoicePayment){
   const container_operation = document.querySelector(".item-list") as HTMLElement;
   const article = document.createElement('article');
   article.classList.add("invoice-article");
   article.innerHTML = `<h1>${x.client}</h1>`;
   const details = document.createElement('p');
   details.classList.add('monika');
   details.innerHTML=`<p>${x.details}</p>`;
   article.appendChild(details)
   const amount = document.createElement('p');
   amount.classList.add('amount');
   amount.innerHTML=`<p>${x.amount}</p>`;
   article.appendChild(amount);
   container_operation.appendChild(article)
   
}
export function payment_operation(x:InvoicePayment){
   const container_operation = document.querySelector(".item-list") as HTMLElement;
   const article = document.createElement('article');
   article.classList.add("payment-article");
   article.innerHTML = `<h1>${x.client}</h1>`;
   const amount_payed = document.createElement('p');
   amount_payed.classList.add('amount_payed');
   amount_payed.innerHTML=`<p>${x.amount}</p>`;
   article.appendChild(amount_payed)
   container_operation.appendChild(article)
}