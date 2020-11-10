import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Photos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ type: 'bytea'})
    img: Buffer;


    

}

