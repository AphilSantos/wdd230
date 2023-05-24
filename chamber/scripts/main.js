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


//responsive nav

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#menu");

  hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
  } ))