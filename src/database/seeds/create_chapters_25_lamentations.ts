import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 25, number: 1, n_verses: 22},
        { book_id: 25, number: 2, n_verses: 22},
        { book_id: 25, number: 3, n_verses: 66},
        { book_id: 25, number: 4, n_verses: 22},
        { book_id: 25, number: 5, n_verses: 22},
    ]);
}