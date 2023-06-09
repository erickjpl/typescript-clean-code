import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { ProductNameLengthExceeded } from './ProductNameLengthExceeded';

export class ProductName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters (value: string): void {
    if (value.length > 30) {
      throw new ProductNameLengthExceeded(`The Course Name <${value}> has more than 30 characters`);
    }
  }
}
