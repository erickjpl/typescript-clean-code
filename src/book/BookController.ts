import { Router as IRouter } from 'express';
import Router from 'express-promise-router';
import { autoInjectable } from 'tsyringe';
import BookService from './BookService';

@autoInjectable()
export default class BookController {
  bookService: BookService;
  router: IRouter;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = Router();
  }

  getBooksRoute () {
    return this.bookService.getBooks();
  }

  routes () {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}