// Product data array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power converter", averagerating: 4.7 },
  { id: "fs-1987", name: "vaporizer", averagerating: 3.5 },
  { id: "el-2001", name: "low voltage reactor", averagerating: 3.9 },
  { id: "w-1965", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    
    // Populate select element options dynamically
    products.forEach(product => {
        const option = document.createElement("option");
        // Instruction details: ID used for value field, Name used for display
        option.value = product.id; 
        option.textContent = product.name.toUpperCase(); // capitalization optional for style
        productSelect.appendChild(option);
    });

    // Populate footer year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
