const myLibrary = {}

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.hasRead = hasRead === "Yes"
}

function addBookToLibrary(book) {
    const table = document.getElementById("library")
    const table_body = document.querySelector("tbody")
    const tr = document.createElement("tr")
    table_body.insertAdjacentElement("beforeend", tr)
    tr.dataset.row = `${counter}`
    tr.insertAdjacentHTML("beforeend",
        `<td> ${book.title} </td>
              <td> ${book.author} </td>
              <td> ${book.pages} </td>
              <td> ${book.hasRead} </td>`)
    const remove_button_cell = document.createElement("td")
    tr.insertAdjacentElement("beforeend", remove_button_cell)
    const remove_button = document.createElement("button")
    remove_button_cell.insertAdjacentElement("beforeend", remove_button)
    remove_button.classList.add("remove")
    remove_button.dataset.row = `${counter}`
    remove_button.textContent = "Remove"
    remove_button.addEventListener("click", event => {
        // fix this section
        const row_to_remove = document.querySelector(`tr[data-row="${remove_button.dataset.row}"]`)
        delete myLibrary[remove_button.dataset.row]
        row_to_remove.remove()
    })

    myLibrary[counter] = book
    counter++
}

const form = document.forms["book-submission"]
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

let counter = 0