import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 46, number: 1, n_verses: 31},
        { book_id: 46, number: 2, n_verses: 16},
        { book_id: 46, number: 3, n_verses: 23},
        { book_id: 46, number: 4, n_verses: 21},
        { book_id: 46, number: 5, n_verses: 13},
        { book_id: 46, number: 6, n_verses: 20},
        { book_id: 46, number: 7, n_verses: 40},
        { book_id: 46, number: 8, n_verses: 13},
        { book_id: 46, number: 9, n_verses: 27},
        { book_id: 46, number: 10, n_verses: 33},

        { book_id: 46, number: 11, n_verses: 34},
        { book_id: 46, number: 12, n_verses: 31},
        { book_id: 46, number: 13, n_verses: 13},
        { book_id: 46, number: 14, n_verses: 40},
        { book_id: 46, number: 15, n_verses: 58},
        { book_id: 46, number: 16, n_verses: 24},
    ]);
}