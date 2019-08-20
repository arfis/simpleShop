import { Component, OnInit } from '@angular/core';

import * as fromRoot from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Product } from '../../model/product';

@Component({
  selector: 'shopie-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getProducts).subscribe(
      products => this.products = products
    )
  }

}
