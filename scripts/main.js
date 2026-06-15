// JS Objects & Arrays
const placesData = [
    { id: 1, name: "Lagos", region: "Africa", population: "15 Million+" },
    { id: 2, name: "Tokyo", region: "Asia", population: "37 Million+" },
    { id: 3, name: "Jakarta", region: "Asia", population: "10 Million+" },
    { id: 4, name: "Abuja", region: "Africa", population: "3 Million+" }
];

// Array Methods (filter/forEach), Template Literals, DOM Manipulation, Conditional Branching
function renderPlaces(filterRegion) {
    const container = document.getElementById("data-container");
    
    if (!container) return; 
    
    container.innerHTML = "";

    const filteredData = filterRegion === "All" 
        ? placesData 
        : placesData.filter(place => place.region === filterRegion);

    filteredData.forEach(place => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${place.name}</h3>
            <p><strong>Region:</strong> ${place.region}</p>
            <p><strong>Population:</strong> ${place.population}</p>
        `;
        container.appendChild(card);
    });
}

// LocalStorage for Form Reviews
function trackReviews() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewCountElem = document.getElementById("review-count");

    // Display existing reviews count
    if (reviewCountElem) {
        let reviews = Number(window.localStorage.getItem("completedReviews")) || 0;
        reviewCountElem.textContent = `Total Reviews Submitted: ${reviews}`;
    }

    // Increment on form submit
    if (reviewForm) {
        reviewForm.addEventListener("submit", () => {
            let reviews = Number(window.localStorage.getItem("completedReviews")) || 0;
            reviews++;
            window.localStorage.setItem("completedReviews", reviews);
        });
    }
}

// Dynamic Footer Dates
function setFooterDates() {
    const currentYearElem = document.getElementById("currentyear");
    const lastModifiedElem = document.getElementById("lastModified");

    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedElem) {
        lastModifiedElem.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Initialize scripts
document.addEventListener("DOMContentLoaded", () => {
    setFooterDates();
    trackReviews();
    
    if (document.getElementById("data-container")) {
        renderPlaces("All");
    }
});