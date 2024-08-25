import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import State from './state.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare meta?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static generateId(country: Country) {
    country.id = uuidv4()
  }

  @hasMany(() => State, {
    onQuery: (query) => query.preload('cities'),
  })
  declare states: HasMany<typeof State>
}