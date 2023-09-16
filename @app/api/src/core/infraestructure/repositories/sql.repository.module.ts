import { Module } from '@nestjs/common'
import { initializeModels } from './loaders/model.loader'
import { initializeRepositories } from './loaders/repositories.loader'
import { TypeOrmModule } from '@nestjs/typeorm'

const repositories = initializeRepositories('sql')

@Module({
    imports: [TypeOrmModule.forFeature(initializeModels('entity', 'sql'))],
    providers: repositories,
    exports: repositories,
})
export class SqlRepositoryModule {}
