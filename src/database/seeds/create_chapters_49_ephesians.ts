import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 49, number: 1, n_verses: 23},
        { book_id: 49, number: 2, n_verses: 22},
        { book_id: 49, number: 3, n_verses: 21},
        { book_id: 49, number: 4, n_verses: 32},
        { book_id: 49, number: 5, n_verses: 33},
        { book_id: 49, number: 6, n_verses: 24},
    ]);
}