const businessDir = 'https://aphilsantos.github.io/wdd230/chamber/scripts/json/data.json';

getBusinessData();

async function getBusinessData(){
    const response = await fetch(businessDir);
    const data = await response.json();
    console.log(data.business);
    displayBusiness(data.business);
}

const displayBusiness = (business) => {
    const cards = document.querySelector("div.cards");
    business.forEach((item) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("h3");
        let address1 = document.createElement("p");
        let address2 = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");

        card.classList.add("innerCardContent");
        logo.classList.add("businessImage");
        name.classList.add("businessName");
        address1.classList.add("line1");
        address2.classList.add("line2");
        phone.classList.add("phoneNumber");
        web.classList.add("webAddress");

        logo.setAttribute("src", item.logo);
        logo.setAttribute("alt", `Logo of ${item.name}`);
        logo.setAttribute("loading", "lazy");        
        
        name.textContent = `${item.name}`;
        address1.textContent = `${item.address[0]}`;
        address2.textContent = `${item.address[1]}`;
        phone.textContent = `${item.phone}`;
        web.innerHTML = `${item.web}`;            
        web.setAttribute("href", `${item.web}`);
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(phone);
        card.appendChild(web);
        
        cards.appendChild(card);
    });

    const gridbutton = document.querySelector("#gridButton");
    const listbutton = document.querySelector("#listButton");
    const display = document.querySelector("article");
    const allCards = document.querySelector(".cards");

    listbutton.addEventListener("click", () => {
        display.classList.add("list");
        const innerContents = document.querySelectorAll(".innerCardContent");
        const logoImages = document.querySelectorAll(".businessImage");
        innerContents.forEach(innerContent => {
            innerContent.classList.add("list");
        });
        logoImages.forEach(logoImage => {
            logoImage.style.display = 'none';
        });
        allCards.classList.add("list");
    });

    gridbutton.addEventListener("click", () => {
        display.classList.remove("list");
        const innerContents = document.querySelectorAll(".innerCardContent");
        const logoImages = document.querySelectorAll(".businessImage");
        innerContents.forEach(innerContent => {
            innerContent.classList.remove("list");
        });
        logoImages.forEach(logoImage => {
            logoImage.style.display = 'block';
        });
        allCards.classList.remove("list");
    });
}
