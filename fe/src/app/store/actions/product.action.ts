import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/product';
import { Order } from '../../model/order';

export const loadProducts = createAction(
  '[Products] Load products');

export const loadProductsSuccess = createAction(
  '[Products] Load products success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load products success',
  props<{ error: any }>()
);

export const loadOrders = createAction(
  '[Products] Load orders');

export const loadOrdersSuccess = createAction(
  '[Products] Load orders success',
  props<{ orders: Order[] }>()
);

export const loadOrdersFailure = createAction(
  '[Products] Load orders failure',
  props<{ error: any }>()
);

export const addProductToCart = createAction(
  '[Products] Add product',
  props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
  '[Products] Remove product',
  props<{ productId: string }>()
);

export const orderShoppingCart = createAction(
  '[Products] Order products',
  props<{id: number}>()
);

export const removeOrder = createAction(
  '[Products] Remove order',
  props<{ orderId: string }>()
);
