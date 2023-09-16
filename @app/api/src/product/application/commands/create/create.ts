import { ApplicationService } from 'src/core/application/service/application.service'
import { CreateProductDTO } from './types/dto'
import { CreateProductResponse } from './types/response'
import { ApplicationError } from 'src/core/application/error/application.error'
import { Result } from 'src/core/application/result-handler/result.handler'
import { ProductRepository } from '../../repositories/product.repository'
import { ProductName } from 'src/product/domain/value-objects/name'
import { Product } from 'src/product/domain/product'
import { UUIDGenerator } from 'src/core/application/UUID/UUID.generator'
import { ProductId } from 'src/product/domain/value-objects/id'

export class CreateProductCommand
    implements
        ApplicationService<
            CreateProductDTO,
            CreateProductResponse,
            ApplicationError
        >
{
    constructor(
        private productRepository: ProductRepository,
        private uuidGen: UUIDGenerator,
    ) {}

    async execute(
        data: CreateProductDTO,
    ): Promise<Result<CreateProductResponse, ApplicationError>> {
        const name = new ProductName(data.name)
        const possibleProduct = await this.productRepository.getByName(name)
        if (possibleProduct) throw new Error('Product name must to be unique')
        const product = new Product(
            new ProductId(this.uuidGen.generate()),
            name,
        )
        await this.productRepository.save(product)
        return Result.success({
            id: product.id.value,
        })
    }
}
