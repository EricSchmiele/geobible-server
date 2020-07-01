import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 47, number: 1, n_verses: 24},
        { book_id: 47, number: 2, n_verses: 17},
        { book_id: 47, number: 3, n_verses: 18},
        { book_id: 47, number: 4, n_verses: 18},
        { book_id: 47, number: 5, n_verses: 21},
        { book_id: 47, number: 6, n_verses: 18},
        { book_id: 47, number: 7, n_verses: 16},
        { book_id: 47, number: 8, n_verses: 24},
        { book_id: 47, number: 9, n_verses: 15},
        { book_id: 47, number: 10, n_verses: 18},

        { book_id: 47, number: 11, n_verses: 33},
        { book_id: 47, number: 12, n_verses: 21},
        { book_id: 47, number: 13, n_verses: 14},
    ]);
}