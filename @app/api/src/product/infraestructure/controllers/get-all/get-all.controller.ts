import { Controller, Get } from '@nestjs/common'
import { PRODUCT_DOCS_PREFIX, PRODUCT_ROUTE_PREFIX } from '../prefix'
import { ApiTags } from '@nestjs/swagger'
import { ControllerContract } from 'src/core/infraestructure/controllers/controller-model/controller.contract'
import { ProductSqlRepository } from '../../repositories/sql/product'
import { GetAllProductsResponse } from 'src/product/application/queries/get-all/types/response'
import { GetAllProductsQuery } from 'src/product/application/queries/get-all/get.all'

@Controller(PRODUCT_ROUTE_PREFIX)
@ApiTags(PRODUCT_DOCS_PREFIX)
export class GetAllProductsController
    implements ControllerContract<undefined, GetAllProductsResponse>
{
    constructor(private productRepository: ProductSqlRepository) {}

    @Get('all')
    async execute(): Promise<GetAllProductsResponse> {
        const resp = await new GetAllProductsQuery(
            this.productRepository,
        ).execute()
        return resp.unwrap()
    }
}
