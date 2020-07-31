import "./styles/app.css";
import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBook();
});

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

  const ui = new UI();
  ui.addNewBook(formData);
  ui.renderMessage("New book add", "success", 3000);
});

document.getElementById("books-cards").addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    // console.log("Eliminando");
    // console.log(event.target.getAttribute("_id"));
    const ui = new UI();
    ui.deleteBook(event.target.getAttribute("_id"));
    ui.renderMessage("Book removed", "danger", 2000);
  }
});
