'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParticipationSchema extends Schema {
  up () {
    this.create('participations', (table) => {
      table.increments()
      table.integer('tournament_id').references('id').inTable('tournaments').onDelete('cascade')
      table.integer('usuario_id').references('id').inTable('users').onDelete('cascade')
      table.boolean('winner').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('participations')
  }
}

module.exports = ParticipationSchema
