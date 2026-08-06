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

    // BORROW BOOK
    @PostMapping("/borrow")
    public String borrowBook(
            @RequestParam String memberId,
            @RequestParam String bookId) {
return library.borrowBook(memberId, bookId);
    }

// RETURN BOOK
@PostMapping("/return")
public String returnBook(
        @RequestParam String memberId,
        @RequestParam String bookId) {

   return library.returnBook(memberId, bookId);

}
// DELETE BOOK
@DeleteMapping("/{id}")
public String deleteBook(@PathVariable String id) {

    library.removeBook(id);

    return "Book deleted successfully.";
}

@GetMapping("/sort/title")
public ArrayList<Book> sortBooksByTitle(){

    return library.getSortedBooksByTitle();

}

@GetMapping("/sort/author")
public ArrayList<Book> sortBooksByAuthor(){

    return library.getSortedBooksByAuthor();

}

@GetMapping("/sort/category")
public ArrayList<Book> sortBooksByCategory(){

    return library.getSortedBooksByCategory();

}
}
