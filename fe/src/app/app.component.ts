import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import { Order } from './model/order';
import { Product } from './model/product';

@Component({
  selector: 'shopie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simpleShop';
  shoppingCart: Product[];
  totalCount: number;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getShoppingCart).subscribe(
      shoppingCart => {
        this.totalCount = 0;
        this.shoppingCart = shoppingCart;
        shoppingCart.map(product => this.totalCount += product.count);
      }
    );
  }
}
