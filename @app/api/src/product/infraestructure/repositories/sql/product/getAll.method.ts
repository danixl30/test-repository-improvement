import { ProductSqlRepository } from './product.repository'
import { Product } from 'src/product/domain/product'
import { ProductId } from 'src/product/domain/value-objects/id'
import { ProductName } from 'src/product/domain/value-objects/name'

ProductSqlRepository.prototype.getAll = async function (
    this: ProductSqlRepository,
) {
    const products = await this.productDb.find()
    return products.map(
        (product) =>
            new Product(
                new ProductId(product.id),
                new ProductName(product.name),
            ),
    )
}
