const datemessage = document.getElementById("current-date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datemessage.innerHTML = `Today is <strong>${fulldate}</strong>.`;

const justYear = {year: 'numeric'};
document.getElementById('just-year').textContent = new Date().toLocaleDateString('en-US', justYear);

const updateElement = document.getElementById("last-modified");
const lastModified = new Date(document.lastModified);
updateElement.textContent = lastModified.toLocaleString();