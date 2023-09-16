import { AggregateRoot } from 'src/core/domain/aggregates/aggregate.root'
import { ProductId } from './value-objects/id'
import { ProductName } from './value-objects/name'

export class Product extends AggregateRoot<ProductId> {
    constructor(id: ProductId, private _name: ProductName) {
        super(id)
    }

    get name() {
        return this._name
    }

    validateState(): void {
        if (!this.name) throw new Error('Invalid product')
    }
}
