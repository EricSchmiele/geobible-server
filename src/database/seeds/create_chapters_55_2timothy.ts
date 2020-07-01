import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 55, number: 1, n_verses: 18},
        { book_id: 55, number: 2, n_verses: 26},
        { book_id: 55, number: 3, n_verses: 17},
        { book_id: 55, number: 4, n_verses: 22},
    ]);
}