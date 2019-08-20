import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { removeOrder } from '../../store/actions/product.action';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'shopie-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;

  constructor(private store: Store<fromRoot.State>,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  removeOrder() {
    this.dialog.open(ConfirmationDialogComponent)
      .afterClosed()
      .subscribe(
      result => {
        if (result) {
          this.store.dispatch(removeOrder({orderId: this.order._id}));
        }
      }
    )
  }
}
