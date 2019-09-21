import { Component, OnInit, Input } from '@angular/core';
import { Purchase } from '../models/purchase';

@Component({
  selector: 'purchases-page',
  templateUrl: './purchases-page.component.html',
  styleUrls: ['./purchases-page.component.css']
})
export class PurchasesPageComponent implements OnInit {

  @Input()
  set message(message: Array<Purchase>) {
    this.purchases = message;
  }

  public purchases: Array<Purchase> = [];

  constructor() { }

  ngOnInit() {
    if(!this.purchases[0]) {
      this.purchases.push({products: 'product 4,product 5,product 6', date: '21-09-2019 05:32:29 PM', price: 2500});
      this.purchases.push({products: 'product 1', date: '21-09-2019 05:32:17 PM', price: 50});
      this.purchases.push({products: 'product 1,product 2,product 4	', date: '21-09-2019 05:32:10 PM', price: 700});
    }
  }

}
