import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import httpStatus from 'http-status';

import { Controller } from '../common/Controller';
import ProductService from './ProductService';

@autoInjectable()
export default class ProductsListController implements Controller {
  service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  async run (req: Request, res: Response): Promise<void> {
    const products = await this.service.getProducts();

    res.status(httpStatus.OK).send(products);
  }
}
