import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('chapters', table => {
        table.increments('id').primary();
        table.boolean('book_id').notNullable().references('id').inTable('books');
        table.integer('number').notNullable();
        table.integer('n_verses').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('chapters');
}