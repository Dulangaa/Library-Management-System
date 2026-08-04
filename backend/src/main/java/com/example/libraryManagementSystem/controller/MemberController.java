package com.example.libraryManagementSystem.controller;

import com.example.libraryManagementSystem.model.Member;
import com.example.libraryManagementSystem.service.Library;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/members")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class MemberController {

    private final Library library;

    public MemberController(Library library) {
        this.library = library;
    }

    // GET all members
    @GetMapping
    public ArrayList<Member> getAllMembers() {
        return library.getAllMembers();
    }

    // ADD a new member
    @PostMapping
    public Member addMember(@RequestBody Member member) {

        library.addMember(member);

        return member;
    }
}

