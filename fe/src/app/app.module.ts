import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { ProductsEffects } from './store/effects/products.effects';
import { HeaderComponent } from './components/header/header.component';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderComponent } from './components/order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SuccessMessageDialogComponent } from './components/success-message-dialog/success-message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersPageComponent,
    CartPageComponent,
    ProductsPageComponent,
    ProductComponent,
    HeaderComponent,
    OrderComponent,
    ConfirmationDialogComponent,
    SuccessMessageDialogComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects, ProductsEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    SuccessMessageDialogComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
