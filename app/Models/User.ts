import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Goods from './Goods'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number

  @column()
  public user_name: string

  @column()
  public user_birthdate: DateTime

  @column()
  public gender: string

  @manyToMany(() => Goods, {
    pivotTable : 'transactions',
    pivotColumns: ['User_user_id']
  })
  public goods: ManyToMany<typeof Goods>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
