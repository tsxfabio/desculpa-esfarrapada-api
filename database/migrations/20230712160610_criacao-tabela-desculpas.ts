import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('desculpas', (table) => {
    table.uuid('id').primary()
    table.string('categoria').notNullable()
    table.string('descricao').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('desculpas')
}
