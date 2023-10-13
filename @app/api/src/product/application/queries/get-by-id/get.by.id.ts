import { ApplicationService } from 'src/core/application/service/application.service'
import { GetProductByIdDTO } from './types/dto'
import { GetProductByIdResponse } from './types/response'
import { ApplicationError } from 'src/core/application/error/application.error'
import { ProductRepository } from '../../repositories/product'
import { Result } from 'src/core/application/result-handler/result.handler'
import { ProductId } from 'src/product/domain/value-objects/id'

export class GetProductByIdQuery
implements
        ApplicationService<
            GetProductByIdDTO,
            GetProductByIdResponse,
            ApplicationError
        >
{
    constructor(private productRepository: ProductRepository) {}

    async execute(
        data: GetProductByIdDTO,
    ): Promise<Result<GetProductByIdResponse, ApplicationError>> {
        const product = await this.productRepository.getById(
            new ProductId(data.id),
        )
        if (!product) throw new Error('Product not found')
        return Result.success({
            id: product.id.value,
            name: product.name.value,
        })
    }
}
