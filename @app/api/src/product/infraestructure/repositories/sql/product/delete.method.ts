import { Product } from 'src/product/domain/product'
import { ProductSqlRepository } from './product.repository'

ProductSqlRepository.prototype.delete = async function (
    this: ProductSqlRepository,
    data: Product,
) {
    await this.productDb.delete({
        id: data.id.value,
    })
    return data
}
