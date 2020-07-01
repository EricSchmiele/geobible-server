import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 3, number: 1, n_verses: 17},
        { book_id: 3, number: 2, n_verses: 16},
        { book_id: 3, number: 3, n_verses: 17},
        { book_id: 3, number: 4, n_verses: 35},
        { book_id: 3, number: 5, n_verses: 19},
        { book_id: 3, number: 6, n_verses: 30},
        { book_id: 3, number: 7, n_verses: 38},
        { book_id: 3, number: 8, n_verses: 36},
        { book_id: 3, number: 9, n_verses: 24},
        { book_id: 3, number: 10, n_verses: 20},

        { book_id: 3, number: 11, n_verses: 47},
        { book_id: 3, number: 12, n_verses: 8},
        { book_id: 3, number: 13, n_verses: 59},
        { book_id: 3, number: 14, n_verses: 57},
        { book_id: 3, number: 15, n_verses: 33},
        { book_id: 3, number: 16, n_verses: 34},
        { book_id: 3, number: 17, n_verses: 16},
        { book_id: 3, number: 18, n_verses: 30},
        { book_id: 3, number: 19, n_verses: 37},
        { book_id: 3, number: 20, n_verses: 27},

        { book_id: 3, number: 21, n_verses: 24},
        { book_id: 3, number: 22, n_verses: 33},
        { book_id: 3, number: 23, n_verses: 44},
        { book_id: 3, number: 24, n_verses: 23},
        { book_id: 3, number: 25, n_verses: 55},
        { book_id: 3, number: 26, n_verses: 46},
        { book_id: 3, number: 27, n_verses: 34},
    ]);
}