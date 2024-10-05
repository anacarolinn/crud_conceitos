import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 }) // poderia passar algumas informações a mais de tipagem, mas se eu não declarar nada vai ser só mais uma coluna de texto
  texto: string;

  @Column({ type: 'varchar', length: 50 })
  de: string;

  @Column({ type: 'varchar', length: 50 })
  para: string;

  @Column({ default: false })
  lido: boolean;

  @Column()
  data: Date; // createdAt

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateddAt?: Date;
}
