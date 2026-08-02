let books = [];

// GET BOOKS FROM JAVA BACKEND

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

    console.log(error);

    document.getElementById("bookList").innerHTML =
        "<p>Could not connect to Java backend.</p>";

}


}

// ADD BOOK

document.getElementById("bookForm").addEventListener("submit", async function(event) {


event.preventDefault();

const id = document.getElementById("bookId").value;
const title = document.getElementById("bookTitle").value;
const author = document.getElementById("bookAuthor").value;
const category = document.getElementById("bookCategory").value;

const book = {
    id: id,
    title: title,
    author: author,
    category: category
};

try {

    const response = await fetch("http://localhost:8080/books", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(book)

    });

    if (!response.ok) {
        throw new Error("Could not add book");
    }

    alert("Book added successfully! 📚");

    document.getElementById("bookForm").reset();

    await loadBooks();

} catch (error) {

    console.log(error);

    alert("Could not add book.");

}

});



function displayBooks() {

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    if (books.length === 0) {
        bookList.innerHTML = "<p>No books available.</p>";
        return;
    }

    books.forEach(function(book) {

        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const id = document.createElement("p");
        id.innerHTML = "<strong>ID:</strong> " + book.id;

        const author = document.createElement("p");
        author.innerHTML = "<strong>Author:</strong> " + book.author;

        const category = document.createElement("p");
        category.innerHTML = "<strong>Category:</strong> " + book.category;

        const status = document.createElement("p");
        status.innerHTML =
            "<strong>Status:</strong> " +
            (book.available ? "Available" : "Borrowed");

        bookCard.appendChild(title);
        bookCard.appendChild(id);
        bookCard.appendChild(author);
        bookCard.appendChild(category);
        bookCard.appendChild(status);

        bookList.appendChild(bookCard);

    });
}

function updateDashboard() {


document.getElementById("bookCount").textContent = books.length;

const borrowedBooks = books.filter(function(book) {
    return book.available === false;
});

document.getElementById("borrowedCount").textContent =
    borrowedBooks.length;


}


function searchBooks() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const results = books.filter(function(book) {

        return (
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.category.toLowerCase().includes(keyword)
        );

    });

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    if (results.length === 0) {

        bookList.innerHTML = "<p>No books found.</p>";

        return;
    }

    results.forEach(function(book) {

        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const id = document.createElement("p");
        id.innerHTML = "<strong>ID:</strong> " + book.id;

        const author = document.createElement("p");
        author.innerHTML = "<strong>Author:</strong> " + book.author;

        const category = document.createElement("p");
        category.innerHTML = "<strong>Category:</strong> " + book.category;

        const status = document.createElement("p");
        status.innerHTML =
            "<strong>Status:</strong> " +
            (book.available ? "Available" : "Borrowed");

        bookCard.appendChild(title);
        bookCard.appendChild(id);
        bookCard.appendChild(author);
        bookCard.appendChild(category);
        bookCard.appendChild(status);

        bookList.appendChild(bookCard);

    });
}
function showBooks() {


displayBooks();


}

// =====================================
// VIEW MEMBERS
// =====================================

function showMembers() {


alert("Member section coming soon! 👤");


}

// =====================================
// LOAD BOOKS WHEN PAGE OPENS
// =====================================

loadBooks();
