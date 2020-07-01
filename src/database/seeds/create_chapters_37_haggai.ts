import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 37, number: 1, n_verses: 15},
        { book_id: 37, number: 2, n_verses: 23},
    ]);
}