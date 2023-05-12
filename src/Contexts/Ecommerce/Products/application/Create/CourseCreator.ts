import { EventBus } from "Contexts/Shared/domain/bus";
import { ProductId } from "Contexts/Ecommerce/Shared/domain/Products/ProductId";
import { Product, ProductName, ProductPrice, ProductRepository } from "../../domain";

export class ProductCreator {
  constructor(private repository: ProductRepository, private eventBus: EventBus) { }

  async run (params: { id: ProductId; name: ProductName; price: ProductPrice }): Promise<void> {
    const product = Product.create(params.id, params.name, params.price);
    await this.repository.save(product);
    await this.eventBus.publish(product.pullDomainEvents());
  }
}
