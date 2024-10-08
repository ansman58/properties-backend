import { BaseSchema } from '@adonisjs/lucid/schema'
import { v4 as uuidv4 } from 'uuid'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable().unique().defaultTo(uuidv4())
      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.text('description').nullable()
      table.text('meta').nullable()
      table.enum('status', ['active', 'inactive']).defaultTo('active')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.index(['name'], 'name_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
