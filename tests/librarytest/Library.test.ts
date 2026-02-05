import { Library } from '../../src/library/Library';
import { Book } from '../../src/library/Book';
import { Member } from '../../src/library/Member';


import { describe, it, expect, beforeEach } from '@jest/globals';

describe('Library', () => {
  let library: Library;
  let book: Book;
  let member: Member;

  beforeEach(() => {
    library = new Library();
    book = new Book('The Hobbit', 'J.R.R. Tolkien', '978-0-345-33968-3');
    member = new Member('John Doe', '12345');
  });

  it('should allow a book to be added', () => {
    library.addBook(book);
    expect(library.books.size).toBe(1);
    expect(library.books.get(book.isbn)).toEqual(book);
  });

  it('should throw an error if a book with the same ISBN is added', () => {
    library.addBook(book);
    expect(() => library.addBook(book)).toThrow('Book with this ISBN already exists');
  });

  it('should allow a member to be registered', () => {
    library.registerMember(member);
    expect(library.members.size).toBe(1);
    expect(library.members.get(member.memberId)).toEqual(member);
  });

  it('should throw an error if a member with the same ID is registered', () => {
    library.registerMember(member);
    expect(() => library.registerMember(member)).toThrow('Member with this ID already exists');
  });

  it('should allow a member to lend a book', () => {
    library.addBook(book);
    library.registerMember(member);
    library.lendBook(book.isbn, member.memberId);
    expect(member.borrowedBooks.has(book.isbn)).toBe(true);
  });

  it('should throw an error when lending a book that does not exist', () => {
    library.registerMember(member);
    expect(() => library.lendBook('123', member.memberId)).toThrow('Book not found');
  });

  it('should throw an error when a non-existent member tries to lend a book', () => {
    library.addBook(book);
    expect(() => library.lendBook(book.isbn, '123')).toThrow('Member not found');
  });

  it('should allow a member to return a book', () => {
    library.addBook(book);
    library.registerMember(member);
    library.lendBook(book.isbn, member.memberId);
    library.receiveBook(book.isbn, member.memberId);
    expect(member.borrowedBooks.has(book.isbn)).toBe(false);
  });

  it('should throw an error when a non-existent member tries to return a book', () => {
    expect(() => library.receiveBook(book.isbn, '123')).toThrow('Member not found');
  });
});
