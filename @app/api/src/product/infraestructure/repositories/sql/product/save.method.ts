import { Product } from 'src/product/domain/product'
import { ProductSqlRepository } from './product.repository'

ProductSqlRepository.prototype.save = async function (
    this: ProductSqlRepository,
    data: Product,
) {
    await this.productDb.upsert(
        this.productDb.create({
            name: data.name.value,
            id: data.id.value,
        }),
        ['id'],
    )
    return data
}
