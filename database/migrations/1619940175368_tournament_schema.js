'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TournamentSchema extends Schema {
  up () {
    this.create('tournaments', (table) => {
      table.increments()
      table.string("no_torneo").nullable()
      table.boolean("estatus").notNullable()
      table.string("descripcion").nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tournaments')
  }
}

module.exports = TournamentSchema
