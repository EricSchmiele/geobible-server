import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 45, number: 1, n_verses: 32},
        { book_id: 45, number: 2, n_verses: 29},
        { book_id: 45, number: 3, n_verses: 31},
        { book_id: 45, number: 4, n_verses: 25},
        { book_id: 45, number: 5, n_verses: 21},
        { book_id: 45, number: 6, n_verses: 23},
        { book_id: 45, number: 7, n_verses: 25},
        { book_id: 45, number: 8, n_verses: 39},
        { book_id: 45, number: 9, n_verses: 33},
        { book_id: 45, number: 10, n_verses: 21},

        { book_id: 45, number: 11, n_verses: 36},
        { book_id: 45, number: 12, n_verses: 21},
        { book_id: 45, number: 13, n_verses: 14},
        { book_id: 45, number: 14, n_verses: 23},
        { book_id: 45, number: 15, n_verses: 33},
        { book_id: 45, number: 16, n_verses: 27},
    ]);
}