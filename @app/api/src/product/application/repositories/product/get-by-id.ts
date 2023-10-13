import './product.repository'
import { Optional } from '@mono/types-utils'
import { Product } from 'src/product/domain/product'
import { ProductId } from 'src/product/domain/value-objects/id'

declare module './product.repository' {
    interface ProductRepository {
        getById(id: ProductId): Promise<Optional<Product>>
    }
}
