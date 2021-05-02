'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TournamentSchema extends Schema {
  up () {
    this.create('tournaments', (table) => {
      table.increments()
      table.string("torneo_name").nullable()
      table.boolean("activo").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tournaments')
  }
}

module.exports = TournamentSchema
