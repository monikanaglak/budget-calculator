//making class for making blueprint for each incom or money spend
export class InvoicePayment {
  constructor(
    public client: string,
    public details: string,
    public amount: number,
    // union type
    /*public type: "invoice" | "payment" = "invoice"*/
    public type:string,
    public counter: number

  ) {}
  format() {
    return `${this.client} ${this.amount}  ${this.details}`;
  }
}
