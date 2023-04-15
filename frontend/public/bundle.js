/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePayment": () => (/* binding */ InvoicePayment)
/* harmony export */ });
//making class for making blueprint for each incom or money spend
class InvoicePayment {
    constructor(client, details, amount, 
    // union type
    /*public type: "invoice" | "payment" = "invoice"*/
    type, counter) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.type = type;
        this.counter = counter;
    }
    format() {
        return `${this.client} ${this.amount}  ${this.details}`;
    }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayData": () => (/* binding */ displayData),
/* harmony export */   "getBills": () => (/* binding */ getBills),
/* harmony export */   "sendBills": () => (/* binding */ sendBills)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const counter_sold = document.querySelector(".money-left");
//klasa uzyta jako typ
function sendBills(payement_operation) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:4000/api/bills/", {
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
    });
}
function getBills() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:4000/api/bills/");
        const data = yield response.json();
        console.log(data);
        if (data) {
            const last_data = data[data.length - 1];
            console.log(last_data);
            const last_data_display = last_data["counter"];
            console.log(last_data_display);
            counter_sold.innerText = last_data_display.toString();
            displayData(data);
        }
        else {
            alert("nothing yet ");
        }
    });
}
function displayData(data) {
    const container_operation = document.querySelector(".item-list");
    for (var dat of data) {
        const article = document.createElement("article");
        article.classList.add("financial-operation");
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
        }
        else {
            article.classList.add("amount_payed");
        }
    }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Invocie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


//getting DOM Elements
const days_left_to_go = document.querySelector(".days-left");
const form = document.querySelector(".new-item-form");
const data_dom = document.querySelector(".actual-date");
const type = document.querySelector("#type");
const client = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const place = document.querySelector(".item-list");
const counter_sold = document.querySelector(".money-left");
const months = [
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
const thirty_one = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
];
const thirty = ["April", "June", "September", "November"];
const data = new Date();
let month = months[data.getMonth()];
let day = data.getDate();
//in the first day of the month, clean everything in the database? 
let year = data.getFullYear();
(0,_fetch__WEBPACK_IMPORTED_MODULE_1__.getBills)();
/*****************************how many days are in this month**************************************/
if (thirty_one.find((x) => x === month)) {
    const days_left = 31 - day;
    days_left_to_go.innerHTML = days_left.toString();
}
else if (thirty.find((x) => x === month)) {
    const days_left_thirty = 30 - day;
    days_left_to_go.innerHTML = days_left_thirty.toString();
}
else {
    const days_left_twenty = 28 - day;
    days_left_to_go.innerHTML = days_left_twenty.toString();
}
data_dom.innerHTML = day + " " + month + " " + year;
/*********************************formulaire********************************************************/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //saldo before any operation
    let bank_value = parseInt(counter_sold.innerHTML);
    if (type.value === "payment") {
        //value of the payment
        let reduce_value = parseInt(amount.value);
        //new bank value
        let bank_value_update = bank_value - reduce_value;
        //push to DOM new bank value
        counter_sold.innerText = bank_value_update.toString();
        const payement_operation = new _classes_Invocie__WEBPACK_IMPORTED_MODULE_0__.InvoicePayment(client.value, details.value, parseInt(amount.value), type.value, bank_value_update);
        (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.displayData)([payement_operation]);
        (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.sendBills)(payement_operation);
    }
    else {
        //value of the income
        let increase_value = parseInt(amount.value);
        //wartosc obecna konta
        let plus = counter_sold.textContent;
        console.log(bank_value);
        /*let counter_upadte:number = parseInt(plus) + increase_value*/
        let counter_upadte = bank_value + increase_value;
        const money_operation = new _classes_Invocie__WEBPACK_IMPORTED_MODULE_0__.InvoicePayment(client.value, details.value, parseInt(amount.value), type.value, counter_upadte);
        (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.sendBills)(money_operation);
        (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.displayData)([money_operation]);
        counter_sold.innerText = counter_upadte.toString();
    }
});

})();

/******/ })()
;