import { Book } from './Book';
import { Member } from './Member';

export class Library {
  public books: Map<string, Book> = new Map();
  public members: Map<string, Member> = new Map();
  public fruits: Array<string> = ['apple', 'banana', 'orange'];


  
  addBook(book: Book): void {
    if (this.books.has(book.isbn)) {
      throw new Error("Book with this ISBN already exists");
    }
    this.books.set(book.isbn, book);
  }

  registerMember(member: Member): void {
    if (this.members.has(member.memberId)) {
      throw new Error("Member with this ID already exists");
    }
    this.members.set(member.memberId, member);
  }

  lendBook(isbn: string, memberId: string): void {
    const book = this.books.get(isbn);
    if (!book) {
      throw new Error("Book not found");
    }

    const member = this.members.get(memberId);
    if (!member) {
      throw new Error("Member not found");
    }

    member.borrowBook(isbn);
  }

  receiveBook(isbn: string, memberId: string): void {
    const member = this.members.get(memberId);
    if (!member) {
      throw new Error("Member not found");
    }

    member.returnBook(isbn);
  }
}
