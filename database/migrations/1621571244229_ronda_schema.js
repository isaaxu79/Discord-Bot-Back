'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RondaSchema extends Schema {
  up () {
    this.create('rondas', (table) => {
      table.increments()
      table.integer('no_ronda')
      table.timestamps()
    })
  }

  down () {
    this.drop('rondas')
  }
}

module.exports = RondaSchema
