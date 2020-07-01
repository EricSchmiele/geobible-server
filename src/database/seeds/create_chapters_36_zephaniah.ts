import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 36, number: 1, n_verses: 18},
        { book_id: 36, number: 2, n_verses: 15},
        { book_id: 36, number: 3, n_verses: 20},
    ]);
}