import { Component } from '@angular/core';
import { Month } from './month';
import { MonthsListService } from './months-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cost-comparition';
  monthsList: Month[];

  constructor(monthsService: MonthsListService) {
    this.monthsList = monthsService.getMonths();
  }

  ngAfterViewInit() {
    let els = document.getElementsByClassName('scale');
    for(let i = 0; i < els.length; i++) {
      let el = els.item(i);
      if (el?.clientWidth !== el?.scrollWidth) {
        this.monthsList[i].invoiceOff = this.monthsList[i].invoice;
        this.monthsList[i].invoice = 0;
      }
    }
  }
}
