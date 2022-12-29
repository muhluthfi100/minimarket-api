import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('transaction_id').primary().notNullable()
      table.integer('User_user_id').unsigned().references('user_id').inTable('users')
      table.integer('Goods_goods_id').unsigned().references('goods_id').inTable('goods')
      table.integer('transaction_ammount').notNullable()
      table.integer('transaction_total_price').notNullable()
      table.timestamp('transaction_date').defaultTo(this.now())
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
