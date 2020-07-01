import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 44, number: 1, n_verses: 26},
        { book_id: 44, number: 2, n_verses: 47},
        { book_id: 44, number: 3, n_verses: 26},
        { book_id: 44, number: 4, n_verses: 37},
        { book_id: 44, number: 5, n_verses: 42},
        { book_id: 44, number: 6, n_verses: 15},
        { book_id: 44, number: 7, n_verses: 60},
        { book_id: 44, number: 8, n_verses: 40},
        { book_id: 44, number: 9, n_verses: 43},
        { book_id: 44, number: 10, n_verses: 48},

        { book_id: 44, number: 11, n_verses: 30},
        { book_id: 44, number: 12, n_verses: 25},
        { book_id: 44, number: 13, n_verses: 52},
        { book_id: 44, number: 14, n_verses: 28},
        { book_id: 44, number: 15, n_verses: 41},
        { book_id: 44, number: 16, n_verses: 40},
        { book_id: 44, number: 17, n_verses: 34},
        { book_id: 44, number: 18, n_verses: 28},
        { book_id: 44, number: 19, n_verses: 41},
        { book_id: 44, number: 20, n_verses: 38},

        { book_id: 44, number: 21, n_verses: 40},
        { book_id: 44, number: 22, n_verses: 30},
        { book_id: 44, number: 23, n_verses: 35},
        { book_id: 44, number: 24, n_verses: 27},
        { book_id: 44, number: 25, n_verses: 27},
        { book_id: 44, number: 26, n_verses: 32},
        { book_id: 44, number: 27, n_verses: 44},
        { book_id: 44, number: 28, n_verses: 31},
    ]);
}