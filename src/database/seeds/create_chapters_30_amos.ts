import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 30, number: 1, n_verses: 15},
        { book_id: 30, number: 2, n_verses: 16},
        { book_id: 30, number: 3, n_verses: 15},
        { book_id: 30, number: 4, n_verses: 13},
        { book_id: 30, number: 5, n_verses: 27},
        { book_id: 30, number: 6, n_verses: 14},
        { book_id: 30, number: 7, n_verses: 17},
        { book_id: 30, number: 8, n_verses: 14},
        { book_id: 30, number: 9, n_verses: 15},
    ]);
}