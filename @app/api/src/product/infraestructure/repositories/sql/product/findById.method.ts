import { ProductId } from 'src/product/domain/value-objects/id'
import { ProductSqlRepository } from './product.repository'
import { Product } from 'src/product/domain/product'
import { ProductName } from 'src/product/domain/value-objects/name'

ProductSqlRepository.prototype.getById = async function (
    this: ProductSqlRepository,
    id: ProductId,
) {
    const product = await this.productDb.findOneBy({
        id: id.value,
    })
    return product
        ? new Product(new ProductId(product.id), new ProductName(product.name))
        : null
}
