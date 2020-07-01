import { Request, Response } from 'express';
import knex from '../database/connection';

class BooksController {
    async index (request: Request, response: Response) {
        const books = await knex('books').select('*');
    
        return response.json(books);
    }
}

export default BooksController;