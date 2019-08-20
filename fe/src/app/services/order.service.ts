import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import { orderShoppingCart } from '../store/actions/product.action';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private store: Store<fromRoot.State>) { }

  orderProducts(products: Product[]): Observable<number> {
    const id = uuid.v4();
    this.store.dispatch(orderShoppingCart({id}));
    return of(id);
  }
}
