import { Module } from '@nestjs/common'
import { PostgresConnectionModule } from './sql/sql.connection.module'

@Module({
    imports: [PostgresConnectionModule],
})
export class DatabaseConnectionModule {}
