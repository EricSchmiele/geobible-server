import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 15, number: 1, n_verses: 11},
        { book_id: 15, number: 2, n_verses: 70},
        { book_id: 15, number: 3, n_verses: 13},
        { book_id: 15, number: 4, n_verses: 24},
        { book_id: 15, number: 5, n_verses: 17},
        { book_id: 15, number: 6, n_verses: 22},
        { book_id: 15, number: 7, n_verses: 28},
        { book_id: 15, number: 8, n_verses: 36},
        { book_id: 15, number: 9, n_verses: 15},
        { book_id: 15, number: 10, n_verses: 44},
    ]);
}