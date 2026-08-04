// =====================================
// GLOBAL VARIABLES
// =====================================

let books = [];
let members = [];


// =====================================
// LOAD BOOKS FROM JAVA BACKEND
// =====================================

async function loadBooks() {

    try {

        const response = await fetch("http://localhost:8080/books");

        if (!response.ok) {
            throw new Error("Could not get books");
        }

        books = await response.json();

        displayBooks();

        updateDashboard();

    } catch (error) {

        console.error("Error loading books:", error);

        document.getElementById("bookList").innerHTML =
            "<p>Could not connect to Java backend.</p>";

    }

}


// =====================================
// ADD BOOK
// =====================================

document.getElementById("bookForm").addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        const id =
            document.getElementById("bookId").value;

        const title =
            document.getElementById("bookTitle").value;

        const author =
            document.getElementById("bookAuthor").value;

        const category =
            document.getElementById("bookCategory").value;


        const book = {

            id: id,
            title: title,
            author: author,
            category: category

        };


        try {

            const response = await fetch(
                "http://localhost:8080/books",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(book)

                }
            );


            if (!response.ok) {

                throw new Error("Could not add book");

            }


            alert("Book added successfully! 📚");


            document
                .getElementById("bookForm")
                .reset();


            await loadBooks();


        } catch (error) {

            console.error(
                "Error adding book:",
                error
            );

            alert("Could not add book.");

        }

    }
);


// =====================================
// DISPLAY BOOKS
// =====================================

function displayBooks() {

    const bookList =
        document.getElementById("bookList");


    bookList.innerHTML = "";


    if (books.length === 0) {

        bookList.innerHTML =
            "<p>No books available.</p>";

        return;

    }


    books.forEach(function(book) {

        const bookCard =
            document.createElement("div");


        bookCard.className =
            "book-card";


        const title =
            document.createElement("h3");

        title.textContent =
            book.title;


        const id =
            document.createElement("p");

        id.innerHTML =
            "<strong>ID:</strong> " +
            book.id;


        const author =
            document.createElement("p");

        author.innerHTML =
            "<strong>Author:</strong> " +
            book.author;


        const category =
            document.createElement("p");

        category.innerHTML =
            "<strong>Category:</strong> " +
            book.category;


        const status =
            document.createElement("p");

        status.innerHTML =
            "<strong>Status:</strong> " +
            (
                book.available
                    ? "Available"
                    : "Borrowed"
            );


        bookCard.appendChild(title);

        bookCard.appendChild(id);

        bookCard.appendChild(author);

        bookCard.appendChild(category);

        bookCard.appendChild(status);


        bookList.appendChild(bookCard);

    });

}


// =====================================
// UPDATE BOOK DASHBOARD
// =====================================

function updateDashboard() {

    document
        .getElementById("bookCount")
        .textContent =
            books.length;


    const borrowedBooks =
        books.filter(function(book) {

            return book.available === false;

        });


    document
        .getElementById("borrowedCount")
        .textContent =
            borrowedBooks.length;

}


// =====================================
// SEARCH BOOKS
// =====================================

function searchBooks() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const results =
        books.filter(function(book) {

            return (

                book.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                book.author
                    .toLowerCase()
                    .includes(keyword)

                ||

                book.category
                    .toLowerCase()
                    .includes(keyword)

            );

        });


    const bookList =
        document.getElementById("bookList");


    bookList.innerHTML = "";


    if (results.length === 0) {

        bookList.innerHTML =
            "<p>No books found.</p>";

        return;

    }


    results.forEach(function(book) {

        const bookCard =
            document.createElement("div");


        bookCard.className =
            "book-card";


        bookCard.innerHTML = `

            <h3>${book.title}</h3>

            <p>
                <strong>ID:</strong>
                ${book.id}
            </p>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Category:</strong>
                ${book.category}
            </p>

            <p>
                <strong>Status:</strong>
                ${
                    book.available
                        ? "Available"
                        : "Borrowed"
                }
            </p>

        `;


        bookList.appendChild(bookCard);

    });

}


