import { DomainEvent } from "Contexts/Shared/domain/bus";

type CreateProductDomainEventAttributes = {
  readonly price: number;
  readonly name: string;
};

export class ProductCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'product.created';

  readonly price: number;
  readonly name: string;

  constructor({
    aggregateId,
    name,
    price,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    price: number;
    name: string;
    occurredOn?: Date;
  }) {
    super({ eventName: ProductCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.price = price;
    this.name = name;
  }

  toPrimitives (): CreateProductDomainEventAttributes {
    const { name, price } = this;
    return {
      name,
      price
    };
  }

  static fromPrimitives (params: {
    aggregateId: string;
    attributes: CreateProductDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new ProductCreatedDomainEvent({
      aggregateId,
      price: attributes.price,
      name: attributes.name,
      eventId,
      occurredOn
    });
  }
}
