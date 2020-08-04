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
      div.className = "animated fadeInRight";
      div.innerHTML = `
        <div class="card m-2">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="${ book.imagePath }" alt="" class="img-fluid"/>
              </div>
              <div class="col-md-8">
                  <div class="card-block px-2">
                      <label>Title:</label>
                      <h4 class="card-title">${ book.title }</h4>
                  </div>
                  <div class="card-block px-2">
                    <label>Author:</label> 
                      <p class="card-text">${ book.author }</p>
                  </div>
                  <div class="card-block px-2">
                      <label>Isbn:</label>
                      <p class="card-text">${ book.isbn }</p>
                  </div>
                  <div class="card-block px-2">
                      <a href="#" class="btn btn-danger delete m-2" _id="${ book._id }">Eliminar</a>
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

  renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement("div");
    div.className = `alert alert-${colorMessage} message`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".col-md-4");
    const bookForm = document.querySelector("#book-form");
    
    container.insertBefore(div, bookForm);
    setTimeout(() => {
      document.querySelector(".message").remove();
    }, secondsToRemove);
  }

  //quitar elemento de la pantall
  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderBook();
  }
}

// module.exports = UI; => no anduvo
export default UI;
