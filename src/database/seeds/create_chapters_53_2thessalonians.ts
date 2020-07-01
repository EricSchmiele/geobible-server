import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 53, number: 1, n_verses: 12},
        { book_id: 53, number: 2, n_verses: 17},
        { book_id: 53, number: 3, n_verses: 18},
    ]);
}