import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 50, number: 1, n_verses: 30},
        { book_id: 50, number: 2, n_verses: 30},
        { book_id: 50, number: 3, n_verses: 21},
        { book_id: 50, number: 4, n_verses: 23},
    ]);
}