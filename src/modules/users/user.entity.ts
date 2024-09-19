import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface IUserTypeAttributes {
  name: string;
  email: string;
  password: string;
  gender: number;
  status: boolean;
}

@Table
export class User extends Model<User> implements IUserTypeAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['1', '2'],
    allowNull: false,
  })
  gender: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;
}
