//getting DOM Elements
const days_left_to_go = document.querySelector(".days-left") as HTMLElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const data_dom = document.querySelector(".actual-date") as HTMLElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const months:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const thirty_one:string[] = ["January", "March","May","July","August","October","December"];
const thirty:string[] = ["April", "June","September","November"];

const data:any = new Date();
let month:string = months[data.getMonth()];
let day:any = data.getDate();
let year:any = data.getFullYear();

 //getting know how many days in this month
if(thirty_one.find((x)=>x === month)){
const days_left:number = 31-day;
console.log(days_left)
days_left_to_go.innerHTML = days_left.toString();
}else{
    console.log(30)
}

data_dom.innerHTML = day + " " +  month + " " + year;




form.addEventListener('submit',(e:Event)=>{
e.preventDefault();
console.log(details.value)
console.log(amount.value)
}
)
