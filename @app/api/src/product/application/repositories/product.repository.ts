import { Repository } from 'src/core/application/repository/repository'
import { Product } from 'src/product/domain/product'
import { ProductId } from 'src/product/domain/value-objects/id'
import { ProductName } from 'src/product/domain/value-objects/name'
import { Optional } from '@mono/types-utils'

export interface ProductRepository extends Repository<ProductId, Product> {
    getByName(name: ProductName): Promise<Optional<Product>>
    getById(id: ProductId): Promise<Optional<Product>>
    getAll(): Promise<Product[]>
}
