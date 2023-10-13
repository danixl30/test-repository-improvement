import './product.repository'
import { Product } from 'src/product/domain/product'

declare module './product.repository' {
    interface ProductRepository {
        getAll(): Promise<Product[]>
    }
}
