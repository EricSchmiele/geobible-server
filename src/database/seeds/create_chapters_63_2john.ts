import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 63, number: 1, n_verses: 13},
    ]);
}