import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 62, number: 1, n_verses: 10},
        { book_id: 62, number: 2, n_verses: 29},
        { book_id: 62, number: 3, n_verses: 24},
        { book_id: 62, number: 4, n_verses: 21},
        { book_id: 62, number: 5, n_verses: 21},
    ]);
}