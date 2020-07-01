import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 40, number: 1, n_verses: 25},
        { book_id: 40, number: 2, n_verses: 23},
        { book_id: 40, number: 3, n_verses: 17},
        { book_id: 40, number: 4, n_verses: 25},
        { book_id: 40, number: 5, n_verses: 48},
        { book_id: 40, number: 6, n_verses: 34},
        { book_id: 40, number: 7, n_verses: 29},
        { book_id: 40, number: 8, n_verses: 34},
        { book_id: 40, number: 9, n_verses: 38},
        { book_id: 40, number: 10, n_verses: 42},

        { book_id: 40, number: 11, n_verses: 30},
        { book_id: 40, number: 12, n_verses: 50},
        { book_id: 40, number: 13, n_verses: 58},
        { book_id: 40, number: 14, n_verses: 36},
        { book_id: 40, number: 15, n_verses: 39},
        { book_id: 40, number: 16, n_verses: 28},
        { book_id: 40, number: 17, n_verses: 27},
        { book_id: 40, number: 18, n_verses: 35},
        { book_id: 40, number: 19, n_verses: 30},
        { book_id: 40, number: 20, n_verses: 34},

        { book_id: 40, number: 21, n_verses: 46},
        { book_id: 40, number: 22, n_verses: 46},
        { book_id: 40, number: 23, n_verses: 39},
        { book_id: 40, number: 24, n_verses: 51},
        { book_id: 40, number: 25, n_verses: 46},
        { book_id: 40, number: 26, n_verses: 75},
        { book_id: 40, number: 27, n_verses: 66},
        { book_id: 40, number: 28, n_verses: 20},
    ]);
}