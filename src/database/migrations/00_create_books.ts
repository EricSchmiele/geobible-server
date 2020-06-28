import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('ref').notNullable();
        table.integer('n_chapters').notNullable();
        table.boolean('old_testament').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('books');
}