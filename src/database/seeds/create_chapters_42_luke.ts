import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 42, number: 1, n_verses: 80},
        { book_id: 42, number: 2, n_verses: 52},
        { book_id: 42, number: 3, n_verses: 38},
        { book_id: 42, number: 4, n_verses: 44},
        { book_id: 42, number: 5, n_verses: 39},
        { book_id: 42, number: 6, n_verses: 49},
        { book_id: 42, number: 7, n_verses: 50},
        { book_id: 42, number: 8, n_verses: 56},
        { book_id: 42, number: 9, n_verses: 62},
        { book_id: 42, number: 10, n_verses: 42},

        { book_id: 42, number: 11, n_verses: 54},
        { book_id: 42, number: 12, n_verses: 59},
        { book_id: 42, number: 13, n_verses: 35},
        { book_id: 42, number: 14, n_verses: 35},
        { book_id: 42, number: 15, n_verses: 32},
        { book_id: 42, number: 16, n_verses: 31},
        { book_id: 42, number: 17, n_verses: 37},
        { book_id: 42, number: 18, n_verses: 43},
        { book_id: 42, number: 19, n_verses: 48},
        { book_id: 42, number: 20, n_verses: 47},

        { book_id: 42, number: 21, n_verses: 38},
        { book_id: 42, number: 22, n_verses: 71},
        { book_id: 42, number: 23, n_verses: 56},
        { book_id: 42, number: 24, n_verses: 53},
    ]);
}