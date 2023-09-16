import { Body, Controller, Post } from '@nestjs/common'
import { PRODUCT_DOCS_PREFIX, PRODUCT_ROUTE_PREFIX } from '../prefix'
import { ApiTags } from '@nestjs/swagger'
import { ControllerContract } from 'src/core/infraestructure/controllers/controller-model/controller.contract'
import { CreateProductResponse } from 'src/product/application/commands/create/types/response'
import { ProductSqlRepository } from '../../repositories/sql/product'
import { ConcreteUUIDGenerator } from 'src/core/infraestructure/UUID/service/concrete.UUID.generator'
import { CreateProductCommand } from 'src/product/application/commands/create/create'
import { CreateProductDTO } from './dto/dto'

@Controller(PRODUCT_ROUTE_PREFIX)
@ApiTags(PRODUCT_DOCS_PREFIX)
export class CreateProductController
    implements ControllerContract<CreateProductDTO, CreateProductResponse>
{
    constructor(
        private productRepository: ProductSqlRepository,
        private uuidGen: ConcreteUUIDGenerator,
    ) {}

    @Post('create')
    async execute(
        @Body() data: CreateProductDTO,
    ): Promise<CreateProductResponse> {
        const resp = await new CreateProductCommand(
            this.productRepository,
            this.uuidGen,
        ).execute(data)
        return resp.unwrap()
    }
}
