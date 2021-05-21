'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VersusSchema extends Schema {
  up () {
    this.create('versus', (table) => {
      table.increments()
      table.integer('user1').references('id').inTable('participations').onDelete('cascade')
      table.integer('user2').references('id').inTable('participations').onDelete('cascade')
      table.boolean("estatus").notNullable()
      table.integer('id_ronda').references('id').inTable('rondas').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('versus')
  }
}

module.exports = VersusSchema
