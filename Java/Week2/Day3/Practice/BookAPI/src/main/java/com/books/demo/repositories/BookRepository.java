package com.books.demo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.books.demo.models.Book;


public interface BookRepository extends CrudRepository<Book,Long> {
	 // this method retrieves all the books from the database
    List<Book> findAll();
    // this method finds books with descriptions containing the search string
    // this method counts how many titles contain a certain string
    Long countByTitleContaining(String search);
    // this method deletes a book that starts with a specific title
    Long deleteByTitleStartingWith(String search);

}
