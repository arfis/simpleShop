import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from '../actions/product.action';
import { Product } from '../../model/product';
import { Order } from '../../model/order';

export interface State {
  areProductsLoading: boolean;
  products: Product[];
  orders: Order[];
  shoppingCart: Product[];
}

export const initialState: State = {
  areProductsLoading: false,
  products: [{
    _id: '1',
    count: 0,
    price: 2100,
    name: 'Sony Bravia',
    picture: 'https://cdn.alza.cz/ImgW.ashx?fd=f3&cd=WS1018b1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet semper nibh. In eget accumsan lacus, sit amet laoreet nulla. Quisque quis nisi at mi imperdiet tristique eget id augue. Duis iaculis congue velit, id posuere dui dictum sed. Donec risus augue, porttitor nec ex vehicula, malesuada efficitur quam. Sed ligula massa, consequat at aliquet at, semper at felis. Pellentesque elit magna, venenatis et commodo ut, ultrices a est. Etiam suscipit non sem id congue. Donec risus quam, scelerisque non congue et, tempor ac est. Sed non mattis ligula. Pellentesque luctus elementum aliquam. Donec placerat tortor a est euismod tincidunt vitae ac erat. Vivamus ultricies nunc nec nunc posuere, vitae viverra odio suscipit. Aenean at quam quis diam porta molestie ac quis magna. Maecenas egestas felis quis mauris malesuada ornare. Praesent pretium leo at quam volutpat consectetur.'
  },
    {
      _id: '2',
      count: 0,
      price: 2300,
      name: 'Macbook 12',
      picture: 'https://cdn.alza.sk/ImgW.ashx?fd=f4&cd=NL245a5b1&i=1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet semper nibh. In eget accumsan lacus, sit amet laoreet nulla. Quisque quis nisi at mi imperdiet tristique eget id augue. Duis iaculis congue velit, id posuere dui dictum sed. Donec risus augue, porttitor nec ex vehicula, malesuada efficitur quam. Sed ligula massa, consequat at aliquet at, semper at felis. Pellentesque elit magna, venenatis et commodo ut, ultrices a est. Etiam suscipit non sem id congue. Donec risus quam, scelerisque non congue et, tempor ac est. Sed non mattis ligula. Pellentesque luctus elementum aliquam. Donec placerat tortor a est euismod tincidunt vitae ac erat. Vivamus ultricies nunc nec nunc posuere, vitae viverra odio suscipit. Aenean at quam quis diam porta molestie ac quis magna. Maecenas egestas felis quis mauris malesuada ornare. Praesent pretium leo at quam volutpat consectetur.'
    },
    {
      _id: '3',
      count: 0,
      price: 900,
      name: 'LG 43',
      picture: 'https://cdn.alza.sk/ImgW.ashx?fd=f4&cd=WK060a1t2d&i=1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet semper nibh. In eget accumsan lacus, sit amet laoreet nulla. Quisque quis nisi at mi imperdiet tristique eget id augue. Duis iaculis congue velit, id posuere dui dictum sed. Donec risus augue, porttitor nec ex vehicula, malesuada efficitur quam. Sed ligula massa, consequat at aliquet at, semper at felis. Pellentesque elit magna, venenatis et commodo ut, ultrices a est. Etiam suscipit non sem id congue. Donec risus quam, scelerisque non congue et, tempor ac est. Sed non mattis ligula. Pellentesque luctus elementum aliquam. Donec placerat tortor a est euismod tincidunt vitae ac erat. Vivamus ultricies nunc nec nunc posuere, vitae viverra odio suscipit. Aenean at quam quis diam porta molestie ac quis magna. Maecenas egestas felis quis mauris malesuada ornare. Praesent pretium leo at quam volutpat consectetur.'
    },
    {
      _id: '4',
      count: 0,
      price: 1400,
      name: 'Philips',
      picture: 'https://cdn.alza.sk/ImgW.ashx?fd=f4&cd=WC130c1f&i=1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet semper nibh. In eget accumsan lacus, sit amet laoreet nulla. Quisque quis nisi at mi imperdiet tristique eget id augue. Duis iaculis congue velit, id posuere dui dictum sed. Donec risus augue, porttitor nec ex vehicula, malesuada efficitur quam. Sed ligula massa, consequat at aliquet at, semper at felis. Pellentesque elit magna, venenatis et commodo ut, ultrices a est. Etiam suscipit non sem id congue. Donec risus quam, scelerisque non congue et, tempor ac est. Sed non mattis ligula. Pellentesque luctus elementum aliquam. Donec placerat tortor a est euismod tincidunt vitae ac erat. Vivamus ultricies nunc nec nunc posuere, vitae viverra odio suscipit. Aenean at quam quis diam porta molestie ac quis magna. Maecenas egestas felis quis mauris malesuada ornare. Praesent pretium leo at quam volutpat consectetur.'
    }
  ],
  orders: [],
  shoppingCart: []
};

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadOrders, state => ({...state})),
  on(ProductsActions.loadOrdersSuccess, (state, {orders}) => ({...state, orders})),
  on(ProductsActions.loadOrdersFailure, (state, {error}) => ({...state})),
  on(ProductsActions.loadProducts, (state) => ({...state, areProductsLoading: true})),
  on(ProductsActions.loadProductsSuccess, (state, {products}) => ({...state, areProductsLoading: false, products})),
  on(ProductsActions.loadProductsFailure, (state, {error}) => ({...state, areProductsLoading: false})),
  on(ProductsActions.addProductToCart, (state, {product}) => {
    const itemInCart = state.shoppingCart.find(actProduct => actProduct._id === product._id);

    if (itemInCart) {
      return ({
        ...state, shoppingCart: [
          ...state.shoppingCart.filter(actProduct => actProduct._id !== product._id),
          {...itemInCart, count: itemInCart.count + 1}]
      });
    } else {
      return ({...state, shoppingCart: [...state.shoppingCart, {...product, count: 1}]});
    }
  }),
  on(ProductsActions.removeProductFromCart, (state, {productId}) => {
    return ({
      ...state,
      shoppingCart: [...state.shoppingCart.filter(product => product._id !== productId)]
    });
  }),
  on(ProductsActions.orderShoppingCart, (state, {id}) => ({
    ...state,
    orders: [
      ...state.orders,
      {
        _id: id,
        products: state.shoppingCart
      }],
    shoppingCart: []
  })),
  on(ProductsActions.removeOrder, (state, {orderId}) => {
    return ({
      ...state,
      orders: [...state.orders.filter(order => order._id !== orderId)]
    });
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}

export const getOrders = (state: State) => state.orders;
export const getProducts = (state: State) => state.products;
export const getShoppingCart = (state: State) => state.shoppingCart;
