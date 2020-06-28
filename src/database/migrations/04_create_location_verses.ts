import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('location_verses', table => {
        table.increments('id').primary();
        table.boolean('location_id').notNullable().references('id').inTable('locations');
        table.boolean('verse_id').notNullable().references('id').inTable('verses');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('location_verses');
}