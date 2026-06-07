document.addEventListener("DOMContentLoaded", () => {
    // Retrieve tracking counter from localStorage, defaulting to 0 if empty
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    
    // Increment count by one upon successful redirection/load
    reviewCount = parseInt(reviewCount) + 1;
    
    // Save updated count back to storage
    localStorage.setItem("reviewCount", reviewCount);
    
    // Update display counter in the DOM
    document.getElementById("review-counter").textContent = reviewCount;

    // Populate footer year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
