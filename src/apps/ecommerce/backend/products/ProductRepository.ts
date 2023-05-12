import { Product } from "./Product";

export default class ProductRepository {
  products = [
    { id: 1, name: 'The Pragmatic Programmer' },
    { id: 2, name: 'Poems that Solve Puzzles' },
  ];

  async getProducts (): Promise<Product[]> {
    return this.products;
  }
}