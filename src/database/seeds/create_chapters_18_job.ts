import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 18, number: 1, n_verses: 22},
        { book_id: 18, number: 2, n_verses: 13},
        { book_id: 18, number: 3, n_verses: 26},
        { book_id: 18, number: 4, n_verses: 21},
        { book_id: 18, number: 5, n_verses: 27},
        { book_id: 18, number: 6, n_verses: 30},
        { book_id: 18, number: 7, n_verses: 21},
        { book_id: 18, number: 8, n_verses: 22},
        { book_id: 18, number: 9, n_verses: 35},
        { book_id: 18, number: 10, n_verses: 22},

        { book_id: 18, number: 11, n_verses: 20},
        { book_id: 18, number: 12, n_verses: 25},
        { book_id: 18, number: 13, n_verses: 28},
        { book_id: 18, number: 14, n_verses: 22},
        { book_id: 18, number: 15, n_verses: 35},
        { book_id: 18, number: 16, n_verses: 22},
        { book_id: 18, number: 17, n_verses: 16},
        { book_id: 18, number: 18, n_verses: 21},
        { book_id: 18, number: 19, n_verses: 29},
        { book_id: 18, number: 20, n_verses: 29},

        { book_id: 18, number: 21, n_verses: 34},
        { book_id: 18, number: 22, n_verses: 30},
        { book_id: 18, number: 23, n_verses: 17},
        { book_id: 18, number: 24, n_verses: 25},
        { book_id: 18, number: 25, n_verses: 6},
        { book_id: 18, number: 26, n_verses: 14},
        { book_id: 18, number: 27, n_verses: 23},
        { book_id: 18, number: 28, n_verses: 28},
        { book_id: 18, number: 29, n_verses: 25},
        { book_id: 18, number: 30, n_verses: 31},

        { book_id: 18, number: 31, n_verses: 40},
        { book_id: 18, number: 32, n_verses: 22},
        { book_id: 18, number: 33, n_verses: 33},
        { book_id: 18, number: 34, n_verses: 37},
        { book_id: 18, number: 35, n_verses: 16},
        { book_id: 18, number: 36, n_verses: 33},
        { book_id: 18, number: 37, n_verses: 24},
        { book_id: 18, number: 38, n_verses: 41},
        { book_id: 18, number: 39, n_verses: 30},
        { book_id: 18, number: 40, n_verses: 24},

        { book_id: 18, number: 41, n_verses: 34},
        { book_id: 18, number: 42, n_verses: 17},
    ]);
}