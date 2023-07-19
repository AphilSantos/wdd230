var spotlight1 = document.querySelector('.spotlight1');
var spotlight2 = document.querySelector('.spotlight2');
var spotlight3 = document.querySelector('.spotlight3');

function createSpotlightHTML(business) {
  return `

    <div class="spotlight-info">
      <h3 class="detail">${business.name}</h3>
      <p class="detail">${business.address.join(', ')}</p>
      <p class="detail">Phone: ${business.phone}</p>
      <p class="detail"><a href="${business.web}" target="_blank">${business.name} Website</a></p>
      <div class="spotlight-logo">
      <img src="${business.logo}" alt="${business.name} Logo">
      </div>
    </div>
    
  `;
}

function getRandomGoldBusinesses(businesses, count) {
  var goldBusinesses = businesses.filter(function(business) {
    return business.membershipLevel === "gold";
  });

  var randomBusinesses = [];
  var totalGoldBusinesses = goldBusinesses.length;

  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * totalGoldBusinesses);
    randomBusinesses.push(goldBusinesses[randomIndex]);
  }

  return randomBusinesses;
}


fetch('https://aphilsantos.github.io/wdd230/chamber/scripts/json/data.json')
  .then(response => response.json())
  .then(data => {
    var goldBusinesses = getRandomGoldBusinesses(data.business, 3);

    spotlight1.innerHTML = createSpotlightHTML(goldBusinesses[0]);
    spotlight2.innerHTML = createSpotlightHTML(goldBusinesses[1]);
    spotlight3.innerHTML = createSpotlightHTML(goldBusinesses[2]);
  })
  .catch(error => console.error('Error:', error));
