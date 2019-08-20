import { Product } from './product';

export interface Order {
  _id: string;
  products: Product[];
}
