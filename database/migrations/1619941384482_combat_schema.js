'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CombatSchema extends Schema {
  up () {
    this.create('combats', (table) => {
      table.increments()
      table.integer('player1').references('id').inTable('participations').onDelete('cascade')
      table.integer('player2').references('id').inTable('participations').onDelete('cascade')
      table.integer('tournament_id').references('id').inTable('tournaments').onDelete('cascade')
      table.integer('winner')
      table.timestamps()
    })
  }

  down () {
    this.drop('combats')
  }
}

module.exports = CombatSchema
