import { Router } from 'express';
import ProductsListController from '../products/ProductsListController';
import { container } from 'tsyringe';

const path = 'products'

export const register = (router: Router) => {
  const productsListController = container.resolve(ProductsListController);
  router.get(`/${path}/`, productsListController.run);
};