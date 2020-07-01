import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 6, number: 1, n_verses: 18},
        { book_id: 6, number: 2, n_verses: 24},
        { book_id: 6, number: 3, n_verses: 17},
        { book_id: 6, number: 4, n_verses: 24},
        { book_id: 6, number: 5, n_verses: 15},
        { book_id: 6, number: 6, n_verses: 27},
        { book_id: 6, number: 7, n_verses: 26},
        { book_id: 6, number: 8, n_verses: 35},
        { book_id: 6, number: 9, n_verses: 27},
        { book_id: 6, number: 10, n_verses: 43},

        { book_id: 6, number: 11, n_verses: 23},
        { book_id: 6, number: 12, n_verses: 24},
        { book_id: 6, number: 13, n_verses: 33},
        { book_id: 6, number: 14, n_verses: 15},
        { book_id: 6, number: 15, n_verses: 63},
        { book_id: 6, number: 16, n_verses: 10},
        { book_id: 6, number: 17, n_verses: 18},
        { book_id: 6, number: 18, n_verses: 28},
        { book_id: 6, number: 19, n_verses: 51},
        { book_id: 6, number: 20, n_verses: 9},

        { book_id: 6, number: 21, n_verses: 45},
        { book_id: 6, number: 22, n_verses: 34},
        { book_id: 6, number: 23, n_verses: 16},
        { book_id: 6, number: 24, n_verses: 33},
    ]);
}