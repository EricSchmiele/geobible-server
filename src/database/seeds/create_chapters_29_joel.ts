import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 29, number: 1, n_verses: 20},
        { book_id: 29, number: 2, n_verses: 32},
        { book_id: 29, number: 3, n_verses: 21},
    ]);
}