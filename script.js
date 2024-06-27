const myLibrary = []

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.hasRead = hasRead === "Yes"
    this.info = function() {
        // output format: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
        let output = `${this.title} by ${this.author}, ${this.pages} pages, `
        if (this.hasRead) {
            output += "has read"
        } else {
            output += "not read yet"
        }
        return output
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    table.insertAdjacentHTML("beforeend",
        `<tr> <td> ${book.title} </td>
                <td> ${book.author} </td>
                <td> ${book.pages} </td>
                <td> ${book.hasRead} </td>
              </tr>`)
}

const form = document.forms["book-submission"]
const table = document.querySelector("table")
form.addEventListener("submit", event => {
    event.preventDefault()
    const form_data = new FormData(form)
    const title = form_data.get("title")
    const author = form_data.get("author")
    const pages = form_data.get("pages")
    const hasRead = form_data.get("has_read")
    const new_book = new Book(title, author, pages, hasRead)
    addBookToLibrary(new_book)
    form.reset()
})