import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('verses', table => {
        table.increments('id').primary();
        table.boolean('chapter_id').notNullable().references('id').inTable('chapters');
        table.integer('number').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('verses');
}