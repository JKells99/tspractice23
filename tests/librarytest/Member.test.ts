import { Member } from '../../src/library/Member';
import { describe, it, expect, beforeEach } from '@jest/globals';


describe('Member', () => {
  let member: Member;

  beforeEach(() => {
    member = new Member('John Doe', '12345');
  });

  it('should create a member with name and memberId', () => {
    expect(member.name).toBe('John Doe');
    expect(member.memberId).toBe('12345');
    expect(member.borrowedBooks.size).toBe(0);
  });

  it('should allow a member to borrow a book', () => {
    member.borrowBook('978-0-345-33968-3');
    expect(member.borrowedBooks.size).toBe(1);
    expect(member.borrowedBooks.has('978-0-345-33968-3')).toBe(true);
  });

  it('should throw an error if the member tries to borrow a book they already have', () => {
    member.borrowBook('978-0-345-33968-3');
    expect(() => member.borrowBook('978-0-345-33968-3')).toThrow('Book already borrowed');
  });

  it('should allow a member to return a book', () => {
    member.borrowBook('978-0-345-33968-3');
    member.returnBook('978-0-345-33968-3');
    expect(member.borrowedBooks.size).toBe(0);
  });

  it('should throw an error if the member tries to return a book they have not borrowed', () => {
    expect(() => member.returnBook('978-0-345-33968-3')).toThrow('Book not borrowed by this member');
  });
});
