import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'products',
  pathMatch: 'full'
}, {
  path: 'products',
  component: ProductsPageComponent
},{
  path: 'shopping-cart',
  component: CartPageComponent
}, {
  path: 'orders',
  component: OrdersPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
