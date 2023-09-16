import { ApiProperty } from '@nestjs/swagger'

export class CreateProductDTO {
    @ApiProperty()
    name: string
}
