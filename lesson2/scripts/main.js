// Last updated: April 22, 2023


const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const justYear = {year: 'numeric'};

const updateElement = document.getElementById("update");
const lastModified = new Date(document.lastModified);
updateElement.textContent = lastModified.toLocaleString();


document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US', justYear);