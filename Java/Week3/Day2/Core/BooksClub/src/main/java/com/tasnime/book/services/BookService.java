package com.tasnime.book.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasnime.book.models.Book;
import com.tasnime.book.repositories.BookRepo;
@Service
public class BookService {
	@Autowired
	private BookRepo bookRepo;
	
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	public Book findOne(Long id) {
		Optional<Book> opBook = bookRepo.findById(id);
		if(opBook.isPresent()) {
			return opBook.get();
		}else {
			return null;
		}
	}
	
	public Book create(Book book) {
		return bookRepo.save(book);
	}
	
	public Book update(Book book) {
		return bookRepo.save(book);
	}
	
	public void delete(Long id) {
		bookRepo.deleteById(id);
	}

}
