import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 14, number: 1, n_verses: 17},
        { book_id: 14, number: 2, n_verses: 18},
        { book_id: 14, number: 3, n_verses: 17},
        { book_id: 14, number: 4, n_verses: 22},
        { book_id: 14, number: 5, n_verses: 14},
        { book_id: 14, number: 6, n_verses: 42},
        { book_id: 14, number: 7, n_verses: 22},
        { book_id: 14, number: 8, n_verses: 18},
        { book_id: 14, number: 9, n_verses: 31},
        { book_id: 14, number: 10, n_verses: 19},

        { book_id: 14, number: 11, n_verses: 23},
        { book_id: 14, number: 12, n_verses: 16},
        { book_id: 14, number: 13, n_verses: 22},
        { book_id: 14, number: 14, n_verses: 15},
        { book_id: 14, number: 15, n_verses: 19},
        { book_id: 14, number: 16, n_verses: 14},
        { book_id: 14, number: 17, n_verses: 19},
        { book_id: 14, number: 18, n_verses: 34},
        { book_id: 14, number: 19, n_verses: 11},
        { book_id: 14, number: 20, n_verses: 37},

        { book_id: 14, number: 21, n_verses: 20},
        { book_id: 14, number: 22, n_verses: 12},
        { book_id: 14, number: 23, n_verses: 21},
        { book_id: 14, number: 24, n_verses: 27},
        { book_id: 14, number: 25, n_verses: 28},
        { book_id: 14, number: 26, n_verses: 23},
        { book_id: 14, number: 27, n_verses: 9},
        { book_id: 14, number: 28, n_verses: 27},
        { book_id: 14, number: 29, n_verses: 36},
        { book_id: 14, number: 30, n_verses: 27},

        { book_id: 14, number: 31, n_verses: 21},
        { book_id: 14, number: 32, n_verses: 33},
        { book_id: 14, number: 33, n_verses: 25},
        { book_id: 14, number: 34, n_verses: 33},
        { book_id: 14, number: 35, n_verses: 27},
        { book_id: 14, number: 36, n_verses: 23},
    ]);
}