// todo: make all input fields mandatory before submitting
// todo: add sorting for each column
// todo: style everything better (specifically mobile view
// todo: popup for duplicates in title and author

const myLibrary = {}

class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title
        this.author = author
        this.pages = parseInt(pages)
        this.hasRead = hasRead === "Yes"
    }

    get title() {
        return
    }
}

function addBookToLibrary(book) {
    const table_body = document.querySelector("tbody")
    const tr = document.createElement("tr")
    table_body.insertAdjacentElement("beforeend", tr)
    tr.dataset.id = `${counter}`
    tr.insertAdjacentHTML("beforeend",
        `<td> ${book.title} </td>
              <td> ${book.author} </td>
              <td> ${book.pages} </td>`)

    const has_read_toggle_cell = document.createElement("td")
    tr.insertAdjacentElement("beforeend", has_read_toggle_cell)
    const has_read_toggle = document.createElement("input");
    has_read_toggle_cell.insertAdjacentElement("beforeend", has_read_toggle)
    has_read_toggle.setAttribute("type", "checkbox")
    has_read_toggle.checked = book.hasRead
    has_read_toggle.dataset.id = `${counter}`
    has_read_toggle.addEventListener("change", event => {
        myLibrary[has_read_toggle.dataset.id].hasRead = !myLibrary[has_read_toggle.dataset.id].hasRead
        console.log(myLibrary)
    })

    const remove_button_cell = document.createElement("td")
    tr.insertAdjacentElement("beforeend", remove_button_cell)
    const remove_button = document.createElement("button")
    remove_button_cell.insertAdjacentElement("beforeend", remove_button)
    remove_button.classList.add("remove")
    remove_button.dataset.id = `${counter}`
    remove_button.textContent = "Remove"
    remove_button.addEventListener("click", event => {
        const row_to_remove = document.querySelector(`tr[data-id="${remove_button.dataset.id}"]`)
        delete myLibrary[remove_button.dataset.id]
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