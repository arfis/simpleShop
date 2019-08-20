import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shopie-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders: Order[];
  filteredOrders: Order[];
  orderSearch: FormControl = new FormControl();

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getOrders).subscribe(
      orders => {
        this.orders = orders;
        this.orderSearch.setValue('');
        this.filteredOrders = this.orders;
      }
    )

    this.orderSearch.valueChanges.subscribe(
      value => {
        if (value.length) {
          this.filteredOrders = this.orders.filter(order => order._id.indexOf(value) > -1);
        } else {
          this.filteredOrders = this.orders;
        }
      }
    )
  }

}
