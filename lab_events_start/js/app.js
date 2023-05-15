document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit",handleForm)

  const deleteButton = document.querySelector("#delete-button")
  deleteButton.addEventListener("click",handleDelete)



})


const handleForm = function(event) {
  event.preventDefault()

  // const holdMyThings = []
  // const book = {}

  const formTitle = event.target.title.value
  const formAuthor = event.target.author.value
  const formCategory = event.target.category.value

  const readList = document.querySelector('#reading-list')
  const newListItem = document.createElement("li")

  newListItem.classList.add("book")

  const paraTitle = document.createElement("p")
  const paraAuthor = document.createElement("p")
  const paraCategory = document.createElement("p")
  
  paraTitle.textContent = `Title: ${formTitle}`
  paraAuthor.textContent = `Author: ${formAuthor}`
  paraCategory.textContent = `Category: ${formCategory}`

  newListItem.appendChild(paraTitle)
  newListItem.appendChild(paraAuthor)
  newListItem.appendChild(paraCategory)

  readList.appendChild(newListItem)
  // console.log(my_list[0])

  console.log(formTitle,formAuthor,formCategory)
  event.target.reset() 

}

const handleDelete = function (event) {
  console.log('aaaaaaa')
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';}