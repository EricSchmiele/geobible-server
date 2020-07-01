import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 7, number: 1, n_verses: 36},
        { book_id: 7, number: 2, n_verses: 23},
        { book_id: 7, number: 3, n_verses: 31},
        { book_id: 7, number: 4, n_verses: 24},
        { book_id: 7, number: 5, n_verses: 31},
        { book_id: 7, number: 6, n_verses: 40},
        { book_id: 7, number: 7, n_verses: 25},
        { book_id: 7, number: 8, n_verses: 35},
        { book_id: 7, number: 9, n_verses: 57},
        { book_id: 7, number: 10, n_verses: 18},

        { book_id: 7, number: 11, n_verses: 40},
        { book_id: 7, number: 12, n_verses: 15},
        { book_id: 7, number: 13, n_verses: 25},
        { book_id: 7, number: 14, n_verses: 20},
        { book_id: 7, number: 15, n_verses: 20},
        { book_id: 7, number: 16, n_verses: 31},
        { book_id: 7, number: 17, n_verses: 13},
        { book_id: 7, number: 18, n_verses: 31},
        { book_id: 7, number: 19, n_verses: 30},
        { book_id: 7, number: 20, n_verses: 48},

        { book_id: 7, number: 21, n_verses: 25},
    ]);
}