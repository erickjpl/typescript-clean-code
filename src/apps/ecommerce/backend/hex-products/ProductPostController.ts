import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import httpStatus from 'http-status';

import { CommandBus } from 'Contexts/Shared/domain/bus';
import { Controller } from '../common/Controller';

import { CreateProductCommand } from 'Contexts/Ecommerce/Products/domain/CreateProductCommand';
import { Product } from 'Contexts/Ecommerce/Products/domain/Request';

@autoInjectable()
export default class ProductPostController implements Controller {
  constructor(private readonly commandBus: CommandBus) { }

  async run (req: Request<Product>, res: Response) {
    await this.createProduct(req);
    res.status(httpStatus.OK).send();
  }

  private async createProduct (req: Request<Product>) {
    const createProductCommand = new CreateProductCommand({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    });

    await this.commandBus.dispatch(createProductCommand);
  }
}
