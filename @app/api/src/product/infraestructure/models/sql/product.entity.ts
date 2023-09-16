import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Product {
    @PrimaryColumn({
        type: 'uuid',
    })
    id: string
    @Column({
        unique: true,
    })
    name: string
}
