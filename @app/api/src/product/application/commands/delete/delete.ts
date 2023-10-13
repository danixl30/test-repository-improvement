import { ApplicationService } from 'src/core/application/service/application.service'
import { ApplicationError } from 'src/core/application/error/application.error'
import { Result } from 'src/core/application/result-handler/result.handler'
import { ProductRepository } from '../../repositories/product'
import { ProductId } from 'src/product/domain/value-objects/id'
import { DeleteProductResponse } from './types/response'
import { DeleteProductDTO } from './types/dto'

export class DeleteProductCommand
implements
        ApplicationService<
            DeleteProductDTO,
            DeleteProductResponse,
            ApplicationError
        >
{
    constructor(private productRepository: ProductRepository) {}

    async execute(
        data: DeleteProductDTO,
    ): Promise<Result<DeleteProductResponse, ApplicationError>> {
        const product = await this.productRepository.getById(
            new ProductId(data.id),
        )
        if (!product) throw new Error('Product not found')
        await this.productRepository.delete(product)
        return Result.success({
            id: product.id.value,
        })
    }
}
