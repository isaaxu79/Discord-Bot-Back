'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.integer("discord_id").notNullable().unique()
      table.string("discord_username").nullable().defaultTo("No ingresado")
      table.string("username_7ds").nullable().defaultTo("No ingresado")
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
