import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 43, number: 1, n_verses: 51},
        { book_id: 43, number: 2, n_verses: 25},
        { book_id: 43, number: 3, n_verses: 36},
        { book_id: 43, number: 4, n_verses: 54},
        { book_id: 43, number: 5, n_verses: 47},
        { book_id: 43, number: 6, n_verses: 71},
        { book_id: 43, number: 7, n_verses: 53},
        { book_id: 43, number: 8, n_verses: 59},
        { book_id: 43, number: 9, n_verses: 41},
        { book_id: 43, number: 10, n_verses: 42},

        { book_id: 43, number: 11, n_verses: 57},
        { book_id: 43, number: 12, n_verses: 50},
        { book_id: 43, number: 13, n_verses: 38},
        { book_id: 43, number: 14, n_verses: 31},
        { book_id: 43, number: 15, n_verses: 27},
        { book_id: 43, number: 16, n_verses: 33},
        { book_id: 43, number: 17, n_verses: 26},
        { book_id: 43, number: 18, n_verses: 40},
        { book_id: 43, number: 19, n_verses: 42},
        { book_id: 43, number: 20, n_verses: 31},

        { book_id: 43, number: 21, n_verses: 25},
    ]);
}