import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 21, number: 1, n_verses: 18},
        { book_id: 21, number: 2, n_verses: 26},
        { book_id: 21, number: 3, n_verses: 22},
        { book_id: 21, number: 4, n_verses: 16},
        { book_id: 21, number: 5, n_verses: 20},
        { book_id: 21, number: 6, n_verses: 12},
        { book_id: 21, number: 7, n_verses: 29},
        { book_id: 21, number: 8, n_verses: 17},
        { book_id: 21, number: 9, n_verses: 18},
        { book_id: 21, number: 10, n_verses: 20},

        { book_id: 21, number: 11, n_verses: 10},
        { book_id: 21, number: 12, n_verses: 14},
    ]);
}