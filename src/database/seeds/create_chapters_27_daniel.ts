import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 27, number: 1, n_verses: 21},
        { book_id: 27, number: 2, n_verses: 49},
        { book_id: 27, number: 3, n_verses: 30},
        { book_id: 27, number: 4, n_verses: 37},
        { book_id: 27, number: 5, n_verses: 31},
        { book_id: 27, number: 6, n_verses: 28},
        { book_id: 27, number: 7, n_verses: 28},
        { book_id: 27, number: 8, n_verses: 27},
        { book_id: 27, number: 9, n_verses: 27},
        { book_id: 27, number: 10, n_verses: 21},

        { book_id: 27, number: 11, n_verses: 45},
        { book_id: 27, number: 12, n_verses: 13},
    ]);
}