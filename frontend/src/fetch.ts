import { InvoicePayment } from "./classes/Invocie";

const counter_sold = document.querySelector(".money-left") as HTMLElement;
//klasa uzyta jako typ
export async function sendBills(payement_operation: InvoicePayment) {
  const response = await fetch("http://localhost:4000/api/bills/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      client: payement_operation.client,
      details: payement_operation.details,
      amount: payement_operation.amount,
      type: payement_operation.type,
      counter: payement_operation.counter,
    }),
  });
}

export async function getBills() {
  const response = await fetch("http://localhost:4000/api/bills/");
  const data: InvoicePayment[] = await response.json();
  console.log(data);
  if (data) {
    const last_data = data[data.length - 1];
    console.log(last_data)
    const last_data_display = last_data["counter"];
    console.log(last_data_display)
    counter_sold.innerText = last_data_display.toString();
    displayData(data);
  } else {
    alert("nothing yet ");
  }
}

export function displayData(data: InvoicePayment[]) {
  const container_operation = document.querySelector(
    ".item-list"
  ) as HTMLElement;
  for (var dat of data) {
    const article = document.createElement("article");
    article.innerHTML = `<h1>${dat.client}</h1>`;
    const amount = document.createElement("p");
    amount.innerHTML = `<p>${dat.amount}</p>`;
    article.appendChild(amount);
    const details = document.createElement("p");
    details.innerHTML = `<p>${dat.details}</p>`;
    article.appendChild(details);
    container_operation.appendChild(article);
    if (dat.type === "invoice") {
      article.classList.add("plus");
    } else {
      article.classList.add("amount_payed");
    }
  }
}
