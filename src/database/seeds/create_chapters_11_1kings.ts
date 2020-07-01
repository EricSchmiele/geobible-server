import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 11, number: 1, n_verses: 53},
        { book_id: 11, number: 2, n_verses: 46},
        { book_id: 11, number: 3, n_verses: 28},
        { book_id: 11, number: 4, n_verses: 34},
        { book_id: 11, number: 5, n_verses: 18},
        { book_id: 11, number: 6, n_verses: 38},
        { book_id: 11, number: 7, n_verses: 51},
        { book_id: 11, number: 8, n_verses: 66},
        { book_id: 11, number: 9, n_verses: 28},
        { book_id: 11, number: 10, n_verses: 29},

        { book_id: 11, number: 11, n_verses: 43},
        { book_id: 11, number: 12, n_verses: 33},
        { book_id: 11, number: 13, n_verses: 34},
        { book_id: 11, number: 14, n_verses: 31},
        { book_id: 11, number: 15, n_verses: 34},
        { book_id: 11, number: 16, n_verses: 34},
        { book_id: 11, number: 17, n_verses: 24},
        { book_id: 11, number: 18, n_verses: 46},
        { book_id: 11, number: 19, n_verses: 21},
        { book_id: 11, number: 20, n_verses: 43},

        { book_id: 11, number: 21, n_verses: 29},
        { book_id: 11, number: 22, n_verses: 53},
    ]);
}