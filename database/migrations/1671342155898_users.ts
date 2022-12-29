import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary().notNullable()
      table.string('user_name').notNullable()
      table.date('user_birthdate').notNullable()
      table.enum('gender', ['male', 'female']).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
