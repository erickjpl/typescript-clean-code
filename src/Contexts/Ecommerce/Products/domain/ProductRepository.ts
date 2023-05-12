import { Product } from './Product';

export interface ProductRepository {
  save (course: Product): Promise<void>;
  searchAll (): Promise<Array<Product>>;
}
