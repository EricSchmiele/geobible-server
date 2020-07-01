import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 66, number: 1, n_verses: 20},
        { book_id: 66, number: 2, n_verses: 29},
        { book_id: 66, number: 3, n_verses: 22},
        { book_id: 66, number: 4, n_verses: 11},
        { book_id: 66, number: 5, n_verses: 14},
        { book_id: 66, number: 6, n_verses: 17},
        { book_id: 66, number: 7, n_verses: 17},
        { book_id: 66, number: 8, n_verses: 13},
        { book_id: 66, number: 9, n_verses: 21},
        { book_id: 66, number: 10, n_verses: 11},

        { book_id: 66, number: 11, n_verses: 19},
        { book_id: 66, number: 12, n_verses: 17},
        { book_id: 66, number: 13, n_verses: 18},
        { book_id: 66, number: 14, n_verses: 20},
        { book_id: 66, number: 15, n_verses: 8},
        { book_id: 66, number: 16, n_verses: 21},
        { book_id: 66, number: 17, n_verses: 18},
        { book_id: 66, number: 18, n_verses: 24},
        { book_id: 66, number: 19, n_verses: 21},
        { book_id: 66, number: 20, n_verses: 15},

        { book_id: 66, number: 21, n_verses: 27},
        { book_id: 66, number: 22, n_verses: 21},
    ]);
}