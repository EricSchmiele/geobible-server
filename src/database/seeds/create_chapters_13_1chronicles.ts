import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 13, number: 1, n_verses: 54},
        { book_id: 13, number: 2, n_verses: 55},
        { book_id: 13, number: 3, n_verses: 24},
        { book_id: 13, number: 4, n_verses: 43},
        { book_id: 13, number: 5, n_verses: 26},
        { book_id: 13, number: 6, n_verses: 81},
        { book_id: 13, number: 7, n_verses: 40},
        { book_id: 13, number: 8, n_verses: 40},
        { book_id: 13, number: 9, n_verses: 44},
        { book_id: 13, number: 10, n_verses: 14},

        { book_id: 13, number: 11, n_verses: 47},
        { book_id: 13, number: 12, n_verses: 40},
        { book_id: 13, number: 13, n_verses: 14},
        { book_id: 13, number: 14, n_verses: 17},
        { book_id: 13, number: 15, n_verses: 29},
        { book_id: 13, number: 16, n_verses: 43},
        { book_id: 13, number: 17, n_verses: 27},
        { book_id: 13, number: 18, n_verses: 18},
        { book_id: 13, number: 19, n_verses: 18},
        { book_id: 13, number: 20, n_verses: 8},

        { book_id: 13, number: 21, n_verses: 30},
        { book_id: 13, number: 22, n_verses: 19},
        { book_id: 13, number: 23, n_verses: 32},
        { book_id: 13, number: 24, n_verses: 31},
        { book_id: 13, number: 25, n_verses: 31},
        { book_id: 13, number: 26, n_verses: 32},
        { book_id: 13, number: 27, n_verses: 34},
        { book_id: 13, number: 28, n_verses: 21},
        { book_id: 13, number: 29, n_verses: 30},
    ]);
}