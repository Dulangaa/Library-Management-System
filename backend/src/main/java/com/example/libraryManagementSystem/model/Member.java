package com.example.libraryManagementSystem.model;

import java.util.ArrayList;
import java.util.List;

public class Member {
    private String memberId;
    private String name;
    private ArrayList<Book> borrowedBooks;

    public Member(String memberId, String name) {
        this.memberId = memberId;
        this.name = name;
        borrowedBooks=new ArrayList<>();
    }

    public void borrowBook(Book book) {
        borrowedBooks.add(book);
    }

    public void returnBook(Book book) {
        borrowedBooks.remove(book);
    }
    public String getMemberId() {
        return memberId;
    }

    public String getName() {
        return name;
    }
    public List<Book> getBorrowedBooks() {
        return borrowedBooks;
    }
    public void displayMember(){

        System.out.println("------------------------");
        System.out.println("Member ID : " + memberId);
        System.out.println("Name      : " + name);

        System.out.println("Borrowed Books:");

        if(borrowedBooks.isEmpty()){
            System.out.println("None");
        }
        else{

            for(Book book : borrowedBooks){
                System.out.println(book.getId()+ " -> " +book.getTitle());
            }

        }
    }
}
