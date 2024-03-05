package com.books.demo.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.books.demo.models.Book;
import com.books.demo.services.BookService;






//... imports removed for brevity
@Controller
@RequestMapping("/book")
public class BookController {
 private final BookService bookService;
 
 public BookController(BookService bookService) {
     this.bookService = bookService;
 }
 

 public String index(Model model) {
     List<Book> book = bookService.allBooks();
     model.addAttribute("book", book);
     return "/book/index.jsp";
 }
}

