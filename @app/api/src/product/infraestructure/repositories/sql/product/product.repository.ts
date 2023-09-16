import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductRepository } from 'src/product/application/repositories/product.repository'
import { Product } from 'src/product/infraestructure/models/sql/product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProductSqlRepository {
    constructor(
        @InjectRepository(Product) protected productDb: Repository<Product>,
    ) {}
}

export interface ProductSqlRepository extends ProductRepository {}
