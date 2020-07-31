import "./styles/app.css";
import BookService from "./services/BookService";

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files;
  // console.log(title, author, isbn, img);

  //formulario virtual para enviar
  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  const bookService = new BookService();
  bookService.postBook(formData);
});
