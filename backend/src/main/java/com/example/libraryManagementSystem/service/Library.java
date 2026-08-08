

package com.example.libraryManagementSystem.service;


import org.springframework.stereotype.Service;
import com.example.libraryManagementSystem.model.Book;
import com.example.libraryManagementSystem.model.Member;

import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

@Service
public class Library {
    private HashMap<String,Book> books;
    private HashMap<String,Member> members;

    public Library() {

        books=new HashMap<>();
        members=new HashMap<>();
    }

    public void addBook(Book book){
        books.put(book.getId(),book);

        System.out.println(book.getTitle() + " added");
    }
    public void addMember(Member member){
        members.put(member.getMemberId(),member);
        System.out.println(member.getName() + " registered successfully.");
    }
    public void searchBook(String id){
        Book b=books.get(id);

        if (b !=null){
            b.displayBook();
        }else {
            System.out.println("not found");
        }
    }
    public void searchByAuthor(String keyword) {
        boolean found = false;

        for (Book book : books.values()) {
            if (book.getAuthor().toLowerCase().contains(keyword.toLowerCase())){
                book.displayBook();
                found=true;
            }
        }
        if(!found){
            System.out.println("No books found");
        }
    }
    public void searchByTitle(String keyword){
        boolean found= false;
        for(Book book : books.values()){

            if(book.getTitle()
                    .toLowerCase()
                    .contains(keyword.toLowerCase())){

                book.displayBook();
                found = true;
            }
        }

        if (!found){
            System.out.println("No books found");
        }

    }

    public void displayAllBooks() {
        System.out.println("Number of books: " + books.size());
        if (books.isEmpty()) {
            System.out.println("No books in the library.");
            return;
        }

        for (Map.Entry<String, Book> entry : books.entrySet()) {
            //System.out.println("Found book...");
            entry.getValue().displayBook();
        }
    }
    public void displayAllMembers(){
        System.out.println("Number of members: "+members.size());
        if (members.isEmpty()){
            System.out.println("No members registered.");
            return;
        }

        for (Map.Entry<String, Member> stringMemberEntry : members.entrySet()) {
            stringMemberEntry.getValue().displayMember();
        }
     
    }
    public void removeBook(String id){

        if (books.isEmpty()){

            System.out.println("no books");
            return;
        }
        Book removebook=books.remove(id);

        if (removebook !=null){
            System.out.println("Removed successfully");
        }else {
            System.out.println("book not exist");
        }
    }

    public String borrowBook(String memberId, String bookId){
        Book book=books.get(bookId);
        Member member=members.get(memberId);

        if (member == null){
            return "Member not found.";
        } else if (book == null) {
            return "Book not found.";
        } else if (!book.isAvailable()) {
            return "Book already borrowed.";
        }else {
            book.borrow();
            member.borrowBook(book);
            return "Book borrowed successfully.";
        }
    }

    public String returnBook(String memberId, String bookId){
        Book book=books.get(bookId);
        Member member=members.get(memberId);

        if (member == null){
            return "Member not found.";
        } else if (book == null) {
            return "Book not found.";
        } else if (book.isAvailable()) {
            return "Book already returned.";
        }else {
            book.returnBook();
            member.returnBook(book);
            return "Book returned successfully.";
        }
    }

    public void sortBooksByTitle(){
        if(books.isEmpty()){
            System.out.println("No books available.");
            return;
        }

        ArrayList<Book> bookArrayList=new ArrayList<>(books.values());

        for (int i = 0; i < bookArrayList.size()-1; i++) {
            int minIndex=i;

            for (int j = i+1; j < bookArrayList.size(); j++) {
                if (bookArrayList.get(j).getTitle().compareToIgnoreCase(bookArrayList.get(minIndex).getTitle())<0){
                    minIndex=j;
                }

            }

            Book temp=bookArrayList.get(i);
//bookArrayList.get(i)=bookArrayList.get(j);
            bookArrayList.set(i,bookArrayList.get(minIndex));
            bookArrayList.set(minIndex,temp);

        }
        System.out.println("Books sorted by title:");
        for (Book book:bookArrayList){
            book.displayBook();
        }
    }

    public void sortBooksByCategory(){
        if(books.isEmpty()){
            System.out.println("No books available.");
            return;
        }

        ArrayList<Book> bookArrayList=new ArrayList<>(books.values());

        for (int i = 0; i < bookArrayList.size()-1; i++) {
            int minIndex=i;

            for (int j = i+1; j < bookArrayList.size(); j++) {
                if (bookArrayList.get(j).getCategory().compareToIgnoreCase(bookArrayList.get(minIndex).getCategory())<0){
                    minIndex=j;
                }

            }

            Book temp=bookArrayList.get(i);
//bookArrayList.get(i)=bookArrayList.get(j);
            bookArrayList.set(i,bookArrayList.get(minIndex));
            bookArrayList.set(minIndex,temp);

        }
        System.out.println("Books sorted by category:");
        for (Book book:bookArrayList){
            book.displayBook();
        }
    }

    public void sortBooksByAuthor(){
        if(books.isEmpty()){
            System.out.println("No books available.");
            return;
        }

        ArrayList<Book> bookArrayList=new ArrayList<>(books.values());

        for (int i = 0; i < bookArrayList.size()-1; i++) {
            int minIndex=i;

            for (int j = i+1; j < bookArrayList.size(); j++) {
                if (bookArrayList.get(j).getAuthor().compareToIgnoreCase(bookArrayList.get(minIndex).getAuthor())<0){
                    minIndex=j;
                }

            }

            Book temp=bookArrayList.get(i);
            bookArrayList.set(i,bookArrayList.get(minIndex));
            bookArrayList.set(minIndex,temp);

        }
        System.out.println("Books sorted by author:");
        for (Book book:bookArrayList){
            book.displayBook();
        }
    }
    public ArrayList<Book> getAllBooks() {
        return new ArrayList<>(books.values());
    }

    public ArrayList<Member> getAllMembers() {
        return new ArrayList<>(members.values());
    }
    public ArrayList<Book> getSortedBooksByTitle(){

    ArrayList<Book> bookList = new ArrayList<>(books.values());

    bookList.sort((b1, b2) ->
            b1.getTitle().compareToIgnoreCase(b2.getTitle())
    );

    return bookList;
}


public ArrayList<Book> getSortedBooksByAuthor(){

    ArrayList<Book> bookList = new ArrayList<>(books.values());

    bookList.sort((b1, b2) ->
            b1.getAuthor().compareToIgnoreCase(b2.getAuthor())
    );

    return bookList;
}


public ArrayList<Book> getSortedBooksByCategory(){

    ArrayList<Book> bookList = new ArrayList<>(books.values());

    bookList.sort((b1, b2) ->
            b1.getCategory().compareToIgnoreCase(b2.getCategory())
    );

    return bookList;
}
}


