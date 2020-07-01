import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 51, number: 1, n_verses: 29},
        { book_id: 51, number: 2, n_verses: 23},
        { book_id: 51, number: 3, n_verses: 25},
        { book_id: 51, number: 4, n_verses: 18},
    ]);
}