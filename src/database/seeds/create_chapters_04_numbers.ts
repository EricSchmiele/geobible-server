import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('chapters').insert([
        { book_id: 4, number: 1, n_verses: 54},
        { book_id: 4, number: 2, n_verses: 34},
        { book_id: 4, number: 3, n_verses: 51},
        { book_id: 4, number: 4, n_verses: 49},
        { book_id: 4, number: 5, n_verses: 31},
        { book_id: 4, number: 6, n_verses: 27},
        { book_id: 4, number: 7, n_verses: 89},
        { book_id: 4, number: 8, n_verses: 26},
        { book_id: 4, number: 9, n_verses: 23},
        { book_id: 4, number: 10, n_verses: 36},

        { book_id: 4, number: 11, n_verses: 35},
        { book_id: 4, number: 12, n_verses: 16},
        { book_id: 4, number: 13, n_verses: 33},
        { book_id: 4, number: 14, n_verses: 45},
        { book_id: 4, number: 15, n_verses: 41},
        { book_id: 4, number: 16, n_verses: 50},
        { book_id: 4, number: 17, n_verses: 13},
        { book_id: 4, number: 18, n_verses: 32},
        { book_id: 4, number: 19, n_verses: 22},
        { book_id: 4, number: 20, n_verses: 29},

        { book_id: 4, number: 21, n_verses: 35},
        { book_id: 4, number: 22, n_verses: 41},
        { book_id: 4, number: 23, n_verses: 30},
        { book_id: 4, number: 24, n_verses: 25},
        { book_id: 4, number: 25, n_verses: 18},
        { book_id: 4, number: 26, n_verses: 65},
        { book_id: 4, number: 27, n_verses: 23},
        { book_id: 4, number: 28, n_verses: 31},
        { book_id: 4, number: 29, n_verses: 40},
        { book_id: 4, number: 30, n_verses: 16},

        { book_id: 4, number: 31, n_verses: 54},
        { book_id: 4, number: 32, n_verses: 42},
        { book_id: 4, number: 33, n_verses: 56},
        { book_id: 4, number: 34, n_verses: 29},
        { book_id: 4, number: 35, n_verses: 34},
        { book_id: 4, number: 36, n_verses: 13},
    ]);
}