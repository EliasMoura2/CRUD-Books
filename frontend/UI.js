import BookService from "./services/BookService";
import { format } from "timeago.js";

const bookService = new BookService();

class UI {
  async renderBook() {
    const books = await bookService.getBooks();
    // console.log(books);
    const booksCardContainer = document.getElementById("books-cards");
    booksCardContainer.innerHTML = "";
    books.forEach((book) => {
      const div = document.createElement("div");
      div.className = "";
      div.innerHTML = `
            <div class="card m-2">
                <div class="row">
                    <div class="col-md-4">
                        <img src="http://localhost:4550${
                          book.imagePath
                        }" alt="" class="img-fluid"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-block px-2">
                            <h4 class="card-title">${book.title}</h4>
                            <p class="card-text">${book.author}</p>
                            <a href="#" class="btn btn-danger delete m-2" _id="${
                              book._id
                            }">X</a>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    ${format(book.create_at)}
                </div>
            </div>
          `;
      booksCardContainer.appendChild(div);
    });
  }

  // maneja el evento de creacion
  async addNewBook(book) {
    await bookService.postBook(book);
    this.clearBookForm();
    this.renderBook();
  }

  clearBookForm() {
    document.getElementById("book-form").reset();
  }

  renderMessage() {}

  //quitar elemento de la pantall
  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderBook();
  }
}

// module.exports = UI; => no anduvo
export default UI;
