import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ProductId } from '../../Shared/domain/Products/ProductId';
import { ProductCreatedDomainEvent } from './ProductCreatedDomainEvent';
import { ProductPrice } from './ProductPrice';
import { ProductName } from './ProductName';

export class Product extends AggregateRoot {
  readonly id: ProductId;
  readonly name: ProductName;
  readonly price: ProductPrice;

  constructor(id: ProductId, name: ProductName, price: ProductPrice) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static create (id: ProductId, name: ProductName, price: ProductPrice): Product {
    const course = new Product(id, name, price);

    course.record(
      new ProductCreatedDomainEvent({
        aggregateId: course.id.value,
        price: course.price.value,
        name: course.name.value
      })
    );

    return course;
  }
  static fromPrimitives (plainData: { id: string; name: string; price: number }): Product {
    return new Product(
      new ProductId(plainData.id),
      new ProductName(plainData.name),
      new ProductPrice(plainData.price)
    );
  }

  toPrimitives (): any {
    return {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value
    };
  }
}
