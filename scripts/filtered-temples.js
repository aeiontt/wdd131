const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.textContent =
        navigation.classList.contains("open")
            ? "✖"
            : "☰";
});

const temples = [
{
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-2736.jpg"
},
{
    templeName: "Manti Utah Temple",
    location: "Utah, United States",
    dedicated: "1888",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-39765.jpg"
},
{
    templeName: "Salt Lake Temple",
    location: "Utah, United States",
    dedicated: "1893",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37762.jpg"
},
{
    templeName: "Payson Utah Temple",
    location: "Utah, United States",
    dedicated: "2015",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451.jpg"
},
{
    templeName: "Yigo Guam Temple",
    location: "Guam",
    dedicated: "2020",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26169.jpg"
},
{
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7598.jpg"
},
{
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-43545.jpg"
}
];

const container = document.querySelector("#temple-container");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesList) {

    container.innerHTML = "";

    templesList.forEach((temple) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy">
        `;

        container.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(
        temple => Number(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(
        temple => Number(temple.dedicated) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);
});