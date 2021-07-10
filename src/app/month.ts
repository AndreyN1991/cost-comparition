export class Month {
  date: Date;
  month: string;
  invoice: number;
  invoiceOff: number;
  percent: number;
  color: string;

  constructor(date: string, month: string, invoice: number, percent: number) {
    this.date = new Date(date);
    this.month = month;
    this.invoice = invoice;
    this.invoiceOff = 0;
    this.percent = percent;
    this.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  }
}
