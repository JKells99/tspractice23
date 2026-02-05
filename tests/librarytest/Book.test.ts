import { Book } from '../../src/library/Book';
import { describe, it, expect } from '@jest/globals';

describe('Book', () => {
  it('should create a book with title, author, and isbn', () => {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', '978-0-345-33968-3');
    expect(book.title).toBe('The Hobbit');
    expect(book.author).toBe('J.R.R. Tolkien');
    expect(book.isbn).toBe('978-0-345-33968-3');
  });
});
