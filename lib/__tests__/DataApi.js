import DataApi from '../DataApi';
import {data} from '../testData';

const api = new DataApi(data);

describe('DataApi',() => {
	it('exposes books as an object',() => {
		const books =api.getBooks();
		const bookId = data.books[0].id;
		const bookTitle = data.books[0].title;
		
		//console.log(bookId , bookTitle);
		expect(books).toHaveProperty(bookId);
		expect(books[bookId].title).toBe(bookTitle);
	});
	
	it('exposes authors as an object',() => {
		const authors =api.getAuthors();
		const authorId = data.authors[0].id;
		const authorFirstName = data.authors[0].firstName;
		
		//console.log(authorId,authorFirstName);
		expect(authors).toHaveProperty(authorId);
		expect(authors[authorId].firstName).toBe(authorFirstName);
	});
});