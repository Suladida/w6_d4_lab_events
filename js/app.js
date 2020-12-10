document.addEventListener('DOMContentLoaded', () => {

  const coolForm = document.querySelector('#new-item-form');
  coolForm.addEventListener('submit', handleFormSubmit);

  // console.log('JavaScript loaded');
});


// function
const handleFormSubmit = function(event) {
  event.preventDefault();

  // grabbing the unordered list
  const list = document.querySelector('#reading-list');

  // grab the user input
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  console.log(title, author, category);
  
  // create a list item element 
  const newListItemTitle = document.createElement('li');
  newListItemTitle.textContent = title;

  const newListItemAuthor = document.createElement('li');
  newListItemAuthor.textContent = author;

  const newListItemCategory = document.createElement('li');
  newListItemCategory.textContent = category;

  // create a horizontal line item
  const horizontalLine = document.createElement('hr');

  // append the newly created item into the list?
  list.appendChild(newListItemTitle);
  list.appendChild(newListItemAuthor);
  list.appendChild(newListItemCategory);
  list.appendChild(horizontalLine);
  // document.getElementById("new-item-form").reset();
  document.querySelector('#new-item-form').reset();
};