document.addEventListener('DOMContentLoaded', () => {
  
  // grab parent element  (form)
  const coolForm = document.querySelector('#new-item-form');
  coolForm.addEventListener('submit', handleFormSubmit);


  // grab the body to add the delete button
  const body = document.querySelector('body');

  // create a new button (for deleting stuff)
  const newButton = document.createElement('button');
  newButton.textContent = '🚮';
  // add an event listener to the newly created button
  newButton.addEventListener('click', hanldeDeleteButton);
  
  // add the delete button in the dom
  body.appendChild(newButton);

  // console.log('JavaScript loaded');
});


// functions
const hanldeDeleteButton = function() {
  // grabbing the unordered list
  const list = document.querySelector('#reading-list');
  list.innerHTML = '';
};

const handleFormSubmit = function(event) {
  event.preventDefault();

  // grabbing the unordered list
  const list = document.querySelector('#reading-list');


  // create a division
  const div = document.createElement('div');

  // giving div a class name
  div.classList.add('reading_item');

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
  // const horizontalLine = document.createElement('hr');

  // document.getElementById("new-item-form").reset();
  document.querySelector('#new-item-form').reset();


  // append the li items in the div
  div.appendChild(newListItemTitle);
  div.appendChild(newListItemAuthor);
  div.appendChild(newListItemCategory);
  // list.appendChild(horizontalLine);   <--- appends the horizontal line 

  // append div to ul
  list.appendChild(div);

};