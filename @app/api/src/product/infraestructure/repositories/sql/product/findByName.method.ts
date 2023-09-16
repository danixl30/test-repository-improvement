import { ProductName } from 'src/product/domain/value-objects/name'
import { ProductSqlRepository } from './product.repository'
import { Product } from 'src/product/domain/product'
import { ProductId } from 'src/product/domain/value-objects/id'

ProductSqlRepository.prototype.getByName = async function (
    this: ProductSqlRepository,
    name: ProductName,
) {
    const product = await this.productDb.findOneBy({
        name: name.value,
    })
    return product
        ? new Product(new ProductId(product.id), new ProductName(product.name))
        : null
}
