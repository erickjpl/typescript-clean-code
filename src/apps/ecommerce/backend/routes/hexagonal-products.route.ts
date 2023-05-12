import { Router, Request } from 'express';
import { container } from 'tsyringe';

import ProductPostController from '../hex-products/ProductPostController';
import { Product } from 'Contexts/Ecommerce/Products/domain/Request';

const path = 'hexagonal-products'

export const register = (router: Router) => {
  const productPostController = container.resolve(ProductPostController);

  router.post(`/${path}/`, (req: Request<Product>, res) => productPostController.run(req, res));
};
