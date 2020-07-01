import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 48, number: 1, n_verses: 24},
        { book_id: 48, number: 2, n_verses: 21},
        { book_id: 48, number: 3, n_verses: 29},
        { book_id: 48, number: 4, n_verses: 31},
        { book_id: 48, number: 5, n_verses: 26},
        { book_id: 48, number: 6, n_verses: 18},
    ]);
}