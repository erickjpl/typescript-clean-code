import { injectable } from 'tsyringe';
import ProductRepository from './ProductRepository';

@injectable()
export default class ProductService {
  repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async getProducts () {
    return await this.repository.getProducts();
  }
}