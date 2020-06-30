import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/books', async (request, response) => {
    const books = await knex('books').select('*');

    return response.json(books);
});

export default routes;