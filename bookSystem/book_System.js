let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const AuthorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = parseInt(document.getElementById('pagesNumber').value);
    if(bookName && AuthorName && bookDescription && !isNaN(pageNumber)) {
        const book = {
            name: bookName,
            author: AuthorName,
            description: bookDescription,
            pages: pageNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>หมายเลขหนังสือ: ${index + 1}</h1>
    <p>ชื่อหนังสือ: ${book.name}</p>
    <p>ชื่อผู้แต่ง: ${book.author}</p>
    <p>คำอธิบาย: ${book.description}</p>
    <p>จำนวนหน้า: ${book.pages}</p>
    <button onclick = "editbook(${index})">แก้ไข</button>
    <button onclick = "deletebook(${index})">ลบ</button>`
);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.author;
    document.getElementById('bookDescription').value = book.description;
    document.getElementById('pagesNumber').value = book.pages;
    books.splice(index, 1); // ลบรายการเก่า
    showbooks(); // รีเฟรชรายการ
  }

function deletebook(index) {
    books.splice(index, 1);
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

