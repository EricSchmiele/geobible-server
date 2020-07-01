import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 34, number: 1, n_verses: 15},
        { book_id: 34, number: 2, n_verses: 13},
        { book_id: 34, number: 3, n_verses: 19},
    ]);
}