// =====================================
// VIEW BOOKS BUTTON
// =====================================

function showBooks() {

    loadBooks();

}


// =====================================
// LOAD MEMBERS FROM JAVA BACKEND
// =====================================

async function loadMembers() {

    try {

        const response =
            await fetch(
                "http://localhost:8080/members"
            );


        if (!response.ok) {

            throw new Error(
                "Could not get members"
            );

        }


        members =
            await response.json();


        displayMembers();


        updateMemberDashboard();


    } catch (error) {

        console.error(
            "Error loading members:",
            error
        );


        document
            .getElementById("memberList")
            .innerHTML =
                "<p>Could not connect to Java backend.</p>";

    }

}


// =====================================
// ADD MEMBER
// =====================================

document
    .getElementById("memberForm")
    .addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const memberId =
                document
                    .getElementById("memberId")
                    .value;


            const memberName =
                document
                    .getElementById("memberName")
                    .value;


            const member = {

                memberId: memberId,

                name: memberName

            };


            try {

                const response =
                    await fetch(
                        "http://localhost:8080/members",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(member)

                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Could not add member"
                    );

                }


                alert(
                    "Member added successfully! 👤"
                );


                document
                    .getElementById("memberForm")
                    .reset();


                await loadMembers();


            } catch (error) {

                console.error(
                    "Error adding member:",
                    error
                );


                alert(
                    "Could not add member."
                );

            }

        }
    );


// =====================================
// DISPLAY MEMBERS
// =====================================

function displayMembers() {

    const memberList =
        document.getElementById("memberList");


    memberList.innerHTML = "";


    if (members.length === 0) {

        memberList.innerHTML =
            "<p>No members registered.</p>";

        return;

    }


    members.forEach(function(member) {

        const memberCard =
            document.createElement("div");


        memberCard.className =
            "member-card";


        memberCard.innerHTML = `

            <h3>${member.name}</h3>

            <p>
                <strong>Member ID:</strong>
                ${member.memberId}
            </p>

        `;


        memberList.appendChild(
            memberCard
        );

    });

}


// =====================================
// UPDATE MEMBER COUNT
// =====================================

function updateMemberDashboard() {

    document
        .getElementById("memberCount")
        .textContent =
            members.length;

}


// =====================================
// VIEW MEMBERS BUTTON
// =====================================

function showMembers() {

    loadMembers();

}
// =====================================
// BORROW BOOK
// =====================================

document
    .getElementById("borrowForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const memberId =
            document.getElementById("borrowMemberId").value;

        const bookId =
            document.getElementById("borrowBookId").value;

        try {

            const response = await fetch(
                `http://localhost:8080/books/borrow?memberId=${memberId}&bookId=${bookId}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Could not borrow book");
            }

            alert("Book borrowed successfully! 📖");

            document
                .getElementById("borrowForm")
                .reset();

            // Reload books so status changes to Borrowed
            await loadBooks();

        } catch (error) {

            console.error("Error borrowing book:", error);

            alert("Could not borrow book.");

        }

    });
// =====================================
// RETURN BOOK
// =====================================

document
    .getElementById("returnForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const memberId =
            document.getElementById("returnMemberId").value;

        const bookId =
            document.getElementById("returnBookId").value;

        try {

            const response = await fetch(
                `http://localhost:8080/books/return?memberId=${memberId}&bookId=${bookId}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Could not return book");
            }

            alert("Book returned successfully! 🔄📚");

            document
                .getElementById("returnForm")
                .reset();

            // Reload books
            await loadBooks();

        } catch (error) {

            console.error(
                "Error returning book:",
                error
            );

            alert("Could not return book.");

        }

    });


// =====================================
// LOAD DATA WHEN PAGE OPENS
// =====================================

loadBooks();

loadMembers();