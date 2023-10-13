import { Repository } from 'src/core/application/repository/repository'
import { Product } from 'src/product/domain/product'
import { ProductId } from 'src/product/domain/value-objects/id'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductRepository extends Repository<ProductId, Product> {}
