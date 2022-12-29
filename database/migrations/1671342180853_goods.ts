import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'goods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('goods_id').primary().notNullable()
      table.string('goods_name').notNullable()
      table.integer('goods_stock').notNullable()
      table.string('goods_type').notNullable()
      table.integer('goods_price').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
