// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastmod").textContent = document.lastModified;

// Static weather values
const temp = 30; // °C
const wind = 10; // km/h

// Wind chill function (ONE-LINE return as required)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Conditions check
let windchillText = "N/A";

if (temp <= 10 && wind > 4.8) {
  windchillText = calculateWindChill(temp, wind);
}

// Output
document.getElementById("windchill").textContent = windchillText;