import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 52, number: 1, n_verses: 18},
        { book_id: 52, number: 2, n_verses: 20},
        { book_id: 52, number: 3, n_verses: 13},
        { book_id: 52, number: 4, n_verses: 18},
        { book_id: 52, number: 5, n_verses: 28},
    ]);
}