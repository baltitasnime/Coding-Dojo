package com.books.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.books.demo.models.Book;
import com.books.demo.repositories.BookRepository;

@Service
public class BookService {
	// adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // delete a book
    public String deleteBook(Long id) {
    	 bookRepository.deleteById(id);
    	 return "deleted";
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
	

}
