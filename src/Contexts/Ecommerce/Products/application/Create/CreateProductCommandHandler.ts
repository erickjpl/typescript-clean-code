import { Command, CommandHandler } from "Contexts/Shared/domain/bus";
import { CreateProductCommand } from "../domain/CreateProductCommand";
import { ProductId } from "Contexts/Ecommerce/Shared/domain/Products/ProductId";
import { ProductCreator } from "./CourseCreator";
import { ProductName, ProductPrice } from "../domain";

export class CreateProductCommandHandler implements CommandHandler<CreateProductCommand> {
  constructor(private productCreator: ProductCreator) { }

  subscribedTo (): Command {
    return CreateProductCommand;
  }

  async handle (command: CreateProductCommand): Promise<void> {
    const id = new ProductId(command.id);
    const name = new ProductName(command.name);
    const price = new ProductPrice(command.price);

    await this.productCreator.run({ id, name, price });
  }
}
