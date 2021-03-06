import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 22, number: 1, n_verses: 17},
        { book_id: 22, number: 2, n_verses: 17},
        { book_id: 22, number: 3, n_verses: 11},
        { book_id: 22, number: 4, n_verses: 16},
        { book_id: 22, number: 5, n_verses: 16},
        { book_id: 22, number: 6, n_verses: 13},
        { book_id: 22, number: 7, n_verses: 13},
        { book_id: 22, number: 8, n_verses: 14},
    ]);
}