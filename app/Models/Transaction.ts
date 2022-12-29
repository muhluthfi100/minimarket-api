import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public transaction_id: number

  @column()
  public User_user_id: number

  @column()
  public Goods_goods_id: number

  @column()
  public transaction_ammount : number

  @column()
  public transaction_total_price : number

  @column()
  public transaction_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
