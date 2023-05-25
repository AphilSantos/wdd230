document.addEventListener('DOMContentLoaded', (event) => {
    // Create three variables that hold references to the input, button, and list elements
    const inputElement = document.getElementById('favchap');
    const buttonElement = document.querySelector('button');
    const listElement = document.getElementById('list');
  
    // Load items from localStorage
    loadItems();
  
    // Add event listener for the Add Chapter button
    buttonElement.addEventListener('click', function() {
      // Check that input is not blank
      if(inputElement.value.trim() !== "") {
        addListItem(inputElement.value);
        // Clear the input field and focus on it
        inputElement.value = "";
        inputElement.focus();
      }
    });
  
    function addListItem(value) {
      // Create li element
      const liElement = document.createElement('li');
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
  
      // Populate the li element with the input
      liElement.textContent = value;
  
      // Append the delete button to the li element
      liElement.appendChild(deleteButton);
  
      // Append the li element to the list
      listElement.appendChild(liElement);
  
      // Add event listener to the delete button that removes the li element when clicked
      deleteButton.addEventListener('click', function() {
        listElement.removeChild(liElement);
        saveItems();
      });
  
      // Save items to localStorage
      saveItems();
    }
  
    function saveItems() {
      const liElements = Array.from(listElement.children);
      const items = liElements.map(element => element.textContent.slice(0, -1)); // Remove the '❌' character
      localStorage.setItem('items', JSON.stringify(items));
    }
  
    function loadItems() {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        items.forEach(item => {
          addListItem(item);
        });
      }
    }
  });