export class Member {
  public borrowedBooks: Map<string, Date> = new Map();

  constructor(public name: string, public memberId: string) {}

  borrowBook(isbn: string): void {
    if (this.borrowedBooks.has(isbn)) {
      throw new Error("Book already borrowed");
    }
    this.borrowedBooks.set(isbn, new Date());
  }

  returnBook(isbn: string): void {
    if (!this.borrowedBooks.has(isbn)) {
      throw new Error("Book not borrowed by this member");
    }
    this.borrowedBooks.delete(isbn);
  }
}
