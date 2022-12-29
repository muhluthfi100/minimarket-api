import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import Transaction from './Transaction'

export default class Goods extends BaseModel {
  @column({ isPrimary: true })
  public goods_id: number

  @column()
  public goods_name: string

  @column()
  public goods_stock: number

  @column()
  public goods_type: string

  @column()
  public goods_price: number

  @manyToMany(() => Transaction, {
    pivotTable : 'transactions',
    pivotColumns: ['Goods_goods_id']
  })
  public goods: ManyToMany<typeof Transaction>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
