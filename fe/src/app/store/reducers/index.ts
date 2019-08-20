import { ActionReducer, ActionReducerMap, combineReducers, compose, createSelector, MetaReducer } from '@ngrx/store';

import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromProducts from './products.reducer';

export interface State {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer
};

export function settingSessionStorageConfig(
  sessionReducer: ActionReducer<State>
) {
  return localStorageSync({
    keys: [],
    rehydrate: true,
    storage: sessionStorage
  })(sessionReducer);
}

export function settingLocalStorageConfig(
  sessionReducer: ActionReducer<State>
) {
  return localStorageSync({
    keys: ['products'],
    rehydrate: true,
    storage: localStorage
  })(sessionReducer);
}

const developmentReducer: any = compose(
  storeFreeze,
  settingSessionStorageConfig,
  settingLocalStorageConfig,
  combineReducers
)(reducers);

const productionReducer: ActionReducer<State> = compose(
  settingSessionStorageConfig,
  settingLocalStorageConfig,
  combineReducers
)(reducers);

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze, settingSessionStorageConfig, settingLocalStorageConfig]
  : [settingSessionStorageConfig, settingLocalStorageConfig];

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getProductsState = (state: State) => state.products;

export const getProducts = createSelector(
  getProductsState,
  fromProducts.getProducts
);

export const getOrders = createSelector(
  getProductsState,
  fromProducts.getOrders
);

export const getShoppingCart = createSelector(
  getProductsState,
  fromProducts.getShoppingCart
);
