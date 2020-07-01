import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 12, number: 1, n_verses: 18},
        { book_id: 12, number: 2, n_verses: 25},
        { book_id: 12, number: 3, n_verses: 27},
        { book_id: 12, number: 4, n_verses: 44},
        { book_id: 12, number: 5, n_verses: 27},
        { book_id: 12, number: 6, n_verses: 33},
        { book_id: 12, number: 7, n_verses: 20},
        { book_id: 12, number: 8, n_verses: 29},
        { book_id: 12, number: 9, n_verses: 37},
        { book_id: 12, number: 10, n_verses: 36},

        { book_id: 12, number: 11, n_verses: 21},
        { book_id: 12, number: 12, n_verses: 21},
        { book_id: 12, number: 13, n_verses: 25},
        { book_id: 12, number: 14, n_verses: 29},
        { book_id: 12, number: 15, n_verses: 38},
        { book_id: 12, number: 16, n_verses: 20},
        { book_id: 12, number: 17, n_verses: 41},
        { book_id: 12, number: 18, n_verses: 37},
        { book_id: 12, number: 19, n_verses: 37},
        { book_id: 12, number: 20, n_verses: 21},

        { book_id: 12, number: 21, n_verses: 26},
        { book_id: 12, number: 22, n_verses: 20},
        { book_id: 12, number: 23, n_verses: 37},
        { book_id: 12, number: 24, n_verses: 20},
        { book_id: 12, number: 25, n_verses: 30},
    ]);
}