// Footer Information
document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastmod").textContent =
document.lastModified;

// Static Weather Values
const temp = 30;
const wind = 10;

// Wind Chill Function
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

let windChill = "N/A";

// Conditions for Metric Wind Chill
if (temp <= 10 && wind > 4.8) {
  windChill = `${calculateWindChill(temp, wind)} °C`;
}

// Display Wind Chill
document.getElementById("windchill").textContent =
windChill;