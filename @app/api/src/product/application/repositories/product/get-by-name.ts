import { ProductName } from 'src/product/domain/value-objects/name'
import './product.repository'
import { Optional } from '@mono/types-utils'
import { Product } from 'src/product/domain/product'

declare module './product.repository' {
    interface ProductRepository {
        getByName(name: ProductName): Promise<Optional<Product>>
    }
}
