import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 38, number: 1, n_verses: 21},
        { book_id: 38, number: 2, n_verses: 13},
        { book_id: 38, number: 3, n_verses: 10},
        { book_id: 38, number: 4, n_verses: 14},
        { book_id: 38, number: 5, n_verses: 11},
        { book_id: 38, number: 6, n_verses: 15},
        { book_id: 38, number: 7, n_verses: 14},
        { book_id: 38, number: 8, n_verses: 23},
        { book_id: 38, number: 9, n_verses: 17},
        { book_id: 38, number: 10, n_verses: 12},

        { book_id: 38, number: 11, n_verses: 17},
        { book_id: 38, number: 12, n_verses: 14},
        { book_id: 38, number: 13, n_verses: 9},
        { book_id: 38, number: 14, n_verses: 21},
    ]);
}