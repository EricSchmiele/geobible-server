import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 58, number: 1, n_verses: 14},
        { book_id: 58, number: 2, n_verses: 18},
        { book_id: 58, number: 3, n_verses: 19},
        { book_id: 58, number: 4, n_verses: 16},
        { book_id: 58, number: 5, n_verses: 14},
        { book_id: 58, number: 6, n_verses: 20},
        { book_id: 58, number: 7, n_verses: 28},
        { book_id: 58, number: 8, n_verses: 13},
        { book_id: 58, number: 9, n_verses: 28},
        { book_id: 58, number: 10, n_verses: 39},

        { book_id: 58, number: 11, n_verses: 40},
        { book_id: 58, number: 12, n_verses: 29},
        { book_id: 58, number: 13, n_verses: 25},
    ]);
}