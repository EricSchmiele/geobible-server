import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 32, number: 1, n_verses: 17},
        { book_id: 32, number: 2, n_verses: 10},
        { book_id: 32, number: 3, n_verses: 10},
        { book_id: 32, number: 4, n_verses: 11},
    ]);
}