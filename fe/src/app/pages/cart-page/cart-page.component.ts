import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { orderShoppingCart } from '../../store/actions/product.action';
import { MatDialog } from '@angular/material';
import { SuccessMessageDialogComponent } from '../../components/success-message-dialog/success-message-dialog.component';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'shopie-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  shoppingCart: Product[];

  constructor(private store: Store<fromRoot.State>,
              private orderService: OrderService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    this.store.select(fromRoot.getShoppingCart).subscribe(
      shoppingCart => this.shoppingCart = shoppingCart
    );
  }

  order() {
    this.orderService.orderProducts(this.shoppingCart).subscribe(
      id => {
        this.router.navigate(['orders']);
        this.dialog.open(SuccessMessageDialogComponent, {
          data: {
            id
          }
        });
      }
    );
  }

}
