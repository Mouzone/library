const myLibrary = []

function Book() {

}

function addBookToLibrary() {

}

const form = document.forms["book-submission"]
form.addEventListener("submit", event => {
    event.preventDefault()
    const form_data = new FormData(form)
    const title = form_data.get("title")
    const author = form_data.get("author")
    const pages = form_data.get("pages")
    const hasRead = form_data.get("has_read")
    console.log(title, author, pages, hasRead)
})