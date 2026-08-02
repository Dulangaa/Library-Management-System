package com.example.libraryManagementSystem.model;

public class Book {
    private String id;
    private String title;
    private String author;
    private String category;
    private boolean available;

    public Book(  String id, String title,String author,String category) {
        this.author = author;
        this.available = true;
        this.category = category;
        this.id = id;
        this.title = title;
    }
    public Book() {
    }
    public String getAuthor() {
        return author;
    }

    public boolean isAvailable() {
        return available;
    }

//    public void setAvailable(boolean available) {
//        this.available = available;
//    }

    public String getCategory() {
        return category;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void borrow(){
        available=false;

    }
    public void returnBook(){
        available=true;
    }
    public void displayBook() {

        System.out.println("--------------------------------");
        System.out.println("Book ID   : " + id);
        System.out.println("Title     : " + title);
        System.out.println("Author    : " + author);
        System.out.println("Category  : " + category);
        System.out.println("Available : " + available);
    }

}
