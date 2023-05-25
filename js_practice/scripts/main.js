document.addEventListener('DOMContentLoaded', (event) => {
    const inputElement = document.getElementById('favchap');
    const buttonElement = document.querySelector('button');
    const listElement = document.getElementById('list');
  

    loadItems();
  

    buttonElement.addEventListener('click', function() {
      if(inputElement.value.trim() !== "") {
        addListItem(inputElement.value);
        inputElement.value = "";
        inputElement.focus();
      }
    });
  
    function addListItem(value) {
      const liElement = document.createElement('li');
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
  
      liElement.textContent = value;
  
      liElement.appendChild(deleteButton);
  
      listElement.appendChild(liElement);
  
      deleteButton.addEventListener('click', function() {
        listElement.removeChild(liElement);
        saveItems();
      });

      saveItems();
    }
  
    function saveItems() {
      const liElements = Array.from(listElement.children);
      const items = liElements.map(element => element.textContent.slice(0, -1)); 
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