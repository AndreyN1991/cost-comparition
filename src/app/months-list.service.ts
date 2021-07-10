import { Injectable } from '@angular/core';
import { Month } from './month';
import { data } from '../assets/months.json';

@Injectable({
  providedIn: 'root'
})
export class MonthsListService {

  constructor() { }

  getMonths(): Month[] {
    let maxInvoice = Math.max.apply(Math, data.map(m => m.invoice));
    return data.map(m => new Month(m.date, m.month, m.invoice, Math.round(m.invoice / maxInvoice * 100)));
  }
}
