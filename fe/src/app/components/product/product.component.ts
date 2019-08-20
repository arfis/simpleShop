import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { addProductToCart, removeProductFromCart } from '../../store/actions/product.action';

@Component({
  selector: 'shopie-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() isInCart: boolean;
  @Input() isOrdered: boolean;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  addToCart() {
    this.store.dispatch(addProductToCart({product: this.product}));
  }

  removeFromCart() {
    this.store.dispatch(removeProductFromCart({productId: this.product._id}));
  }
}
