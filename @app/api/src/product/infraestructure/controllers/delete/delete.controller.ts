import { Controller, Delete, Param } from '@nestjs/common'
import { PRODUCT_DOCS_PREFIX, PRODUCT_ROUTE_PREFIX } from '../prefix'
import { ApiTags } from '@nestjs/swagger'
import { ControllerContract } from 'src/core/infraestructure/controllers/controller-model/controller.contract'
import { DeleteProductResponse } from 'src/product/application/commands/delete/types/response'
import { ProductSqlRepository } from '../../repositories/sql/product'
import { DeleteProductCommand } from 'src/product/application/commands/delete/delete'

@Controller(PRODUCT_ROUTE_PREFIX)
@ApiTags(PRODUCT_DOCS_PREFIX)
export class DeleteProductController
    implements ControllerContract<string, DeleteProductResponse>
{
    constructor(private productRepository: ProductSqlRepository) {}

    @Delete('delete/:id')
    async execute(@Param('id') id: string): Promise<DeleteProductResponse> {
        const resp = await new DeleteProductCommand(
            this.productRepository,
        ).execute({
            id,
        })
        return resp.unwrap()
    }
}
