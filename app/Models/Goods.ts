import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

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

  @belongsTo(() => User)
  public eachGoods : BelongsTo<typeof User>

  @manyToMany(() => User, {
    pivotTable : 'transactions',
    pivotColumns: ['Goods_goods_id']
  })
  public goods: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
