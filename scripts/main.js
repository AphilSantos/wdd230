const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const justYear = {year: 'numeric'};

document.getElementById('update').textContent = new Date().toLocaleDateString('en-Us', options);

document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US', justYear);