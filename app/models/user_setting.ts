import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class UserSetting extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare columnName: string

  @column()
  declare columnValue: string

  @column()
  declare meta: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static generateId(property: UserSetting) {
    property.id = uuidv4()
  }

  @hasOne(() => User)
  declare user: HasOne<typeof User>
}
