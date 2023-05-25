
document.addEventListener('DOMContentLoaded', (event) => {
  // Create three variables that hold references to the input, button, and list elements
  const inputElement = document.getElementById('favchap');
  const buttonElement = document.querySelector('button');
  const listElement = document.getElementById('list');

  // Add event listener for the Add Chapter button
  buttonElement.addEventListener('click', function() {
    // Check that input is not blank
    if(inputElement.value.trim() !== "") {
      // Create li element
      const liElement = document.createElement('li');

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';

      // Populate the li element with the input
      liElement.textContent = inputElement.value;

      // Append the delete button to the li element
      liElement.appendChild(deleteButton);

      // Append the li element to the list
      listElement.appendChild(liElement);

      // Add event listener to the delete button that removes the li element when clicked
      deleteButton.addEventListener('click', function() {
        listElement.removeChild(liElement);
      });

      // Send the focus to the input element
      inputElement.focus();

      // Change the input value to nothing
      inputElement.value = "";
    }
  });
});

