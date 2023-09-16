import { ApplicationService } from 'src/core/application/service/application.service'
import { GetAllProductsResponse } from './types/response'
import { ApplicationError } from 'src/core/application/error/application.error'
import { ProductRepository } from '../../repositories/product.repository'
import { Result } from 'src/core/application/result-handler/result.handler'

export class GetAllProductsQuery
    implements
        ApplicationService<undefined, GetAllProductsResponse, ApplicationError>
{
    constructor(private productRepository: ProductRepository) {}

    async execute(): Promise<Result<GetAllProductsResponse, ApplicationError>> {
        const products = await this.productRepository.getAll()
        return Result.success(
            products.map((e) => ({
                id: e.id.value,
                name: e.name.value,
            })),
        )
    }
}
