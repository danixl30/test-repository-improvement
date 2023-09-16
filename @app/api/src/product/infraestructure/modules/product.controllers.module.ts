import { Module } from '@nestjs/common'
import { UUIDModule } from 'src/core/infraestructure/UUID/module/UUID.module'
import { initializeControllers } from 'src/core/infraestructure/controllers/controller-reader/controller.reader'
import { SqlRepositoryModule } from 'src/core/infraestructure/repositories/sql.repository.module'

@Module({
    controllers: initializeControllers(__dirname),
    imports: [SqlRepositoryModule, UUIDModule],
})
export class ProductControllerModule {}
