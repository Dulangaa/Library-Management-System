package com.example.libraryManagementSystem.controller;

import com.example.libraryManagementSystem.model.Book;
import com.example.libraryManagementSystem.service.Library;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class BookController {


    private final Library library;

    public BookController(Library library) {
        this.library = library;
    }

    // GET all books
    @GetMapping
    public ArrayList<Book> getAllBooks() {
        return library.getAllBooks();
    }

    // ADD a new book
    @PostMapping
    public Book addBook(@RequestBody Book book) {

        library.addBook(book);

        return book;
    }

}
