import { Command } from "Contexts/Shared/domain/bus";
import { Product } from "./Request";

export class CreateProductCommand extends Command {
  id: string;
  name: string;
  price: number;

  constructor({ id, name, price }: Product) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
