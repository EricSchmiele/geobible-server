import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 17, number: 1, n_verses: 22},
        { book_id: 17, number: 2, n_verses: 23},
        { book_id: 17, number: 3, n_verses: 15},
        { book_id: 17, number: 4, n_verses: 17},
        { book_id: 17, number: 5, n_verses: 14},
        { book_id: 17, number: 6, n_verses: 14},
        { book_id: 17, number: 7, n_verses: 10},
        { book_id: 17, number: 8, n_verses: 17},
        { book_id: 17, number: 9, n_verses: 32},
        { book_id: 17, number: 10, n_verses: 3},
    ]);
}