import { Controller, Get, Param } from '@nestjs/common'
import { PRODUCT_DOCS_PREFIX, PRODUCT_ROUTE_PREFIX } from '../prefix'
import { ApiTags } from '@nestjs/swagger'
import { ControllerContract } from 'src/core/infraestructure/controllers/controller-model/controller.contract'
import { ProductSqlRepository } from '../../repositories/sql/product'
import { GetProductByIdResponse } from 'src/product/application/queries/get-by-id/types/response'
import { GetProductByIdQuery } from 'src/product/application/queries/get-by-id/get.by.id'

@Controller(PRODUCT_ROUTE_PREFIX)
@ApiTags(PRODUCT_DOCS_PREFIX)
export class GetProductByIdController
    implements ControllerContract<string, GetProductByIdResponse>
{
    constructor(private productRepository: ProductSqlRepository) {}

    @Get('one/:id')
    async execute(@Param('id') id: string): Promise<GetProductByIdResponse> {
        const resp = await new GetProductByIdQuery(
            this.productRepository,
        ).execute({
            id,
        })
        return resp.unwrap()
    }
}
