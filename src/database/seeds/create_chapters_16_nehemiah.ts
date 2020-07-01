import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 16, number: 1, n_verses: 11},
        { book_id: 16, number: 2, n_verses: 20},
        { book_id: 16, number: 3, n_verses: 32},
        { book_id: 16, number: 4, n_verses: 23},
        { book_id: 16, number: 5, n_verses: 19},
        { book_id: 16, number: 6, n_verses: 19},
        { book_id: 16, number: 7, n_verses: 73},
        { book_id: 16, number: 8, n_verses: 18},
        { book_id: 16, number: 9, n_verses: 38},
        { book_id: 16, number: 10, n_verses: 39},

        { book_id: 16, number: 11, n_verses: 36},
        { book_id: 16, number: 12, n_verses: 47},
        { book_id: 16, number: 13, n_verses: 31},
    ]);
}