import express from 'express';

import LocationsController from './controllers/LocationsController'
import BooksController from './controllers/BooksController'

const routes = express.Router();
const locationsController = new LocationsController();
const booksController = new BooksController();

routes.get('/books', booksController.index);

routes.post('/locations', locationsController.create);

export default routes;