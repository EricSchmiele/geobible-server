import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 41, number: 1, n_verses: 45},
        { book_id: 41, number: 2, n_verses: 28},
        { book_id: 41, number: 3, n_verses: 35},
        { book_id: 41, number: 4, n_verses: 41},
        { book_id: 41, number: 5, n_verses: 43},
        { book_id: 41, number: 6, n_verses: 56},
        { book_id: 41, number: 7, n_verses: 37},
        { book_id: 41, number: 8, n_verses: 38},
        { book_id: 41, number: 9, n_verses: 50},
        { book_id: 41, number: 10, n_verses: 52},

        { book_id: 41, number: 11, n_verses: 33},
        { book_id: 41, number: 12, n_verses: 44},
        { book_id: 41, number: 13, n_verses: 37},
        { book_id: 41, number: 14, n_verses: 72},
        { book_id: 41, number: 15, n_verses: 47},
        { book_id: 41, number: 16, n_verses: 20},
    ]);
}